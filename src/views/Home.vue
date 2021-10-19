<template>
  <div class="home">
    <Resultado/>
   <contadore></contadore>
  
  </div>
</template>

<script>
import Contadore from '../components/Contadore.vue'
import Resultado from '../components/Resultado.vue'

export default {
  name: 'Home',
  components: {
   Contadore,
   Resultado
  }
}
</script>
