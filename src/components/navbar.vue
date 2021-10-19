<template>
    <div id="nav" class="container ">
      <div class="row">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="col-4 ">
          
        <img alt="IT BCN logo" src="../assets/IT_logo.png" style="width: 50%">
        </div>
        <div class="col-4">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
        <a class="nav-item nav-link"><router-link to="/">Home</router-link></a>
        <a class="nav-item nav-link"> <router-link to="/users">Users</router-link></a>
        <a class="nav-item nav-link"><router-link to="/pictures">Pictures</router-link></a>
    </div>
    
    </div>
    
    </div>
    <buscador></buscador>
    
   
    </nav>
   
    </div>
    </div>
</template>
<script>
import Buscador from './buscador.vue'
export default {
    name: 'Navbar',
    components:{
      Buscador
    }
    
}
</script>