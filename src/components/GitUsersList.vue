<template>
    <div>
        Users List
        <button @click="logout()">Logout</button>
        <div class="card" style="width: 18rem;" v-for="user of gitUsersList" :key="user.id">
            <img class="card-img-top imageClass" :src="user['avatar_url']" @click="$emit('getUserDetails', user)"  :alt="user['login']" >
            <div class="card-body">
                <h5 class="card-title"> {{user['id']}} - {{user['login']}}</h5>
                <p class="card-text">{{user['type']}}</p>
                <button class="btn btn-primary" @click="$emit('getUserDetails', user)" >Click</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            gitUsersList: []
        }
    },
    created() {
        axios.get(`https://api.github.com/users`).then(res => {
            if (res['status'] == 200) {
                this.gitUsersList = res['data'];
            }
        });
    },
    methods: {
        onUserSelect(user) {
            console.log(user)
        },
        logout() {
            localStorage.clear();
            this.$router.push('/');
        }
    }
}
</script>

<style>
.imageClass {
    max-width: 100px;
}
</style>
