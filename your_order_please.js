function order(words) {
  
  if (words === '' || words === undefined) return '';
  
  const wordsArray = words.split(' ');
  const newWordOrder = [];

  wordsArray.forEach(word => {
    for (char of word) {
      const x = isNaN(char);
      if (!x) {
        newWordOrder[char - 1] = word;
      }
    }
  });

  return newWordOrder.join(' ');
     
};

// this line calls the method above and parses command line arguments
// the first is the interpreter and the second is the path
// https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/
//
console.log(order(process.argv.slice(2)[0]));
//
// how to run on CLI
// > node your_order_please 'te4st i2s Thi1s a3'
