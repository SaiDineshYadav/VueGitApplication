<template>
    <div v-if="display">
        User Details
        <button @click="logout()">Logout</button>
        <div class="card" style="width: 18rem;" >
           <img :src="userDetails['avatar_url']"  class="card-img-top" :alt="userDetails['login']" >
            <div class="card-body">
                <h5 class="card-title"> {{userDetails['login']}}</h5>
                <p class="card-text">{{userDetails['type']}}</p>
                <button class="btn btn-primary" v-if="userDetails['id'] && !reqFromNewPage" @click="showFullDetails()" >Full Details</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props: ['userDetails'],
    data() {
        return {
           display: false,
           mutableList: this.userDetails,
           reqFromNewPage: false
        }
    },
    created() {
        let route = this.$router['history']['current']['fullPath'];
        console.log(this.userDetails)
        if (route.includes('/details')) {
            this.reqFromNewPage = true;
            axios.get(`https://api.github.com/users${route.split('/details')[1]}`).then(res => {
                if (res['status'] == 200) {
                    this.userDetails = res['data'];
                    this.display = true;
                }
            });
        } else {
            this.display = true;
        }
    },
    methods: {
        showFullDetails() {
            console.log(this.userDetails)
            this.$router.push(`/details/${this.userDetails['login']}`)
        },
         logout() {
            localStorage.clear();
            this.$router.push('/');
        }
    }
}
</script>