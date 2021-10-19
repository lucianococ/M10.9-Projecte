<template>
<div>
    
    <div class="container align-items-center">
    <div class="row" v-if=" usuarios.length > 0 || albums.length > 0">
       <div >
           
                <div class="col-sm-6" v-for='(usuario, i) in usuarios' :key='i'>
                    <div class="container">
                        
                            <div >
                                <div class="card shadow p-3 mb-5 bg-body rounded">
                                    <div class="card-header">
                                        <h5 class="card-title">Nombre: {{usuario.name | mayusculas}} </h5>
                                        <h6 class="card-subtitle">Username: {{usuario.username}}</h6>
                                    </div>
                                    <div class="card-body">
                                        <p class="card-text">Información:</p>
                                        <p>Dirección : {{usuario.address.street}}  {{usuario.address.suite}} {{usuario.address.city}}</p>
                                        <p>Teléfono: {{usuario.phone}}</p>
                                        <p>Email: {{usuario.email}}</p>
                                        <p>Website: {{usuario.website}}</p>
                                    </div>
                                </div>
                            </div>
                        <br>
                  </div>  
                </div>
            
           
        </div>  
        <div class="container">  
            
                <div v-for='(album, i) in albums' :key='i'>
                        <div class="container col-sm-6 mb-3">
                             <div class="shadow p-3 mb-5 bg-body rounded">   
                                <div class="card">
                                        <div class="card-header">
                                            <h4>{{album.title | capitalize}}</h4>           
                                        </div>
                                        <div class="card-body">
                                            <img :src="album.thumbnailUrl">
                                        </div> 
                                </div> 
                                </div>
                        </div>
                        <br>
                </div>
            </div>  
               
        </div> 
         <div id="alert" v-else class="alert alert-danger"> No hay nada, che...</div>        
                
    </div> 
    
</div> 
</template>
<script>
//import User from '../components/User.vue'
import {mapGetters} from 'vuex';

export default {
    /*components: {
        User
    },*/
    computed: {
        ...mapGetters({
            usuarios:'filteredUsers',
            albums: 'filteredAlbumes'
        }),
        users() {
            return this.$store.state.users
        },
        albumes() {
            return this.$store.state.albumes
        }
    },
    mounted() { 
    this.$store.dispatch("getUsers"); 
    this.$store.dispatch("getAlbumes"); 
     },
}
</script>