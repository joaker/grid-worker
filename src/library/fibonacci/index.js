export const calc = (num) => {
  if (num <= 1) return 1;

  return calc(num - 1) + calc(num - 2);
}

export const runFibonacci = (value, callback, sync = true) => {
  if(sync) {
    callback(calc(value));
  }

  throw 'not implemented - async fibonacci is not implemented';

};


export const fibonacci = (value) => {
  const start = Date.now() / 1000;
  console.log(`running fibonacci for value: ${ value }`);
  return new Promise((resolve) => {
    const onResult = (result) => {
      const end = Date.now() / 1000;
      const time = end - start;
      console.log(`completed fibonacci for value: ${ value } <${time}s>`);
      resolve({ value, result, time })
    };
    runFibonacci(value, onResult);
  });
};

export default fibonacci;
// export default calc;
