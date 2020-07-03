const maze = (size) => {
  let parameter;
  let value = '\n'; // variable value will contain the final answer
  if (size > 4 && size % 2 != 0) {
    for (i = 1; i <= size; i++) {
      for (j = 1; j <= size; j++) {
        if (i % 2 == 0) {
          if (j == 1) {
            value += '@';
          } else if (j == size) {
            value += '@';
          } else {
            value += ' ';
          }
        } else {
          if (j == 2 && parameter == 1) {
            value += ' ';
          } else if (j == size - 1 && parameter == 0) {
            value += ' ';
          } else {
            value += '@';
          }
          parameter = !parameter;
        }
      }
      value += '\n';
    }
    return console.log(`here's a maze made by length of ${size}\n${value}`);
  } else {
    return console.log('error');
  }
};
maze(7);
