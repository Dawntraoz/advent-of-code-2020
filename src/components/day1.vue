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
import { inputDay1 } from '../inputs/input1'

export default {
  name: 'day1',
  data() {
    return {
      fileInput: inputDay1,
      result1: '',
      result2: '',
    }
  },
  methods: {
    solution1() {
      const arrayFileInput = this.fileInput.split('\n');
      let answer = [];

      arrayFileInput.map(input => {
        if (answer.length > 0) return

        arrayFileInput.some(input2 => {
          if((+input + +input2) === 2020) {
            answer = [+input, +input2]
            return
          }
        })
      })
      
      this.result1 = answer.reduce((acc, i) => acc * i, 1)
    },
    solution2() {
      const arrayFileInput = this.fileInput.split('\n');
      let answer = [];

      arrayFileInput.map(input => {
        if (answer.length > 0) return

        arrayFileInput.map(input2 => {
          if (answer.length > 0) return

          arrayFileInput.some(input3 => {
            if ((+input + +input2 + +input3) === 2020) {
              answer = [+input, +input2, +input3]
              return
            }
          })
        })
      })

      this.result2 = answer.reduce((acc, i) => acc * i , 1)
    }
  }
}
</script>
