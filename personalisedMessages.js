const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

// const message = (name) => {
//   return `Hi ${name}! 50% off our best candies for you today!`
// }

// const generateMessages = (array) => {
//   return array.map(message);
// };

// console.log(generateMessages(names));

function generateMessages(array){
  return array.map(name => `Hi ${name}! 50% off our best candies for you today!`);
}

console.log(generateMessages(names))