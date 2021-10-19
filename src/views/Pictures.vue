<template>
<div id="pictures" class="container">
     <div class="animate__animated animate__bounceInLeft">
    
    <Resultado/>    
    <h1>Pictures</h1>
    <div class="container ">
        <div class="row">
        <div class="col-6"  v-for='(album, i) in albumes' :key='i'>
            <div class="container"> 
            <div class="card shadow p-3 mb-5 bg-body rounded">
                <div class="card-header">
                    <h5 class="card-title" >{{album.title | capitalize}}</h5>
                </div>
                <div class="card-body">
                    <router-link :to="{ name: 'Picture', params: {id:album.albumId, title:album.title} }" ><button class="btn btn-success" @click="agregarAlbumVisto(album)" >Ver</button></router-link>
                </div>
                
            </div>
            <br> 
            </div> 
        </div> 
        
        </div> 
            
    </div>
    </div>
</div>
    
</template>
<script>
import Resultado from '../components/Resultado.vue'
import {mapActions, mapGetters} from 'vuex'
export default {
    name:'Photos',
    components:{
        Resultado
    },
 
    computed: {
    ...mapGetters({
        albums: 'filteredAlbumes'
    }),
    
    albumes(){
    return this.$store.state.albumes
    } ,
    albumvistos(){
    return this.$store.state.albumvistos
    }  
    },
    mounted() {
    this.$store.dispatch("getPhotos"); 
   
    
  },
  methods:{
      ...mapActions(['agregarAlbumVisto'])
  }
    

}

</script>
