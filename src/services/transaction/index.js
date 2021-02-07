import { httpClient } from '../http-client';

export function list() {
  return httpClient('transactions');
}

export function create(transaction) {
  return httpClient('transactions', { data: transaction });
}
