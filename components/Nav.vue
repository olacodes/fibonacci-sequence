<template>
  <div class="nav-wrapper">
    <nav class="navbar shadow-lg position-sticky fixed-top d-flex">
      <div class="left-nav-link d-flex">
        <router-link class="navbar-brand link" to="/">
          <img
            class="nav-logo"
            src="https://res.cloudinary.com/olacode/image/upload/c_scale,w_100/v1585867972/project%20manager/project-logo3_wl6fmi.webp"
            alt="logo"
          >
          Fibonacci
        </router-link>
      </div>
      <div class="mt-2">
        <nuxt-link
          class="nav-link btn btn-sm btn-outline-info my-2 my-sm-0"
          to="/help"
        >
          Help
        </nuxt-link>
      </div>
      <!-- </div> -->
    </nav>
  </div>
</template>

<script></script>

<style scoped>
.nav-link,
.link {
  color: #72f3ec !important;
}
.nav-logo {
  width: 60px;
}
.navbar {
  min-height: 70px;
  background-color: #00113d !important;
}
</style>
