<script setup>
const props = defineProps({
  appName: String,
})
</script>

<template>
  <nav class="my-3">
    <ul class="flex flex-nowrap items-center justify-between">
      <li>
        <NuxtLink
          to="/"
          class="text-3xl font-extrabold tracking-tight text-gray-700 dark:text-gray-200"
        >
          {{ props.appName }}
        </NuxtLink>
      </li>
      <li>
        <ColorModeSwitch />
      </li>
    </ul>
  </nav>
</template>
