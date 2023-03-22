<template>
    <div class="container">
        <div @click="toggleSidebar" class="but-on"><img src="../assets/toggle.svg" alt=""></div>

        <div v-if="showSidebar" class="sidebar bg-dark bg-gradient pt-3">

            <ul class="nav nav-pills flex-column mb-auto pt-5">
                <li class="nav-item pb-2">
                    <router-link to="/registrationForm" class="link">Registration Form</router-link>
                </li>
                <hr>
                <li class="nav-item pb-2 pt-2">
                    <router-link to="/specialists" class="link">Specialists</router-link>
                </li>
                <hr>
                <li class="nav-item pb-2 pt-2">
                    <router-link to="/treatments" class="link">Treatments</router-link>
                </li>
                <hr>
            </ul>
        </div>
    </div>
</template>

<script>

import { RouterLink } from 'vue-router'
export default {
    name: 'SideNav',
    components: {
        RouterLink
    },
    data() {
        return {
            showSidebar: false,
        };
    },
    methods: {
        toggleSidebar() {
            this.showSidebar = !this.showSidebar;
        }
    }
}
</script>

<style>
.container {
    /* display: none; */
    z-index: 100 !important;
    width: 200px;
    position: absolute;
    left: 0px;
    height: 100vh;
}

.sidebar {
    width: 200px;
    position: fixed;
    left: 0px;
    height: 100vh;
}

.but-on {
    position: fixed;
    z-index: 100 !important;
}
</style>