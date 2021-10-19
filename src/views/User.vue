<template>
     <div>
         <div class="animate__animated animate__bounceInLeft">
        <h1>{{$route.params.id | mayusculas}}</h1>
       

    <div class="container">
       
        <div class="card">
            <div class="card-header">
                <h5 class="card-title">Nombre: {{$route.params.usuario.name | mayusculas}} </h5>
                <h6 class="card-subtitle">Username: {{$route.params.usuario.username}}</h6>
            </div>
            <div class="card-body">
                <p class="card-text">Información:</p>
                <p>Dirección : {{$route.params.usuario.address.street}}  {{$route.params.usuario.address.suite}} {{$route.params.usuario.address.city}}</p>
                <p>Teléfono: {{$route.params.usuario.phone}}</p>
                <p>Email: {{$route.params.usuario.email}}</p>
                <p>Website: {{$route.params.usuario.website}}</p>
            </div>
        </div>
      
    </div>
    <br>
     

         <router-link to="/users"><button class="btn btn-success"> Volver</button></router-link> 
    </div>
    </div>
</template>
<script>

export default {
    name: 'User',
}

</script>