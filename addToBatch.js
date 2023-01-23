const addToBatch = (array, number) => {
  if (array.length >= 5) {
    return array;
  } else {
    return array.concat(number);
  };
};

console.log(addToBatch([1], 3)); 
// [ 1, 3 ]

console.log(addToBatch([1, 2, 3], 4)); 
// [ 1, 2, 3, 4 ]

console.log(addToBatch([], 8)); 
// [ 8 ]

console.log(addToBatch([1, 2, 3, 4, 5, 6], 7)); 
// [ 1, 2, 3, 4, 5, 6 ]

console.log(addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); 
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]