import { formatMoney, formatDate } from './formatters';

describe('formatMoney', () => {
  it('should format an amount to a brazilian real', () => {
    expect(formatMoney('')).toMatchInlineSnapshot(`"R$ 0,00"`);
    expect(formatMoney('1.51')).toMatchInlineSnapshot(`"R$ 1,51"`);
    expect(formatMoney(0)).toMatchInlineSnapshot(`"R$ 0,00"`);
    expect(formatMoney(100)).toMatchInlineSnapshot(`"R$ 100,00"`);
    expect(formatMoney(2523.4)).toMatchInlineSnapshot(`"R$ 2.523,40"`);
  });

  it('should thrown error when a invalid amount is used', () => {
    expect(() => formatMoney('any_wrong_amount')).toThrow(
      Error('Invalid amount format'),
    );
    expect(() => formatMoney({})).toThrow(Error('Invalid amount format'));
    expect(() => formatMoney()).toThrow(Error('Invalid amount format'));
    expect(() => formatMoney(null)).toThrow(Error('Invalid amount format'));
    expect(() => formatMoney(undefined)).toThrow(
      Error('Invalid amount format'),
    );
  });
});

describe('formatDate', () => {
  it('should format an ISO date to DD/MM/YYYY hh:mm format', () => {
    expect(formatDate('2020-11-10T19:43:56.451Z')).toMatchInlineSnapshot(
      `"10/11/2020 16:43"`,
    );
  });

  it('should thrown error when a invalid date is used', () => {
    expect(() => formatDate('')).toThrow(Error('Invalid date format'));
    expect(() => formatDate({})).toThrow(Error('Invalid date format'));
    expect(() => formatDate(null)).toThrow(Error('Invalid date format'));
    expect(() => formatDate(undefined)).toThrow(Error('Invalid date format'));
    expect(() => formatDate('any_wrong_date')).toThrow(
      Error('Invalid date format'),
    );
    expect(() => formatDate(0)).toThrow(Error('Invalid date format'));
  });
});
