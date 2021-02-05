<template>
    <div>
        <h2>User Login</h2>
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
    <button type="submit" @click="login()">Login</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName: '',
            password: '',
            showErrorMsg: '',
        }
    },
    methods: {
        login () {
             if (this.userName != '' && this.password != '') {
                this.showErrorMsg = false;
               let name = localStorage.getItem('userName');
               let pass = localStorage.getItem('password');
               if (name == this.userName && pass == this.password) {
                   alert('Login Success');
                    this.$router.push('/users');
               } else {
                   alert('Invalid User');
               }
                this.userName = '';
                this.password = '';
            } else {
                this.showErrorMsg = true;
            }
        }
    }
}
</script>