export function pickRandomItem<T>(list: T[]): T | null {
  if (!Array.isArray(list)) return null;
  const random = Math.floor(Math.random() * list.length);
  return list[random];
}