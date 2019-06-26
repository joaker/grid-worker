export const calc = (num) => {
  if (num <= 1) return 1;

  return calc(num - 1) + calc(num - 2);
}
