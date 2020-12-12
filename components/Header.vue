<template>
    <header>
        <div class="container">
            <nav class="navbar navbar-expand-md">
                <a class="navbar-brand" href="https://www.froala.com">
                    <img src="/imgs/logo.png" height="30" alt="image" />
                </a>

                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav3"
                    aria-controls="navbarNav3"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav3">
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item to="/">Home</b-nav-item>
                        <b-nav-item to="/faq">FAQ</b-nav-item>
                        <b-nav-item to="/contact">Contact</b-nav-item>
                    </b-navbar-nav>

                    <b-button
                        to="/contact"
                        variant="outline-primary"
                        class="ml-md-3"
                        >Book Now</b-button
                    >
                    <!-- <a
                        class="btn btn-outline-primary ml-md-3"
                        href="https://www.froala.com"
                        >Button</a
                    > -->
                </div>
            </nav>

            <!-- <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div> -->
        </div>
    </header>
</template>

