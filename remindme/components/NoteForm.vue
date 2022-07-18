<script setup>
const emit = defineEmits(['noteAdded'])
const label = ref('')

function onSubmit() {
  if (label.value === '') return
  emit('noteAdded', label.value)
  label.value = ''
}
</script>

<template>
  <form
    class="flex flex-col justify-between gap-2 border-b-2 border-gray-100 pb-4"
    @submit.prevent="onSubmit"
  >
    <div class="mt-1.5 flex-grow text-gray-900">
      <label for="new-note-input"> What needs to be done? </label>
      <input
        id="new-note-input"
        v-model.lazy.trim="label"
        class="mt-4 w-full appearance-none rounded-xl border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:outline-none"
        type="text"
        name="new-note"
        autocomplete="off"
      />
    </div>
    <div class="flex-shrink self-end">
      <button
        class="mt-2 rounded-full border-2 border-gray-600 bg-gray-600 px-4 py-1 font-medium text-gray-50 shadow-sm transition-all ease-out hover:bg-gray-700 hover:text-white"
        type="submit"
      >
        Add
      </button>
    </div>
  </form>
</template>
