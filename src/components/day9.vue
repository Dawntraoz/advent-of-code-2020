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
import { inputDay9 } from '../inputs/input9'

export default {
  name: 'day9',
  data() {
    return {
      fileInput: inputDay9,
      result1: '',
      result2: '',
    }
  },
  methods: {
    solution1() {
      const arrayFileInput = this.fileInput.split('\n').map(input => +input);
      const setOfNumbers = 25;
      let answer = [];

      arrayFileInput.forEach((input, index) => {
        if (index < setOfNumbers) return;
        const previousNumbers = arrayFileInput.slice(index - setOfNumbers, index);
        
        previousNumbers.map(number => {
          if (previousNumbers.some(number2 => ((number !== number2) && ((number + number2) === input)))) {
            answer = [...answer, input];
          }
        })
      })
      
      this.result1 = arrayFileInput.slice(setOfNumbers, arrayFileInput.length - 1).filter(i => !answer.includes(i))[0]
    },
    solution2() {
      const arrayFileInput = this.fileInput.split('\n').map(input => +input);
      this.solution1();
      const mySum = this.result1;
      let range = 2;
      let answer = [];

      while (answer.length === 0) {
        arrayFileInput.forEach((number, index) => {
          if (index < range) return;
          let rangeArray = [];
          for (let i=index - range; i < index; i++) {
            rangeArray = [...rangeArray, arrayFileInput[i]]
          }
          if (mySum === rangeArray.reduce((acc, curr) => acc + curr, 0)) { answer = rangeArray }
        })
        range++;
      }
      
      this.result2 = Math.min(...answer) + Math.max(...answer)
    }
  }
}
</script>
