import { httpClient } from './http-client';

const apiURL = process.env.REACT_APP_API_URL;

describe('http-client', () => {
  beforeAll(() => jest.spyOn(window, 'fetch'));

  afterEach(() => jest.resetAllMocks());

  it('should call fetch with correct endpoint and GET request', async () => {
    const endpoint = 'any_endpoint';
    const mockResponse = { success: true };

    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await httpClient(endpoint);

    expect(window.fetch).toHaveBeenCalledWith(
      `${apiURL}/${endpoint}`,
      expect.objectContaining({
        body: undefined,
        headers: { 'Content-Type': 'application/json' },
        method: 'GET',
      }),
    );
    expect(result).toEqual(mockResponse);
  });

  it('should call fetch with correct endpoint and POST request when data is provided', async () => {
    const endpoint = 'any_endpoint';
    const data = { params: 'any_params' };
    const response = { data: 'any_data' };

    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => response,
    });

    const result = await httpClient(endpoint, { data });

    expect(window.fetch).toHaveBeenCalledWith(
      `${apiURL}/${endpoint}`,
      expect.objectContaining({
        body: '{"params":"any_params"}',
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      }),
    );
    expect(result).toEqual(response);
  });

  it(`correctly rejects the promise if there's an error`, async () => {
    const testError = { message: 'Test error' };
    const endpoint = 'any_endpoint';

    window.fetch.mockResolvedValueOnce({
      json: async () => testError,
    });

    const error = await httpClient(endpoint).catch((e) => e);

    expect(error).toEqual(testError);
  });
});
