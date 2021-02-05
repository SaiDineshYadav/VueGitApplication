<template>
    <div>
        <h2>User Sign Up</h2>
    <div>
        <label>User Name</label>
        <input type="text" v-model.trim="userName" placeholder="Enter User Name" />
        <span v-if="showErrorMsg && userName == ''"> User Name is required </span>
    </div>
    <div>
        <label>Password</label>
        <input type="password" v-model.trim="password" placeholder="Enter Password" />
        <span v-if="showErrorMsg && password == ''"> Password is required </span>
    </div>
    <button type="submit" @click="signUp()">Sign Up</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName: '',
            password: '',
            showErrorMsg: false
        }
    },
    methods: {
        signUp() {
            if (this.userName != '' && this.password != '') {
                this.showErrorMsg = false;
                localStorage.setItem('userName', this.userName);
                localStorage.setItem('password', this.password);
                this.userName = '';
                this.password = '';
                this.$router.push('/');
            } else {
                this.showErrorMsg = true;
            }
        }
    }
}
</script>
