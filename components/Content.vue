<template>
    <section class="fdb-block">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12 col-md-12 col-lg-6 col-xl-5">
                    <h1>GameBox is a mobile video gaming truck.</h1>

                    <p class="lead mb-5">
                    We take care of the party so you don't have to.
                    </p>

                    <p><strong>Gaming Platforms:</strong></p>
                    <p class="h1 text-muted">
                        <fa-icon :icon="['fab', 'xbox']" />
                        <fa-icon :icon="['fab', 'playstation']" />
                        <span class="icon-nintendo">
                            <img src="~/static/imgs/icons/nintendo.svg"/>
                        </span>
                        <fa-icon :icon="['fas', 'vr-cardboard']" />
                    </p>
                </div>

                <div
                    class="col-12 col-md-8 m-auto ml-lg-auto mr-lg-0 col-lg-6 pt-5 pt-lg-0"
                >
                    <img
                        alt="image"
                        class="img-fluid"
                        src="~/assets/party-small.jpg"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.icon-nintendo {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 120px;
    height: 34px;
    overflow: hidden;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
}
</style>