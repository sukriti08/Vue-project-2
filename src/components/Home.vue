<template>
    <Header />
    <div class="d-flex">
        <SideNav />
        <div>
            <Carousel />
            <div class="ms-2 me-2">
                <div class="mt-4 p-5  text-dark rounded">
                    <h1>Welcome to 24/hr Emergency Hospital</h1>
                    <p>At 24/hr Emergency Hospital, we are dedicated to providing high-quality medical care in a warm and
                        welcoming
                        environment. Our team of expert physicians, nurses, and staff are committed to ensuring that you
                        receive the best possible care during your visit with us.</p>
                </div>
                <hr>
                <div class="mt-4 p-5  text-dark rounded">
                    <h2>COVID-19 Precautions</h2>
                    <p>We understand that many patients may have concerns about COVID-19. Rest assured that we are taking
                        all necessary precautions to keep our patients and staff safe. Our hospital is equipped with the
                        latest technology and facilities to provide top-notch medical care, while also following CDC
                        guidelines to prevent the spread of COVID-19.</p>
                </div>
                <hr>
                <div class="mt-4 p-5  text-dark rounded">
                    <h2>Services and Specialties</h2>
                    <p>We offer a wide range of services and specialties to meet your healthcare needs. From emergency care
                        and surgery to cardiology and oncology, our team of experienced professionals is here to provide the
                        care you need, when you need it.</p>
                </div>
                <hr>
                <div class="mt-4 p-5  text-dark rounded">
                    <h2>Patient Resources</h2>
                    <p>We know that navigating healthcare can be stressful, which is why we provide a variety of resources
                        to help make your visit as seamless as possible. From insurance information and patient forms to
                        payment options and appointment scheduling, we are here to help you every step of the way.</p>
                </div>
                <hr>
                <div class="mt-4 p-5  text-dark rounded">
                    <h2>Advanced Technology and Facilities</h2>
                    <p>We are proud to offer some of the most advanced technology and facilities in the region. From
                        state-of-the-art imaging technology to dedicated rehabilitation units, we have the resources
                        necessary to provide the highest level of care.</p>
                </div>
                <hr>
                <div class="mt-4 p-5  text-dark rounded">
                    <h2>Call to Action</h2>
                    <p>We invite you to explore our website and learn more about the services and specialties we offer. If
                        you have any questions or would like to schedule an appointment, please don't hesitate to contact
                        us. Thank you for choosing XYZ Hospital for your healthcare needs.</p>
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
    name: 'Home',
    components: {
        Header,
        SideNav,
        Carousel
    },
};
</script>

<style></style>