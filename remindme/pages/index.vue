<script setup>
import { useTitle } from '@vueuse/core'
import uniqueId from 'lodash.uniqueid'

const props = defineProps({
  appName: String,
})

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const isWeekday = computed(() => days[new Date().getDay()])

const noteItems = reactive([
  { id: uniqueId('note-'), label: 'Learn Pinia', done: false },
  {
    id: uniqueId('note-'),
    label: 'Study composables',
    done: true,
  },
  { id: uniqueId('note-'), label: 'Have fun', done: true },
])
const listSummary = ref(null)

const activeNotes = computed(() => {
  return noteItems.filter((note) => note.done === false).length
})
const title = computed(() => {
  return !activeNotes.value
    ? props.appName
    : `${activeNotes.value} active | ${props.appName}`
})

useTitle(title)
const colorMode = useColorMode()

function addNote(noteLabel) {
  noteItems.push({
    id: uniqueId('note-'),
    label: noteLabel,
    done: false,
  })
}

function updateDoneStatus(noteId) {
  const noteToUpdate = noteItems.find((item) => item.id === noteId)
  noteToUpdate.done = !noteToUpdate.done
}

function deleteNote(noteId) {
  const itemIndex = noteItems.findIndex((item) => item.id === noteId)
  noteItems.splice(itemIndex, 1)
  listSummary.value.focus()
}

function editNote(noteId, newLabel) {
  const noteToEdit = noteItems.find((item) => item.id === noteId)
  noteToEdit.label = newLabel
}
</script>

<template>
  <main
    class="container mx-auto flex w-full max-w-prose flex-col px-4 md:px-12"
  >
    <TheNav :app-name="appName" />
    <article>
      <h2 class="text-sm text-gray-600" ref="listSummary">
        Today is {{ isWeekday }}. You have {{ activeNotes }}
        {{ activeNotes > 1 ? 'todos' : 'todo' }} active. 💪
        {{ colorMode === 'light' ? '🌞' : '🌝' }}
      </h2>
    </article>
    <NoteForm class="mt-3" @note-added="addNote" />

    <article class="mx-auto w-full max-w-prose">
      <ul aria-labelledby="list-summary" class="flex flex-col gap-4 pt-12">
        <li v-for="item in noteItems" :key="item.id" class="">
          <NoteItem
            :id="item.id"
            :label="item.label"
            :done="item.done"
            @checkbox-changed="updateDoneStatus(item.id)"
            @item-deleted="deleteNote(item.id)"
            @on-edit="editNote(item.id, $event)"
          />
        </li>
      </ul>
    </article>
  </main>
</template>
