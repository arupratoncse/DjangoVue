<template>
<div class="form-group mt-1">
  <input type="text" class="form-control mb-1" placeholder="Enter title" v-model="page.title">
  <textarea class="form-control" rows="15" placeholder="Contents" v-model="page.content"></textarea>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters({
    page: 'selectedNote'
  })
}
</script>
