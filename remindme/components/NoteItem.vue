<script setup>
const props = defineProps({
  label: { required: true, type: String },
  done: { default: false, type: Boolean },
  id: { required: true, type: String },
})
const emit = defineEmits(['checkbox-changed', 'item-deleted', 'on-edit'])

const isEditing = ref(false)
const isDone = computed(() => props.done)
const editButton = ref(null) // this name must match the template ref value

function toggleToItemEditForm() {
  isEditing.value = true
}

function itemEdited(newLabel) {
  emit('onEdit', newLabel)
  isEditing.value = false
  focusOnEditButton()
}

function editCancelled() {
  isEditing.value = false
  focusOnEditButton()
}

function focusOnEditButton() {
  // If a method needs to be invoked after the DOM has updated.
  // Wrap the existing function body inside a $nextTick() call.
  nextTick(() => {
    editButton.value.focus()
  })
}
</script>

<template>
  <transition>
    <div
      v-if="!isEditing"
      class="flex items-center justify-between gap-6 rounded-xl border border-gray-200 bg-gray-50 p-4 pb-6"
    >
      <div class="flex-grow">
        <input
          :id="id"
          type="checkbox"
          :checked="isDone"
          @change="$emit('checkbox-changed')"
          class="ml-2 mr-6 scale-150 checked:bg-green-600"
        />
        <label :for="id" class="text-xl text-gray-800">{{ label }}</label>
      </div>
      <div class="flex flex-shrink gap-4 self-end">
        <button
          type="button"
          @click="$emit('item-deleted')"
          class="text-gray-500 hover:text-red-600"
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
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            ></path>
          </svg>
          <span class="sr-only">Delete {{ label }}</span>
        </button>
        <button
          ref="editButton"
          type="button"
          @click="toggleToItemEditForm"
          class="rounded-full border-2 border-gray-500 bg-gray-500 px-1 py-1 font-medium text-gray-50 shadow-sm transition-all ease-out hover:border-gray-700 hover:bg-gray-700 hover:text-white"
        >
          <svg
            class="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            ></path>
          </svg>
          <span class="sr-only">Edit {{ label }}</span>
        </button>
      </div>
    </div>
    <NoteItemEditForm
      v-else
      :id="id"
      :label="label"
      @item-edited="itemEdited"
      @edit-cancelled="editCancelled"
    />
  </transition>
</template>
