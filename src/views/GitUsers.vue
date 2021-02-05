<template>
    <div>
        <h2>Users List</h2>
        <div class="container">
            <div class="row">
                <div class="col-sm-8">
                    <GitUsersList @getUserDetails="getUserDetails($event)"></GitUsersList>
                </div>
                <div class="col-sm-4">
                    <GitUserDetails :userDetails="userDetails"></GitUserDetails>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import GitUsersList from '../components/GitUsersList.vue';
import GitUserDetails from '../components/GitUserDetails.vue';

export default {
    data() {
        return {
            userDetails: {}
        }
    },
    // props: {
    //     userDetails: this.userDetails
    // },
    components: {
        GitUsersList,
        GitUserDetails
    },
    methods: {
        getUserDetails(event) {
            console.log(event);
            this.userDetails = event;
        }
    }
}
</script>
