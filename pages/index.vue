<template>
  <q-page class="flex flex-center column">

    <q-separator />

    <div v-if="notesStore.notes.length > 0">
      <q-card v-for="note in searchResult" :key="note.id" class="note-card q-mt-md" flat bordered>

        <q-card-section>
          <div class="row items-center no-wrap">
            <div class="col">
              <div class="text-h6">{{ note.title }}</div>
              <div class="text-subtitle2">
                {{ date.formatDate(note.dateAdded, 'DD MMMM YYYY') }}
                <q-badge clickable rounded color="primary" class="q-mx-xs" v-for="tag in note.tags">
                  <q-breadcrumbs-el :label="tag.name" :to="{ name: 'tag-detail', params: { id: tag.id } }" />
                </q-badge>
              </div>
            </div>

            <div class="col-auto">
              <q-btn color="grey-7" round flat icon="more_vert">
                <q-menu cover auto-close>
                  <q-list>
                    <q-item clickable :to="{ name: 'note-detail', params: { id: note.id } }">
                      <q-item-section>Details</q-item-section>
                    </q-item>
                    <q-item clickable>
                      <q-item-section color="negative" @click="confirm(note.id)">Delete</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
            </div>
          </div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section horizontal>
          <q-card-section>
            {{ note.content.substring(0, 200) }}
          </q-card-section>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn color="info" flat :to="{ name: 'note-detail', params: { id: note.id } }">Details</q-btn>
        </q-card-actions>
      </q-card>
    </div>
    <div v-else>
      <p>No Notes Found, Click on the plus (+) sign to add a new note</p>
    </div>

    <!-- <div v-if="searchResult.length == 0">
      <p>No Notes Found with the provided title or content, Please try another search query.</p>
    </div> -->

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <NuxtLink to="/notes/add">
          <q-btn fab icon="add" color="primary"></q-btn>
        </NuxtLink>
    </q-page-sticky>
  </q-page>
</template>

<script setup>
import { date, Dialog, Notify } from 'quasar';

const notesStore = useNotesStore();

const searchResult = computed(() => {
  return notesStore.notes.filter((note) => {
    return (
      note.title.toLowerCase().indexOf(notesStore.searchQuery.toLowerCase()) != -1 || note.content.toLowerCase().indexOf(notesStore.searchQuery.toLowerCase()) != -1
    );
  });
});
</script>

<style lang="sass" scoped>
.search-input
  width: 100%
  max-width: 300px

.note-card
  width: 350px
</style>