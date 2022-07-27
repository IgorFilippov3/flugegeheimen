import { pickRandomItem } from '../pick-random-item';

describe('pickRandomItem', () => {
  it('returns random number from array of numbers', () => {
    const list: number[] = [1, 2, 3, 4, 5, 6];
    const item: number | null = pickRandomItem<number>(list);
    expect(item).toBeDefined();
  });

  it('returns always the first result if the length of array is 1', () => {
    const list: number[] = [1];
    const item: number | null = pickRandomItem<number>(list);
    expect(item).toBe(1);
  });

  it('returns null if passed value is not a list', () => {
    expect(pickRandomItem(null as any)).toBe(null);
    expect(pickRandomItem({} as any)).toBe(null);
    expect(pickRandomItem(undefined as any)).toBe(null);
  });
});