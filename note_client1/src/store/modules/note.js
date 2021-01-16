import axios from 'axios'

const BASE_URL = 'http://localhost:8000'

const state = {
  notes: [],
  loaded: false,
  selectedNote: null,
  message: null,
  progress: null
}

const getters = {
  notes(state){
    return state.notes
  },
  selectedNote(state){
    return state.selectedNote
  },
  loaded: (state) => {
    return state.loaded
  }
}

const actions = {
  loadPages({commit}){
    axios.get(`${BASE_URL}/api/note`)
        .then(res => {
          console.log(res.data)
          commit('notesLoaded', res.data)
        })
        .catch(error => console.log(error))
  },
  selectNote({commit, state}, note){
    if(state.selectedNote === note){
      return
    }
    commit('noteSelected', note)
  },
  create({commit, state}) {
    if(state.selectedNote){
      return
    }
    commit('newNoteCreated')
  },
  save({commit, state}){
    if (!state.selectedNote.title || !state.selectedNote.content) {
      return
    }
    axios.post(`${BASE_URL}/api/note`, state.selectedNote)
    .then((instance) => {
      console.log(instance)
      Object.assign(state.selectedNote, instance)
    })
  }
}

const mutations = {
  notesLoaded(state, notes){
    state.notes = notes
  },
  noteSelected(state, note){
    state.selectedNote = note
  },
  newNoteCreated(state){
    let note = {
      title: '',
      content: ''
    }
    state.notes.push(note)
    state.selectedNote = note
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
