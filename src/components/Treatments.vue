<template>
    <Header></Header>
    <SideNav></SideNav>
    <div class="pt-5 ms-5">
        <div class="mt-4 p-5  text-dark rounded">
            <h1>Treatments</h1>
        </div>
        <div class="mt-4 p-5 text-dark rounded">
            <h2>Welcome to our hospital's treatment page, where we offer a wide range of medical treatments and services to
                help
                our patients get back to their healthy, active lives. Our team of highly skilled doctors, nurses, and
                support
                staff are committed to providing you with the best possible care.</h2>
        </div>
        <div class="mt-4 p-5  text-dark rounded">
            <h3>Here are some of the treatments we offer:</h3>
        </div>


        <div class="mt-4 p-5  text-dark rounded"><b>Cancer Treatment:</b> Our hospital is equipped with the latest
            technologies and facilities to provide
            comprehensive
            cancer treatment, including radiation therapy, chemotherapy, immunotherapy, and surgery.</div>

        <div class="mt-4 p-5  text-dark rounded"><b>Cardiology:</b> We offer a full range of cardiology services, including
            diagnostic testing, treatment for
            heart
            conditions, and rehabilitation services.</div>

        <div class="mt-4 p-5  text-dark rounded"><b>Orthopedics:</b>Our orthopedic specialists provide expert diagnosis and
            treatment for a range of conditions,
            including joint replacement, sports injuries, and fractures.</div>

        <div class="mt-4 p-5  text-dark rounded"><b>Neurology:</b>Our neurology department specializes in the diagnosis and
            treatment of neurological disorders,
            including stroke, epilepsy, Parkinson's disease, and multiple sclerosis.</div>

        <div class="mt-4 p-5  text-dark rounded"><b>Gastroenterology:</b> We offer a range of gastroenterology services,
            including diagnostic testing, treatment
            for
            digestive disorders, and endoscopy procedures.</div>

        <div class="mt-4 p-5  text-dark rounded"><b>Obstetrics and Gynecology:</b>Our obstetrics and gynecology department
            provides comprehensive care for women
            at
            all
            stages of life, including prenatal care, childbirth, and menopause management.</div>

        <div class="mt-4 p-5  text-dark rounded"><b>Pediatrics:</b> Our pediatric specialists offer a full range of services
            for infants, children, and
            adolescents,
            including routine checkups, immunizations, and treatment for illnesses and injuries.</div>


        <div class="mt-4 p-5  text-dark rounded"><b> At our hospital, we are committed to providing our patients with the
                highest quality care in a
                compassionate
                and
                supportive environment. We understand that being in a hospital can be stressful, and we strive to make your
                stay
                as comfortable as possible. Our team is always available to answer your questions and provide you with the
                support you need.</b></div>

    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import Header from './Header.vue';
import SideNav from './SideNav.vue';
export default {
    name: 'Treatments',
    components: { RouterLink, Header, SideNav }
}
</script>