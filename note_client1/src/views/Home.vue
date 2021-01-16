<template>
  <div class="row">
    <note class="col-md-3 mt-1"></note>
    <div class="editor col-md-9">
      <div v-if="selectedNote">
        <editor></editor>
        <button
          type="button"
          class="btn btn-primary col-md-12 mb-1"
          @click="save"
        >Save</button>
        <button
          type="button"
          class="btn btn-success col-md-12 mb-1"
        >Delete</button>
      </div>
      <button
        type="button"
        class="btn btn-success col-md-12"
        @click="create"
      >New</button>
    </div>
  </div>
</template>

<script>
import Editor from '@/components/Editor.vue'
import Note from '@/components/Note.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
    Editor,
    Note
  },
  created(){
    this.$store.dispatch('getUser')
            .then(() => {
              this.$store.dispatch('loadPages')
            })
            .catch(error => console.log(error))
  },
  computed: {
    ...mapGetters([
      'notes',
      'selectedNote'
    ])
  },
  methods: {
    ...mapActions([
      'create',
      'save',
      'edit',
      'delete'
    ])
  }
}
</script>
<style scoped>
</style>
