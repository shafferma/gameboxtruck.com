<template>
  <header>
    <div class="container">
      <nav class="navbar navbar-expand-md">
        <b-navbar-brand href="https://www.gameboxtruck.com">
          <strong>GameBox Truck</strong>
          <span>1-833-426-3526</span>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/faq">FAQ</b-nav-item>
            <!-- <b-nav-item to="/contact">Contact</b-nav-item> -->
          </b-navbar-nav>

          <b-button to="/contact" variant="outline-primary" class="ml-md-3"
            >Book Now</b-button
          >
        </b-collapse>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar-brand {
  display: flex;
  flex-direction: column;
  line-height: 100%;
}

.navbar-brand strong {
}

.navbar-brand span {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  color: rgb(43, 39, 59);
}
</style>