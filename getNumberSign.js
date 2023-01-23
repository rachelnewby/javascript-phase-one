const getNumberSign = (number) => {
  if (number === 0) {
    return 'Zero';
  } else if (number > 0) {
    return 'Positive';
  } else if (number < 0) {
    return 'Negative'
  };
};

module.exports = getNumberSign;