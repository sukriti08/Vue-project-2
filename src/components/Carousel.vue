<template>
    <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="2000">
                <img src="../assets/Carousel1.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h2>Welcome to Hospital</h2>
                    <h3>We are here to Save Lives</h3>
                    <button class="btn btn-lg btn-primary"><router-link to="/registrationForm" class="link">Registration
                            Form</router-link></button>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="1000">
                <img src="../assets/Carousel2.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h2>Welcome to Hospital</h2>
                    <h3>We are here to Save Lives</h3>
                    <button class="btn btn-lg btn-primary"><router-link to="/registrationForm" class="link">Registration
                            Form</router-link></button>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/Carousel3.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h2>Welcome to Hospital</h2>
                    <h3>We are here to Save Lives</h3>
                    <button class="btn btn-lg btn-primary"><router-link to="/registrationForm" class="link">Registration
                            Form</router-link></button>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
    name: 'Carousel',
    components: { RouterLink, }
}
</script>

<style>
.carousel-item img {
    width: 400px;
    height: 50vh;
}

.carousel-item .carousel-caption {
    color: black;
}
</style>