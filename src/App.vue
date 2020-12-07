<template>
  <div class="container py-8 md:py-16">
    <header class="pb-6 text-center">
      <h1 class="font-title text-3xl md:text-6xl">Advent of code 2020 with Vue 3</h1>
    </header>
    <section class="flex flex-wrap lg:-mr-6">
      <div v-for="(day, index) in solutions" :key="day" class="w-full lg:w-1/2 lg:pr-6 pb-4">
        <header class="pb-4">
          <h2 class="font-title text-2xl text-green-500">Day {{ index + 1 }}</h2>
        </header>
        <component :is="day" />
      </div>
    </section>
  </div>
</template>

<script>
import { day1, day2, day3, day4, day5, day6, day7 } from './components'

export default {
  name: 'App',
  components: {
    day1,
    day2,
    day3,
    day4,
    day5,
    day6,
    day7
  },
  data() {
    return {
      solutions: [
        'day1',
        'day2',
        'day3',
        'day4',
        'day5',
        'day6',
        'day7'
      ]
    }
  }
}
</script>
