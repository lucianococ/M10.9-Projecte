<template>
     <div>
        <div class="animate__animated animate__bounceInLeft">
                <h1>{{user.name | mayusculas}}</h1>
            <div class="container">
                <div class="shadow p-3 mb-5 bg-body rounded">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title">Nombre: {{user.name | mayusculas}} </h5>
                            <h6 class="card-subtitle">Username: {{user.username}}</h6>
                        </div>
                    </div>
                </div>
                </div> 
                
            
            <br>
        </div>
    </div>
</template>
<script>

export default {
    props:{
        filtrado:{
            type: Object,
            require: true
        }
    }
   
    
}

</script>