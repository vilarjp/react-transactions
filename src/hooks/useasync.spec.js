import { renderHook, act } from '@testing-library/react-hooks';
import { useAsync } from './useAsync';

function deferredPromise() {
  let resolve, reject;

  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });

  return { promise, resolve, reject };
}

const defaultState = {
  status: 'idle',
  data: null,
  error: null,

  isIdle: true,
  isLoading: false,
  isError: false,
  isSuccess: false,

  run: expect.any(Function),
  reset: expect.any(Function),
  setData: expect.any(Function),
  setError: expect.any(Function),
};

const pendingState = {
  ...defaultState,
  status: 'pending',
  isIdle: false,
  isLoading: true,
};

const resolvedState = {
  ...defaultState,
  status: 'resolved',
  isIdle: false,
  isSuccess: true,
};

const rejectedState = {
  ...defaultState,
  status: 'rejected',
  isIdle: false,
  isError: true,
};

describe('useAsync', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
  });

  afterEach(() => {
    console.error.mockRestore();
  });

  it('should run a promise which resolves and reset the state', async () => {
    const { promise, resolve } = deferredPromise();

    const { result } = renderHook(() => useAsync());

    expect(result.current).toEqual(defaultState);

    let promiseSpy;
    act(() => {
      promiseSpy = result.current.run(promise);
    });

    expect(result.current).toEqual(pendingState);

    const resolvedValue = Symbol('resolved value');

    await act(async () => {
      resolve(resolvedValue);
      await promiseSpy;
    });

    expect(result.current).toEqual({
      ...resolvedState,
      data: resolvedValue,
    });

    act(() => {
      result.current.reset();
    });

    expect(result.current).toEqual(defaultState);
  });

  it('should run a promise which rejects', async () => {
    const { promise, reject } = deferredPromise();

    const { result } = renderHook(() => useAsync());

    expect(result.current).toEqual(defaultState);

    let promiseSpy;
    act(() => {
      promiseSpy = result.current.run(promise);
    });

    expect(result.current).toEqual(pendingState);

    const rejectedValue = Symbol('rejected value');

    await act(async () => {
      reject(rejectedValue);
      await promiseSpy.catch(() => {});
    });
    expect(result.current).toEqual({ ...rejectedState, error: rejectedValue });
  });

  it('should be able to set an initial state', () => {
    const data = Symbol('resolved value');
    const customInitialState = { status: 'resolved', data };

    const { result } = renderHook(() => useAsync(customInitialState));

    expect(result.current).toEqual({
      ...resolvedState,
      ...customInitialState,
    });
  });

  it('should set the data', () => {
    const data = Symbol('resolved value');
    const { result } = renderHook(() => useAsync());

    act(() => {
      result.current.setData(data);
    });

    expect(result.current).toEqual({
      ...resolvedState,
      data: data,
    });
  });

  it('should set the error', () => {
    const error = Symbol('rejected value');
    const { result } = renderHook(() => useAsync());

    act(() => {
      result.current.setError(error);
    });

    expect(result.current).toEqual({
      ...rejectedState,
      error: error,
    });
  });

  it('should not update the state if the component is unmounted while the request is pending', async () => {
    const { promise, resolve } = deferredPromise();

    const { result, unmount } = renderHook(() => useAsync());

    let promiseSpy;
    act(() => {
      promiseSpy = result.current.run(promise);
    });
    unmount();

    await act(async () => {
      resolve();
      await promiseSpy;
    });

    expect(console.error).not.toHaveBeenCalled();
  });

  it('should not be able to call run without a promise', () => {
    const { result } = renderHook(() => useAsync());

    expect(() => result.current.run()).toThrowErrorMatchingInlineSnapshot(
      `"The argument passed to useAsync().run must be a promise."`,
    );
  });
});
