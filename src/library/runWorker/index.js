export const timeout = 100 * 1000;

export const runWorker = value => {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject("too slow"), timeout);
    const worker = new Worker("/fibonaccier.js");
    worker.addEventListener("message", function(e) {
      clearTimeout(timer);
      const { data: result } = e;
      resolve(result);
    });
    worker.postMessage(value);
  });
};

export default runWorker;
