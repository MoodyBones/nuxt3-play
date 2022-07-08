<script setup>
defineProps({
  appName: String,
})

const color = useColorMode()
const toggleDark = () => {
  color.value = color.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <nav class="my-2 flex flex-nowrap items-center justify-between">
    <NuxtLink
      to="/"
      class="text-3xl font-extrabold tracking-tight text-gray-700 dark:text-gray-200"
    >
      {{ appName }}
    </NuxtLink>
    <ColorModeSwitch />
    <!-- <button
      class="rounded-full px-5 py-1.5 bg-gray-200 hover:bg-gray-300 text-xs font-bold uppercase tracking-tight"
      @click="toggleDark"
    >
      <span class="sr-only">Switch theme to:</span>
      <span v-if="color === 'light'">☽ dark</span>
      <span v-else>☼ light</span>
    </button> -->
  </nav>
</template>
