<template>
    <div>
        User Details
        <div class="card" style="width: 18rem;">
           <img :src="userDetails['avatar_url']"  class="card-img-top" :alt="userDetails['login']" >
            <div class="card-body">
                <h5 class="card-title"> {{userDetails['id']}} - {{userDetails['login']}}</h5>
                <p class="card-text">{{userDetails['type']}}</p>
                <!-- <button class="btn btn-primary">Click</button> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['userDetails'],
    data() {
        return {

        }
    },
    created() {
        console.log(this.userDetails)
    },
}
</script>