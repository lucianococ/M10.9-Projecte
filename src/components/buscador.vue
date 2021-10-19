<template>
    <div class="col-4">
      <input type="text" v-model="search" class="form-control"/>
    </div>
</template>
<script>
export default {
    name: 'Buscador',
    computed:{
        search:{
            get (){
                return this.$store.state.filtrados;            
                },
        
            set(val){
                this.$store.commit('SET_FILTRADOS', val);
            }
        },
    }
}
</script>