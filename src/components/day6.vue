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
import { inputDay6 } from '../inputs/input6'

export default {
  name: 'day6',
  data() {
    return {
      fileInput: inputDay6,
      result1: '',
      result2: '',
    }
  },
  methods: {
    solution1() {
      const groups = this.fileInput.split('\n\n');
      
      const questionAnswered = groups.map(group => {
        const groupChars = group.split(/\s/).join('').split('')
        return groupChars.filter((char, index, self) => self.indexOf(char) === index)
      })
      
      this.result1 = questionAnswered.reduce((acc, i) => acc + i.length , 0)
    },
    solution2() {
      const groups = this.fileInput.split('\n\n');
      
      const questionAnswered = groups.map(group => {
        const people = group.split(/\s/).length
        const groupChars = group.split(/\s/).join('').split('')

        let count = {};
        groupChars.forEach(char => count[char] = (count[char]||0) + 1);
        return Object.keys(count).filter((char) => count[char] === people)
      })
      
      this.result2 = questionAnswered.reduce((acc, i) => acc + i.length , 0)
    }
  }
}
</script>
