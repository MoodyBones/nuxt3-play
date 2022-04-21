<script setup lang="ts">
defineProps({
  state: Array as () => GamesState,
})

const hintMap = {
  0: 'bg-gray-600 text-white',
  1: 'bg-yellow-400 text-black',
  2: 'bg-green-600 text-white',
}
</script>

<template>
  <article>
    <ul>
      <li
        v-for="[guess, hint] in state"
        :key="`${guess}-${hint}`"
        class="flex gap-1"
      >
        <span
          v-for="(letter, i) in guess"
          :key="`${i}-${letter}`"
          class="block w-6 h-6 text-center font-bold uppercase"
          :class="hintMap[hint[i]]"
        >
          {{ letter }}
        </span>
      </li>
    </ul>
  </article>
</template>

<style scoped></style>
