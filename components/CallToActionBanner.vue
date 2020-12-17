<template>
    <section class="banner-img fdb-block fdb-viewport bg-dark">
        <div class="container align-items-center justify-content-center d-flex">
            <div class="row align-items-center text-left">
                <div class="col-12 col-sm-10 col-md-8 col-lg-8">
                    <h1>Bring the greatest games and platforms to your front door.</h1>
                    <p class="lead-1">
                       Thousands of games across old and newly-released consoles; including the latest VR headsets!
                    </p>
                    <p class="mt-5">
                        <nuxt-link to="/contact" class="btn btn-light"
                            >Reserve Now</nuxt-link
                        >
                        <nuxt-link
                            to="/faq"
                            class="btn btn-dark ml-4"
                            >Frequently Asked Questions</nuxt-link
                        >
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.banner-img {
    /* background: url('~assets/smallSize.png'); */
    background-repeat: no-repeat;
    background-size: cover;
}
</style>