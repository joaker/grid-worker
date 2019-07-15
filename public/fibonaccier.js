/* global self */
/*eslint no-restricted-globals: ["error"]*/

const calc = num => {
  // console.log(num);
  if (num <= 1) return 1;

  return calc(num - 1) + calc(num - 2);
};

self.addEventListener("message", function(e) {
  const { data: value } = e;
  const result = calc(value);
  self.postMessage(result);
});
