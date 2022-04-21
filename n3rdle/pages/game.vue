<script setup lang="ts">
// const state = [['guess', '00022']]
// move logic to composables
const { state } = useGameState()
</script>

<template>
  <section>
    <h2>Playing game now</h2>
    <GameBoard :state="state" />
  </section>
</template>

<style scoped></style>
