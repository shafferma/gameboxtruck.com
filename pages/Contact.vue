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
                         If you have any questions, feel free to call/email
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
                        <strong>General inquiries</strong>
                    </p>
                    <p>
                        <nuxt-link to="https://www.gameboxtruck.com">GameBoxTruck</nuxt-link>
                    </p>
                     <p class="h3 mt-4 mt-lg-5">
                        <strong>Call Us Today</strong>
                    </p>
                     <p class="h5 ">
                        833-GAME-JAM
                    </p>
                </div>

                <div class="col-12 col-md-6 ml-auto">
                    <h2>Drop us a line</h2>
                    <form>
                        <div class="row">
                            <div class="col">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="First name"
                                />
                            </div>
                            <div class="col">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Last name"
                                />
                            </div>
                        </div>

                        <div class="row mt-4">
                            <div class="col">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Company Name"
                                />
                            </div>
                        </div>

                        <div class="row mt-4">
                            <div class="col">
                                <input
                                    type="email"
                                    class="form-control"
                                    placeholder="Email"
                                />
                            </div>
                        </div>

                        <div class="row mt-4">
                            <div class="col">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Phone"
                                />
                            </div>
                            <div class="col">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Country"
                                />
                            </div>
                        </div>

                        <div class="row mt-4">
                            <!-- <div class="col">
                                <select class="form-control" required="">
                                    <option value="">Select Department</option>
                                    <option value="1">Support</option>
                                    <option value="2">Sales</option>
                                    <option value="3">Accounting</option>
                                </select>
                            </div> -->
                        </div>
                        <div class="row mt-4">
                            <div class="col">
                                <textarea
                                    class="form-control"
                                    name="message"
                                    rows="5"
                                    placeholder="How can we help?"
                                ></textarea>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col">
                                <button type="submit" class="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
