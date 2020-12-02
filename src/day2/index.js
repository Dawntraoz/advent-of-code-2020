const readInput = require('../utils/readInput');

const solution1 = async () => {

  const fileInput = await readInput(__dirname);
  const arrayFileInput = fileInput.split('\n');

  const resultPasswords = arrayFileInput.filter(input => {
    const [policy, password] = input.split(':')
    const [times, letter] = policy.split(' ')
    const [minTimes, maxTimes] = times.split('-')

    const occurrences = (password.match(new RegExp(letter, 'g')) || []).length

    if(occurrences >= minTimes && occurrences <= maxTimes) return true
  })
  
  return resultPasswords.length
}

solution1().then((result) => console.log('solution 1:', result))

const solution2 = async () => {
  const fileInput = await readInput(__dirname);
  const arrayFileInput = fileInput.split('\n');

  const resultPasswords = arrayFileInput.filter(input => {
    const [policy, password] = input.split(':')
    const [positions, letter] = policy.split(' ')
    const [pos1, pos2] = positions.split('-')

    if((password[pos1] === letter && password[pos2] !== letter) || (password[pos2] === letter && password[pos1] !== letter)) return true
  })
  
  return resultPasswords.length
}

solution2().then((result) => console.log('solution 2:', result))
