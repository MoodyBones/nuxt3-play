<template>
  <main class="mx-auto container px-4 md:px-12 flex flex-col">
    <nav class="flex my-2 flex-nowrap justify-between items-center">
      <NuxtLink
        to="/"
        class="text-3xl font-extrabold tracking-tight text-gray-700 dark:text-gray-200"
      >
        {{ appName }}
      </NuxtLink>
      <button
        class="rounded-full px-5 py-1.5 bg-gray-200 hover:bg-gray-300 text-xs font-bold uppercase tracking-tight"
        @click="toggleDark"
      >
        <span class="sr-only">Switch theme to:</span>
        <span v-if="color === 'light'">☽ dark</span>
        <span v-else>☼ light</span>
      </button>
    </nav>
  </main>
</template>

<script setup>
import { useColorMode } from '@vueuse/core'

const color = useColorMode()
const toggleDark = () => {
  color.value = color.value === 'light' ? 'dark' : 'light'
}

defineProps({
  appName: String,
})
</script>
