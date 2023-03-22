<template>
    <Header />
    <div class="d-flex">
        <SideNav />
        <div>
            <Carousel />
            <div class="ms-2 me-2">
                <div class="mt-4 p-5  text-dark rounded">
                    <h1>About 24/hr Emergency Hospital</h1>
                    <p>XYZ Hospital has been a trusted name in healthcare for over 50 years. Our hospital was founded on the principles of providing compassionate and personalized care to each and every patient who walks through our doors.</p>
                </div>
                <hr>
                <div class="mt-4 p-5  text-dark rounded">
                    <h2>Our Mission</h2>
                    <p>Our mission is to provide the highest quality medical care to our patients, while treating them with the utmost respect and dignity. We strive to make each patient's experience as comfortable and stress-free as possible, while ensuring that they receive the best possible medical care.</p>
                </div>
                <hr>
                <div class="mt-4 p-5  text-dark rounded">
                    <h2>Our Team</h2>
                    <p>At XYZ Hospital, we are proud to have a team of experienced and dedicated healthcare professionals who are committed to our patients' wellbeing. From our board-certified physicians to our skilled nurses and staff, each member of our team is committed to providing compassionate and personalized care to our patients.</p>
                </div>
                <hr>
                <div class="mt-4 p-5  text-dark rounded">
                    <h2>Our Community Involvement</h2>
                    <p>At XYZ Hospital, we believe in giving back to the communities we serve. We regularly participate in community outreach programs and sponsor local events to support the health and wellbeing of our neighbors.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue'
import SideNav from './SideNav.vue';
import Carousel from './carousel.vue';

export default {
    name: 'About',
    components: {
        Header,
        SideNav,
        Carousel
    },
};
</script>