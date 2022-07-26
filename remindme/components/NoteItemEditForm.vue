<script setup>
const props = defineProps({
  label: { required: true, type: String },
  id: { required: true, type: String },
})
const emit = defineEmits(['editCancelled', 'itemEdited'])

const newLabel = ref(props.label)
const labelInput = ref(null) // the name must match template ref value

onMounted(() => {
  // we don't need to use $nextTick because the component has already been added to the DOM when mounted() is called.
  labelInput.value.focus()
})

function onEditSubmit() {
  if (newLabel.value && newLabel.value !== props.label) {
    emit('itemEdited', newLabel.value)
  }
}

function onCancel() {
  emit('editCancelled')
}
</script>

<template>
  <form
    class="flex flex-col justify-between gap-6 pb-6"
    @submit.prevent="onEditSubmit"
  >
    <div class="flex-grow">
      <label class="sr-only">Edit Name for &quot;{{ label }}&quot;</label>
      <input
        :id="id"
        ref="labelInput"
        v-model.lazy.trim="newLabel"
        type="text"
        autocomplete="off"
        class="w-full appearance-none rounded-xl border-2 border-gray-200 bg-gray-200 py-3 px-4 text-lg leading-tight text-gray-700 focus:outline-none"
      />
    </div>
    <div class="flex flex-shrink gap-4 self-end">
      <button
        type="button"
        class="mt-2 rounded-full border-2 border-gray-300 bg-transparent px-4 py-1 font-medium text-gray-700 shadow-sm transition-all ease-out hover:border-gray-700 hover:bg-gray-700 hover:text-white"
        @click="onCancel"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
        <span class="sr-only">Cancel editing {{ label }}</span>
      </button>
      <button
        type="submit"
        class="mt-2 rounded-full border-2 border-green-600 bg-green-600 px-4 py-1 font-medium text-gray-50 shadow-sm transition-all ease-out hover:border-green-500 hover:bg-green-500 hover:text-white"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
        <span class="sr-only">Save edit for {{ label }}</span>
      </button>
    </div>
  </form>
</template>
