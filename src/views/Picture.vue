<template>
<div>
    <div class="animate__animated animate__bounceInLeft">
            <h3>Picture</h3>      
            <h1>{{$route.params.title | capitalize}}</h1>
            <br>
            <div class="container">
              <div class="row">
                <div class="col-4 border border-success" v-for='(titulo, i) in titulos' :key='i'>
                  
                  <img class="p-3" :src="titulo.thumbnailUrl">   
                  <p>{{titulo.title | capitalize}}</p>  
          </div>
              </div>
            </div>
          
          <br>
          <router-link to="/pictures"><button class="btn btn-success"> Volver</button></router-link> 
      </div>
</div>
    
</template>
<script>
export default {
    name: 'Picture',
    
    data(){
        return{
          titulos : this.$store.getters.getPhotoById(this.$route.params.id),
        }
    },
    computed: {
   
    
  },
  mounted() {
    this.$store.dispatch("getPhotos");
    
  }
  

}
</script>