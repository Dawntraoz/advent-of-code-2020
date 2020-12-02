<template>
  <div>
    <textarea v-model="fileInput" placeholder="Introduce the input to see the result" />
    <div v-if="fileInput">
      <div class="flex flex-wrap items-center py-2">
        <button @click="solution1()">Solution 1</button>
        <p v-if="result1">Result 1: {{ result1 }}</p>
      </div>
      <div class="flex flex-wrap items-center py-2">
        <button @click="solution2()">Solution 2</button>
        <p v-if="result2">Result 2: {{ result2 }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { inputDay2 } from '../inputs/input2'

export default {
  name: 'day2',
  data() {
    return {
      fileInput: inputDay2,
      result1: '',
      result2: '',
    }
  },
  methods: {
    solution1() {
      const arrayFileInput = this.fileInput.split('\n');

      const resultPasswords = arrayFileInput.filter(input => {
        const [policy, password] = input.split(':')
        const [times, letter] = policy.split(' ')
        const [minTimes, maxTimes] = times.split('-')

        const occurrences = (password.match(new RegExp(letter, 'g')) || []).length

        if(occurrences >= minTimes && occurrences <= maxTimes) return true
      })
      
      this.result1 = resultPasswords.length
    },
    solution2() {
      const arrayFileInput = this.fileInput.split('\n');

      const resultPasswords = arrayFileInput.filter(input => {
        const [policy, password] = input.split(':')
        const [positions, letter] = policy.split(' ')
        const [pos1, pos2] = positions.split('-')

        if((password[pos1] === letter && password[pos2] !== letter) || (password[pos2] === letter && password[pos1] !== letter)) return true
      })
      
      this.result2 = resultPasswords.length
    }
  }
}
</script>
