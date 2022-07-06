<script setup lang="ts">
// const state = [['guess', '00022']]
// move logic to composables
const { state, submitGuess } = useGameState()
</script>

<template>
  <section>
    <h2>Playing game now</h2>
    <GameBoard :state="state" />
    <GuessForm @guess="submitGuess" />
  </section>
</template>

<style scoped></style>
