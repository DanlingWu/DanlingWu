<template>
        <div class="header-top">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-12 col-lg-6 d-flex">
                <a href="/" class="site-logo">Blog</a>
              </div>

              <div class="col-12 col-lg-6 ml-auto d-flex">
                <div class="ml-md-auto top-social d-none d-lg-inline-block">
                  <a href="#" class="d-inline-block p-3"><span class="icon-facebook"></span></a>
                    <a href="#" class="d-inline-block p-3"><span class="icon-twitter"></span></a>
                    <a href="#" class="d-inline-block p-3"><span class="icon-instagram"></span></a>
                </div>
                <form action="#" class="search-form d-inline-block">

                  <div class="d-flex">
                    <input type="email" class="form-control" placeholder="Search...">
                    <button type="submit" class="btn btn-secondary" ><span class="icon-search"></span></button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block" role="banner">

          <div class="container">
            <div class="d-flex align-items-center">

              <div class="mr-auto">
                <nav class="site-navigation position-relative text-right" role="navigation">
                  <ul class="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block">
                    <li class="active">
                        <router-link to="/" class="navbar-item">
                            Home
                        </router-link>
                        <router-link to="/Food" class="navbar-item">
                            Food
                        </router-link>
                        <router-link to="/Food" class="navbar-item">
                            Cookery
                        </router-link>
                        <router-link to="/Food" class="navbar-item">
                            Travel
                        </router-link>
                        <router-link to="/Food" class="navbar-item">
                            Health
                        </router-link>
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
