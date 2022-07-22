<template>
  <transition>
    <div
      v-if="!isEditing"
      class="flex justify-between gap-6 rounded-xl border border-b-2 border-gray-200 bg-gray-50 p-4 pb-6"
    >
      <div class="flex-grow">
        <input
          :id="id"
          type="checkbox"
          :checked="isDone"
          @change="$emit('checkboxChanged')"
          class="ml-2 mr-6 scale-150"
        />
        <label :for="id" class="text-xl text-gray-900">{{ label }}</label>
      </div>
      <div class="flex flex-shrink gap-4 self-end">
        <button ref="editButton" type="button" @click="toggleToItemEditForm">
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
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            ></path>
          </svg>
          <span class="sr-only">Edit {{ label }}</span>
        </button>
        <button type="button" @click="$emit('item-deleted')">
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
      </div>
    </div>
    <!-- <NoteItemEditForm
      v-else
      :id="id"
      :label="label"
      @item-edited="itemEdited"
      @edit-cancelled="editCancelled"
    /> -->
  </transition>
</template>

<script setup>
const props = defineProps({
  label: { required: true, type: String },
  done: { default: false, type: Boolean },
  id: { required: true, type: String },
})
defineEmits([
  'checkboxChanged',
  'itemDeleted',
  // 'edit-cancelled',
])

const isEditing = ref(false)
const isDone = computed(() => props.done)

function toggleToItemEditForm() {
  // will output HTML element referenced
  // console.log(this.$refs.editButton)
  isEditing.value = true
}

// function itemEdited(newLabel) {
//   this.$emit('item-edited', newLabel)
//   this.isEditing = false
//   // move user focus to edit button
//   this.focusOnEditButton()
// }

// function editCancelled() {
//   this.isEditing = false
//   // move user focus to edit button
//   this.focusOnEditButton()
// }

// function focusOnEditButton() {
//   // If a method needs to be invoked after the DOM has updated.
//   // Wrap the existing function body inside a $nextTick() call.
//   this.$nextTick(() => {
//     // assign ref to a variable
//     const editButtonRef = this.$refs.editButton
//     // call the focus method on the ref
//     editButtonRef.focus()
//   })
// }
</script>
