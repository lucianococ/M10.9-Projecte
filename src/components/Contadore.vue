<template>
<div>
    <h3>Home</h3>
  <div class="container">
        <div class="row d-flex justify-content-around align-items-center">
            <div class="col-4">
                  <div >
                    <h3>Users consultados</h3>
                  </div>
                  <ul class= "list-group ">
                    <li  class="list-group-item d-flex justify-content-between align-items-center" v-for='item in uservistos' :key='item.id'>
                      {{item.name}}
                      <span class="badge bg-success rounded-pill">{{item.cantidad}}</span>  
                    </li>
                  </ul>
            </div>
              <div class="col-4">
                      <h3>Albums consultados</h3>
                <ul class= "list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center" v-for='item in albumvistos' :key='item.id'>
                      {{item.title}}
                      <span class="badge bg-success rounded-pill">{{item.cantidad}} </span>
                    </li>
                  </ul>
              </div>
        </div>
    </div>
</div>
    
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
    name: 'Contadore',
    computed: {
      ...mapState(['uservistos', 'nomvistos', 'albumvistos', 'photos']),
      ...mapGetters(['totalcantidad'])  
  }
  
 
  
}

</script>