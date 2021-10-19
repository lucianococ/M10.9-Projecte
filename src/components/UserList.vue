<template>
<div>
    <div class="container">
         <Resultado/>
        
        
        <div class="container">
            <div class="row">
                <div class="col-6" v-for='(user, i) in users' :key='i'>
                    <div class="card shadow p-3 mb-5 bg-body rounded" >
                        <div class="card-header">
                                <h5 class="card-title">{{user.name | mayusculas}}</h5>
                        </div>
                        <div class="card-body">  
                                <router-link :to="{ name: 'User', params: {id:user.name, usuario:user}}" ><button class="btn btn-success" @click="agregarUserVisto(user)">Ver</button></router-link> 
                        </div>
                    
                </div>
            </div>
            </div>
        </div> 
    </div>
</div>
    
  


</template>
<script>
import { mapActions, mapState, mapGetters} from 'vuex'
import Resultado from '../components/Resultado.vue'
export default {
    name: 'Users',
    components: {
        Resultado
    },
    computed: {
        users() {
            return this.$store.state.users
        },
        ...mapState(['uservistos']),
        ...mapGetters({
            usuarios: 'filteredUsers'
        })
        
    },
     mounted() {
    this.$store.dispatch("getUsers"); 
   
     },
     methods:{
        ...mapActions(['agregarUserVisto'])
     }
    
    
}
</script>