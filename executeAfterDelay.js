const printHello = () => {
  console.log('Hello!');
};

const executeAfterDelay = (time, callbackFunction) => {
  timeInSeconds = time * 1000;
  setTimeout(callbackFunction, timeInSeconds);
};

executeAfterDelay(5, printHello);