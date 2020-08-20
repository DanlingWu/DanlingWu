<template>
  <div>
    <div class="site-section py-0">
      <!--    <div class="owl-carousel hero-slide owl-style">
      -->
      <div class="py-0">
        <div class="container">
          <div class="half-post-entry d-block d-lg-flex bg-light" v-if="recentPosts.length > 0">
            <div class="img-bg" style="background-image: url('assets/images/big_img_1.jpg')"></div>
            <div class="contents">
              <span class="caption">{{recentPosts[0].title}}</span>
              <h2>
                <a :href="'/Posts/' + recentPosts[0].id">{{recentPosts[0].title}}</a>
              </h2>
              <p class="mb-3">{{ recentPosts[0].body }}</p>

              <div class="post-meta">
                <span class="d-block">
                  <a href="#">Dave Rogers</a> in
                  <a href="#">{{ recentPosts[0].category.name }}</a>
                </span>
                <span class="date-read">
                  {{ recentPosts[0].created }}
                  <span class="mx-1">&bullet;</span> 3 min read
                  <span class="icon-star2"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <div class="section-title">
              <h2>Recent Posts</h2>
            </div>
            <div class="row">
              <div class="col-md-6" v-if="recentPosts.length > 0">
                <div class="post-entry-1">
                  <a href="post-single.html">
                    <img src="assets/images/img_h_1.jpg" alt="Image" class="img-fluid" />
                  </a>
                  <h2>
                    <a href="blog-single.html">{{ recentPosts[0].title }}</a>
                  </h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                  <div class="post-meta">
                    <span class="d-block">
                      <a href="#">Dave Rogers</a> in
                      <a href="#">{{ recentPosts[0].category.name }}</a>
                    </span>
                    <span class="date-read">
                      {{ recentPosts[0].created }}
                      <span class="mx-1">&bullet;</span> 3 min read
                      <span class="icon-star2"></span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="post-entry-2 d-flex bg-light"
                  v-for="(post, index) in recentPosts.slice(1, 4)"
                  :key="index"
                  :post="post"
                >
                  <div class="thumbnail" style="background-image: url('assets/images/img_v_1.jpg')"></div>
                  <div class="contents">
                    <h2>
                      <a href="blog-single.html">{{ post.title }}</a>
                    </h2>
                    <div class="post-meta">
                      <span class="d-block">
                        <a href="#">Dave Rogers</a> in
                        <a href="#">{{ post.category.name }}</a>
                      </span>
                      <span class="date-read">
                        {{ post.created }}
                        <span class="mx-1">&bullet;</span> 3 min read
                        <span class="icon-star2"></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="/RecentPosts/?sort_by=recent" class="more">
              See All recent posts
              <span class="icon-keyboard_arrow_right"></span>
            </a>
          </div>
          <div class="col-lg-3">
            <AllPopularPosts :limit="3" v-if="recentPosts.length > 0" />
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AllPopularPosts from "@/components/AllPopularPosts";
import PaginatedPosts from "@/components/PaginatedPosts";

export default {
  components: { AllPopularPosts, PaginatedPosts},

  computed: mapState({
    //posts: (state) => state.viewPosts.posts,
    recentPosts: (state) => state.viewPosts.recentPosts,

  }),
  async beforeMount() {
    await this.$store.dispatch("viewPosts/loadPosts");
    await this.$store.dispatch("viewPosts/loadRecentPosts", {
      pageNumber: 1,
      itemsPerPage: 4,
      sort_by: "recent"
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
