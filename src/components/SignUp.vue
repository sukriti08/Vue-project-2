<template>
    <div class="register">
        <div class="content col-3 pt-0">
            <h2>SignUp</h2>

            <div class="mb-3 mt-3">
                <input type="text" class="form-control" id="name" placeholder="Enter Name" v-model="name">
            </div>
            <div class="mb-3 mt-3">
                <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="email">
            </div>
            <div class="mb-3">
                <input type="password" class="form-control" id="pwd" placeholder="Enter password" v-model="password">
            </div>

            <router-link to="./home"><button type="submit" class="btn btn-primary btn-text-dark"
                    @click="signUp">Submit</button></router-link>

        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: '',
        }
    },

    methods: {
        async signUp() {
            console.log("signUp", this.name, this.email, this.password);
            let result = await axios.post("http://localhost:3000/users", {
                name: this.name,
                email: this.email,
                password: this.password
            });
            console.log(result);
            if (result.status == 201) {
                localStorage.setItem("user-info", JSON.stringify(result.data));
                this.$router.push({name: 'Home'})
                alert("You Succesfully logged in!")
                console.log(result.data)
            }
        }
    },
   
}
</script>

<style>
.logo {
    height: auto;
    width: 50px;
}

.register {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-top: -10rem;
}
</style>