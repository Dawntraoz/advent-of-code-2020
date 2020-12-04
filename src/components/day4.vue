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
import { inputDay4 } from '../inputs/input4'

export default {
  name: 'day4',
  data() {
    return {
      fileInput: inputDay4,
      result1: '',
      result2: '',
    }
  },
  methods: {
    solution1() {
      const fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
      const passports = this.fileInput.split('\n\n');
      
      const validPassports = passports.filter(passport => {
        const arrayPassport = passport.split('\n').join(' ').split(' ')
        const passportFields = arrayPassport.map(i => i.split(':')[0])
        const success = fields.every(val => passportFields.includes(val))
        return success
      })
      
      this.result1 = validPassports.length
    },
    solution2() {
      const validation = {
        'byr': '(19[2-8][0-9]|199[0-9]|200[0-2])',
        'iyr': '(201[0-9]|2020)',
        'eyr': '(202[0-9]|2030)',
        'hgt': '((1[5-8][0-9]|19[0-3])cm)|((59|6[0-9]|7[0-6])in)',
        'hcl': '^#([a-fA-F0-9]{6})$',
        'ecl': 'amb|blu|brn|gry|grn|hzl|oth',
        'pid': '^\\d{9}$'
      }
      const passports = this.fileInput.split('\n\n');
      
      const validPassports = passports.filter(passport => {
        const arrayPassport = passport.split('\n').join(' ').split(' ')
        const passportFields = arrayPassport.map(i => i.split(':')[0])
        const validationSuccess = arrayPassport.every(pass => {
          const [ key, val ] = pass.split(':')
          if ((validation[key] && (val.match(new RegExp(validation[key], 'g')) || []).length) || key === 'cid') return true
        })
        if (!validationSuccess) return false
        
        return Object.keys(validation).every(val => passportFields.includes(val))
      })
      
      this.result2 = validPassports.length
    }
  }
}
</script>
