const readInput = require('../utils/readInput');

const solution1 = async () => {

  const fileInput = await readInput(__dirname);
  const arrayFileInput = fileInput.split('\n');
  let letMeKnow = [];

  arrayFileInput.map(input => {
    if (letMeKnow.length > 0) return

    arrayFileInput.some(input2 => {
      if((+input + +input2) === 2020) {
        letMeKnow = [+input, +input2]
        return
      }
    })
  })
  
  return letMeKnow.reduce((acc, i) => acc * i, 1)
}

solution1().then((result) => console.log(result))

const solution2 = async () => {

  const fileInput = await readInput(__dirname);
  const arrayFileInput = fileInput.split('\n');
  let letMeKnow = [];

  arrayFileInput.map(input => {
    if (letMeKnow.length > 0) return

    arrayFileInput.map(input2 => {
      if (letMeKnow.length > 0) return

      arrayFileInput.some(input3 => {
        if ((+input + +input2 + +input3) === 2020) {
          letMeKnow = [+input, +input2, +input3]
          return
        }
      })
    })
  })

  return letMeKnow.reduce((acc, i) => acc * i , 1)
}

solution2().then((result) => console.log(result))
