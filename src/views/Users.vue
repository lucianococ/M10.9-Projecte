<template>
<div>
    <div class="animate__animated animate__bounceInLeft">
        <div id="users">
            <h1>Users</h1>
            <UserList/>
        </div>
    </div>
</div>
</template>
<script>
import UserList from '../components/UserList.vue';

export default {
    name: 'Users',
    components: {
        UserList
    }
    }
    
</script>