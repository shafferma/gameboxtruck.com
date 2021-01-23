<template>
    <section
        class="fdb-block pt-0"
        style="background-image: url(/imgs/shapes/8.svg)"
    >
        <div class="bg-gray">
            <div class="container">
                <div class="row-100"></div>
                <div class="row text-left">
                    <div class="col-8">
                        <h1>Contact Us</h1>
                        <p class="lead">
                         Questions, booking, and all other inquiries contact below.
                        </p>
                    </div>
                </div>
                <div class="row-100"></div>
            </div>
        </div>
        <div class="container bg-r">
            <div class="row-100"></div>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-5">

                    <p class="h3 mt-4 mt-lg-5">
                        <strong>General Inquiries</strong>
                    </p>
                    <p>
                        <nuxt-link to="email">gamebox@gameboxtruck.com</nuxt-link>
                    </p>
                     <p class="h3 mt-4 mt-lg-5">
                        <strong>Call Us Today</strong>
                    </p>
                     <p class="h5 ">
                        833-GAME-JAM
                    </p>
                </div>
            
                <contact-form />

            </div>
        </div>
    </section>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';

export default {
    components: {
        ContactForm
    }
}
</script>
