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
import { inputDay8 } from '../inputs/input8'

export default {
  name: 'day8',
  data() {
    return {
      fileInput: inputDay8,
      result1: '',
      result2: '',
    }
  },
  methods: {
    getAcc(input) {
      let execLinesIndex = [];
      let newLine = 0;
      let acc = 0;

      do {
        const [action, number] = input[newLine].split(' ');
        execLinesIndex = [...execLinesIndex, newLine];
        switch(action) {
          case 'nop':
            newLine += 1;
            break;
          case 'acc':
            acc += +number;
            newLine += 1;
            break;
          case 'jmp':
            newLine += +number;
            break;
        }
      } while (!execLinesIndex.includes(newLine) && input[newLine]);

      return { acc, execLinesIndex }
    },
    solution1() {
      this.result1 = this.getAcc(this.fileInput.split('\n')).acc
    },
    solution2() {
      const inputParsed = this.fileInput.split('\n');
      const insIndexs = this.getAcc(inputParsed).execLinesIndex.filter(i => inputParsed[i].includes('jmp') || inputParsed[i].includes('nop'));
      let resolved = [];
      
      insIndexs.forEach(index => {
        const fixedInputParsed = [...inputParsed];
        let newIns = fixedInputParsed[index];
        newIns = fixedInputParsed[index].includes('jmp') ? newIns.replace('jmp', 'nop') : newIns.replace('nop', 'jmp');
        fixedInputParsed[index] = newIns;

        if (this.getAcc(fixedInputParsed).execLinesIndex.includes(inputParsed.length - 1)) {
          resolved = fixedInputParsed;
          return;
        }
      })
      
      this.result2 = this.getAcc(resolved).acc
    }
  }
}
</script>
