<template>
    <div>
        <input type="text" v-model="searchQuery" placeholder="Search...">
        <ul>
            <li v-for="item in filteredItems" :key="item.id">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Search',
    data() {
        return {
            searchQuery: null,
            resources: [
                { title: "About", uri: "/about", icon: null },
                { title: "Home", uri: "/home", icon: null },
                { title: "RegistrationForm", uri: "/registrationForm", icon: null },
                { title: "SideNav", uri: "/", icon: null },
                { title: "SignUp", uri: "/signup", icon: null },
                { title: "Specialists", uri: "/specialists", icon: null },
                { title: "treatments", uri: "/treatments", icon: null },
                { title: "Login", uri: "/signin", icon: null },

            ]
        };
    },
    computed: {
        resultQuery() {
            if (this.searchQuery) {
                return this.resources.filter((item) => {
                    return this.searchQuery.toLowerCase().split(' ').every(v => item.title.toLowerCase().includes(v))
                })
            } else {
                return this.resources;
            }
        }
    }
}
</script>

<style>
table {
    display: none;
}
</style>