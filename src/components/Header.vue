<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container-fluid">
            <img class="logo" src="../assets/logo.png">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/home" class="link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="link">About</router-link>
                    </li>
                    <li class="nav-item">
                        <div class="dropdown">
                            <div class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                                aria-expanded="false"><img src="../assets/pngegg.png" alt=""
                                    style="width: 35px; height: auto;"></div>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li> <router-link to="/MyProfile" class="link" @click="MyProfile"><a class="dropdown-item"
                                            href="#">My
                                            Profile</a></router-link></li>
                                <li><router-link to="/signin" class="link" @click="logout"><a class="dropdown-item"
                                            href="#">Sign Out</a></router-link></li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <Search></Search>
            </div>
        </div>
    </nav>
</template>

<script>
import { RouterLink } from 'vue-router'
import Search from './Search.vue'
export default {
    name: 'Header',
    components: {
        RouterLink,
        Search
    },
    methods: {
        logout() {
            localStorage.removeItem("user-info");

            // Show a success message to the user
            alert("You have successfully logged out!");

        },
        MyProfile() {
            var myValue = JSON.parse(localStorage.getItem("user-info"));
            console.log(myValue.email);
        }
    }
}
</script>

<style>
.link {
    text-decoration: none;
    color: white;
}

.link:hover {
    color: gray;
}

.nav-item {
    margin-left: 20%;
}
</style>