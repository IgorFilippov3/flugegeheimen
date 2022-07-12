import { isNumericString } from '../is-numeric-string';

describe('isNumericString', () => {
  it('1 is true', () => expect(isNumericString('1')).toBeTruthy());
  it('1.2 is true', () => expect(isNumericString('1.2')).toBeTruthy());
  it ('0 is true', () => expect(isNumericString('0')).toBeTruthy());

  it('swiss-knife is false', () => expect(isNumericString('swiss-knife')).toBeFalsy());
  it('swiss-knife-2 is false', () => expect(isNumericString('swiss-knife-2')).toBeFalsy());
});