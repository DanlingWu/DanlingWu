<template>
  <div class="header-top">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-lg-6 d-flex">
          <a href="/" class="site-logo">DW's Blog</a>
        </div>

        <div class="col-12 col-lg-6 ml-auto d-flex">
          <div class="ml-md-auto top-social d-none d-lg-inline-block">
            <a href="https://github.com/DanlingWu/" class="d-inline-block p-3">
              <span class="icon-github"></span>
            </a>
            <a href="https://www.linkedin.com/in/danling-wu-a42a60188/" class="d-inline-block p-3">
              <span class="icon-linkedin"></span>
            </a>
          </div>
          <form action="#" class="search-form d-inline-block">
            <div class="d-flex">
              <input type="email" class="form-control" placeholder="Search..." />
              <button type="submit" class="btn btn-secondary">
                <span class="icon-search"></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div
      class="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block"
      role="banner"
    >
      <div class="container">
        <div class="d-flex align-items-center">
          <div class="mr-auto">
            <nav class="site-navigation position-relative text-right" role="navigation">
              <ul class="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block">
                <li class="active">
                  <router-link to="/" class="navbar-item">Home</router-link>
                  <a href="/category/?category_id=1" class="navbar-item">Food</a>
                  <a href="/category/?category_id=2" class="navbar-item">Cookery</a>
                  <a href="/category/?category_id=3" class="navbar-item">Travel</a>
                  <a href="/category/?category_id=4" class="navbar-item">Health</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
</style>
