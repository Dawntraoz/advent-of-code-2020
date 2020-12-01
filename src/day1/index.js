const readInput = require('../utils/readInput');

const solution1 = async () => {

  const fileInput = await readInput(__dirname);
  const arrayFileInput = fileInput.split('\n');
  let letMeKnow = [];

  arrayFileInput.map(input => {
    arrayFileInput.some(input2 => {
      if((+input + +input2) === 2020) {
        letMeKnow = [+input, +input2]
      }
    })
  })
  
  const result = letMeKnow.reduce((acc, i) => acc * i, 1)
  console.log(result)
}

solution1()

const solution2 = async () => {

  const fileInput = await readInput(__dirname);
  const arrayFileInput = fileInput.split('\n');
  let letMeKnow = [];

  arrayFileInput.map(input => {
    arrayFileInput.map(input2 => {
      arrayFileInput.some(input3 => {
        if ((+input + +input2 + +input3) === 2020) {
          letMeKnow = [+input, +input2, +input3]
        }
      })
    })
  })

  const result = letMeKnow.reduce((acc, i) => acc * i , 1)
  console.log(result)
}

solution2()
