<template>
    <div>
        <ul class="list-group">
          <li
            class="list-group-item"
            style="cursor: pointer"
            v-for="(note, index) in notes"
            :key="index"
            :class="{active: selected(note)}"
            @click="selectNote(note)">
            <i class="fa fa-file"> {{ note.title }}&nbsp;</i>
          </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: "Note",
        computed: mapGetters(['notes', 'selectedNote']),
        methods: {
            selected(note) {
              return this.selectedNote === note
            },
            ...mapActions([
              'selectNote'
            ])
        }
    }
</script>

<style scoped>

</style>
