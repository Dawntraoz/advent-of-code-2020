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
import { inputDay5 } from '../inputs/input5'

export default {
  name: 'day5',
  data() {
    return {
      fileInput: inputDay5,
      result1: '',
      result2: '',
    }
  },
  methods: {
    newPosition(seat, returnID) {
      let row = [0, 127];
      let column = [0, 7];

      for (var i = 0; i< seat.length; i++) {
        switch (seat.charAt(i)) {
          case 'F':
            row = (row[1] - row[0] === 1) ? row[0] : [row[0], row[0] + Math.floor((row[1] - row[0])/2)]
            break;
          case 'B':
            row =  (row[1] - row[0] === 1) ? row[1] : [Math.ceil((row[1] - row[0])/2) + row[0], row[1]]
            break;
          case 'L':
            column = (column[1] - column[0] === 1) ? column[0] : [column[0], column[0] + Math.floor((column[1] - column[0])/2)]
            break;
          case 'R':
            column =  (column[1] - column[0] === 1) ? column[1] : [Math.ceil((column[1] - column[0])/2) + column[0], column[1]]
            break;
        }
      }

      return returnID ? row*8 + column : [row, column]
    },
    solution1() {
      const seats = this.fileInput.split('\n');
      
      this.result1 = Math.max(...seats.map(seat => this.newPosition(seat, true)))
    },
    columnMissing(cols, length) { 
      let colMissed = 0;

      for (let i = 0; i < length; i++) {
          // Find XOR with the result 
          colMissed = colMissed ^ cols[i]; 
      } 

      return colMissed; 
    },
    solution2() {
      const seats = this.fileInput.split('\n');
      
      const idSeats = seats.map(seat => this.newPosition(seat))

      let count = {};
      idSeats.forEach(pos => count[pos[0]] = (count[pos[0]]||0) + 1);
      const mySeatRow = Object.keys(count).filter(key => count[key] < 8)[0];

      const columns = idSeats.filter(pos => pos[0] === +mySeatRow).map(pos => pos[1]);
      const mySeatCol = this.columnMissing(columns, columns.length);

      this.result2 = mySeatRow*8 + mySeatCol
    }
  }
}
</script>
