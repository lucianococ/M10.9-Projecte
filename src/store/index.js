import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
 
export default new Vuex.Store({
  state: {
    photos: [],
    albumes: [],
    users: [],
    uservistos: {},
    albumvistos:{
    }, 
    filtrados: [],
    
  },
  mutations: {
    SET_PHOTOS(state, photos){
      state.photos = photos;
      
    },
    SET_ALBUMES(state, albumes){
      const seen = new Array 
      const albumesfiltrados = albumes.filter(el => {
        const duplicate = seen.includes(el.albumId);
        seen.push(el.albumId);
        return !duplicate
      })
      state.albumes = albumesfiltrados;
    },
    SET_USER(state, users){
      state.users = users;
    },
    SET_VISTOS (state, payload){
      state.uservistos[payload.id] = payload;
    },
    SET_ALBVISTOS (state, payload){
      state.albumvistos[payload.id] = payload;
    },
    SET_FILTRADOS (state, filtrados) {
      state.filtrados = filtrados;
    }
    
    


  },
  actions: {
    getPhotos({commit}) {
      axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        commit('SET_PHOTOS', response.data),
        commit('SET_ALBUMES', response.data)
      })
    },
    getUsers({commit}) {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        commit('SET_USER', response.data)
      })
    },
    agregarUserVisto({commit, state}, user){
      // eslint-disable-next-line no-prototype-builtins
      state.uservistos.hasOwnProperty(user.id) ? user.cantidad = state.uservistos[user.id].cantidad + 1 : user.cantidad = 1
      commit ('SET_VISTOS', user)
    },
    agregarAlbumVisto({commit, state}, album){
      // eslint-disable-next-line no-prototype-builtins
      state.albumvistos.hasOwnProperty(album.id) ? album.cantidad = state.albumvistos[album.id].cantidad + 1 : album.cantidad = 1
      commit ('SET_ALBVISTOS', album)
    }
  },
  modules: {
  },
  getters: {
    allPhotos:(state) => state.photos,
    getPhotoById: (state) => (albumId) => {
      return state.photos.filter(photo => photo.albumId === albumId)},
    filteredUsers (state) {
      let users = state.users;
      if(state.filtrados.length > 2){
        return users.filter(user => user.name.toLowerCase().includes(state.filtrados));
      }
      
    },
    filteredAlbumes (state) {
      let albumes = state.albumes;
      if(state.filtrados.length > 2){
        return albumes.filter(album => album.title.toLowerCase().includes(state.filtrados));
      }
      
    }   
 

}

})
