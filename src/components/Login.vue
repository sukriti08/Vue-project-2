<template>
    <div class="register">
        <div class="content col-3 pt-0">
            <h2>Sign In</h2>
            <div class="mb-3 mt-3">
                <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="email">
            </div>
            <div class="mb-3">
                <input type="password" class="form-control" id="pwd" placeholder="Enter password" v-model="password">
            </div>
            <router-link to="./home"><button type="submit" class="btn btn-primary btn-text-dark"
                    @click="login">Submit</button></router-link>
            <div class="pt-2">
                <router-link to="./signup">Sign Up</router-link>
            </div>

        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import axios from 'axios'
export default {
    name: "Login",
    components: { RouterLink },
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            );
            console.log(result);
            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                this.$router.push({ name: 'Home' })
                alert("You Succesfully logged in!")
            }
        },
    },
};
</script>

<style>
.register {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-top: -10rem;
}
</style>