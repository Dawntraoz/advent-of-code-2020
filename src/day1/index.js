const readInput = require('../utils/readInput');

const solution1 = async () => {

  const fileInput = await readInput(__dirname);
  const arrayFileInput = fileInput.split('\n');
  const letMeKnow = [];

  arrayFileInput.map(input => {
    if (arrayFileInput.some(comparedInput => (Number(input) + Number(comparedInput)) === 2020)) {
      letMeKnow.push(Number(input))
    }
  })
  
  console.log(letMeKnow[0] * letMeKnow[1])
}

solution1()

const solution2 = async () => {

  const fileInput = await readInput(__dirname);
  const arrayFileInput = fileInput.split('\n');
  let letMeKnow = [];

  arrayFileInput.map(input => {
    arrayFileInput.map(input2 => {
      if (arrayFileInput.some(input3 => (Number(input) + Number(input2) + Number(input3)) === 2020)) {
        letMeKnow.push(Number(input))
      }
    })
  })

  letMeKnow = letMeKnow.filter((input, index, self) => self.indexOf(input) === index)
  
  console.log(letMeKnow[0] * letMeKnow[1] * letMeKnow[2])
}

solution2()
