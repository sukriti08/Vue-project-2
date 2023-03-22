<template>
    <Header></Header>
    <SideNav></SideNav>
    <div class="pt-5 mx-3 d-flex justify-content-center">
        <div class="card mb-3" style="max-width: 600px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="../assets/doctor.avif" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <button class="btn btn-primary">Book an Appointment</button>
                        <p class="card-text"><small class="text-muted">Experience: 7 years</small></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="card mb-3 ms-3" style="max-width: 600px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="../assets/doctor.avif" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <button class="btn btn-primary">Book an Appointment</button>
                        <p class="card-text"><small class="text-muted">Experience: 7 years</small></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>

<script>
import { RouterLink } from 'vue-router';
import SideNav from './SideNav.vue';
import Header from './Header.vue';
export default {
    name: "Specialists",
    components: { Header, RouterLink, SideNav }
}
</script>

<style>
img {
    height: 60px;
}
</style>