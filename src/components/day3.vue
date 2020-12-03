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
import { inputDay3 } from '../inputs/input3'

export default {
  name: 'day3',
  data() {
    return {
      fileInput: inputDay3,
      result1: '',
      result2: '',
    }
  },
  methods: {
    getTrees(right, bottom) {
      const arrayFileInput = this.fileInput.split('\n');

      return arrayFileInput.map((input, index) => {
        if (index%bottom === 0) {
          const pos = ((index/bottom)*right >= input.length) ? (((index/bottom)*right) % (input.length)) : index/bottom*right
          return input[pos]
        }
        return ''
      })
    },
    solution1() {
      this.result1 = this.getTrees(3, 1).filter(char => char === '#').length
    },
    solution2() {
      const resultMap1 = this.getTrees(1, 1).filter(char => char === '#').length
      const resultMap2 = this.getTrees(3, 1).filter(char => char === '#').length
      const resultMap3 = this.getTrees(5, 1).filter(char => char === '#').length
      const resultMap4 = this.getTrees(7, 1).filter(char => char === '#').length
      const resultMap5 = this.getTrees(1, 2).filter(char => char === '#').length
      this.result2 = resultMap1*resultMap2*resultMap3*resultMap4*resultMap5
    }
  }
}
</script>
