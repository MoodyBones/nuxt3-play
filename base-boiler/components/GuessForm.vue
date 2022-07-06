<script setup lang="ts">
const emit = defineEmits<{
  // tell it what it should expext
  // and event type called guess
  // and its going to parse a string
  // this is an example of a fully typed event, so it knows what it is emitting
  (event: 'guess', guess: string): void
}>()

const guess = ref('')
</script>

<template>
  <form @submit.prevent="() => emit('guess', guess)">
    <label>
      Your guess
      <input
        type="text"
        v-model="guess"
        minlength="5"
        maxlength="5"
        class="font-bold uppercase tracking-wide bg-white"
      />
    </label>
    <button :disabled="guess.length !== 5" type="submit">Guess</button>
  </form>
</template>

<style lang="scss" scoped></style>
