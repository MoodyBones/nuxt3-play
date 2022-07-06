<template>
  <main class="mx-auto container px-4 md:px-12 flex flex-col">
    <TheNav :app-name="appName" />
    <article class="max-w-prose w-full mx-auto border">
      <ul
        aria-labelledby="list-summary"
        class="flex flex-col gap-12 pt-12 bg-gray-100"
      >
        <li v-for="item in noteItems" :key="item.id" class="border bg-gray-50">
          <NoteItem
            :id="item.id"
            :label="item.label"
            :done="item.done"
            @checkbox-changed="updateDoneStatus(item.id)"
            @item-deleted="deleteNote(item.id)"
            @item-edited="editNote(item.id, $event)"
          />
        </li>
      </ul>
    </article>
  </main>
</template>

<script setup>
import uniqueId from 'lodash.uniqueid'

const noteItems = [
  { id: uniqueId('note-'), label: 'Learn Pinia', done: false },
  {
    id: uniqueId('note-'),
    label: 'Study composables',
    done: true,
  },
  { id: uniqueId('note-'), label: 'Have fun', done: true },
]

defineProps({
  appName: String,
})

// function addNote(noteLabel) {
//   this.noteItems.push({
//     id: uniqueId('todo-'),
//     label: noteLabel,
//     done: false,
//   })
// }

function updateDoneStatus(noteId) {
  const noteToUpdate = this.noteItems.find((item) => item.id === noteId)
  noteToUpdate.done = !noteToUpdate.done
}

function deleteNote(noteId) {
  const itemIndex = this.noteItems.findIndex((item) => item.id === noteId)
  this.noteItems.splice(itemIndex, 1)
  this.$refs.listSummary.focus()
}

function editNote(noteId, newLabel) {
  const noteToEdit = this.noteItems.find((item) => item.id === noteId)
  noteToEdit.label = newLabel
}
</script>
