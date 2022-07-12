export function isNumericString(v: string): boolean {
  return !isNaN(parseInt(v, 10));
}
