<template>
    <div>
        Users List
        <div class="card" style="width: 18rem;" v-for="user of gitUsersList" :key="user.id">
            <img :src="user['avatar_url']"  class="card-img-top" :alt="user['login']" >
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
            console.log(this.gitUsersList);

            }
        });
    },
    methods: {
        onUserSelect(user) {
            console.log(user)
        }
    }
}
</script>

