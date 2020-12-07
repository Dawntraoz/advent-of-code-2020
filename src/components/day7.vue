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
import { inputDay7 } from '../inputs/input7'

export default {
  name: 'day7',
  data() {
    return {
      fileInput: inputDay7,
      result1: '',
      result2: '',
    }
  },
  methods: {
    solution1() {
      let rules = this.fileInput.split('\n');

      let bags = rules.filter(rule => rule.includes('shiny gold') && rule.split('bags')[0] !== 'shiny gold ');
      let ruleMet = [];

      do {
        rules = rules.reduce((p, c) => (!bags.some(bag => bag === c) && p.push(c), p),[]);
        ruleMet = rules.filter(rule => bags.some(bag => bag !== rule && rule.includes(bag.split('bags')[0])));
        bags = [...bags, ...ruleMet]
      } while(ruleMet.length > 0)
      
      this.result1 = bags.length
    },
    getLine(s) {
      return s.split('contain')[1].split(',').map(b => b.replace(/bags|bag|\./g, '').trim())
    },
    countBags(rules, cb) {
      const num = +cb.slice(0, cb.indexOf(' ')).trim();
      if (Number.isNaN(num)) return 0;
      const bag = cb.slice(cb.indexOf(' '), cb.length).trim();

      let numBags = num;
      this.getLine(rules.filter(b => b.includes(bag + ' bags contain'))[0]).map(cb2 => {
        numBags += num*this.countBags(rules, cb2);
      })
      return numBags;
    },
    solution2() {
      let rules = this.fileInput.split('\n');

      const shinyBag = rules.filter(rule => rule.includes('shiny gold bags contain'))[0];
      const containShinyBag = this.getLine(shinyBag);
      let totalBags = 0;

      containShinyBag.map(cb => {
        totalBags += this.countBags(rules, cb);
      })
      
      this.result2 = totalBags
    }
  }
}
</script>
