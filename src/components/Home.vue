<template>
  <div>
    <div class="site-section py-0">
      <div class="py-0">
        <div class="container">
          <div class="half-post-entry d-block d-lg-flex bg-light" v-if="recentPosts.length > 0">
            <div
              class="img-bg"
              :style="{'background-image': 'url(' + 'http://127.0.0.1:5000/images/header_image_'+ recentPosts[0].id + '.jpg' + ')'}"
            ></div>
            <div class="contents">
              <span class="caption">{{recentPosts[0].title}}</span>
              <h2>
                <a :href="'/Posts/' + recentPosts[0].id">{{recentPosts[0].title}}</a>
              </h2>
              <p class="mb-3">{{ recentPosts[0].body.slice(0,200) + " ..." }}</p>

              <div class="post-meta">
                <span class="d-block">
                  <a href="#">DW</a> in
                  <a href="#">{{ recentPosts[0].category.name }}</a>
                </span>
                <span class="date-read">
                  <timeago :datetime="recentPosts[0].created"></timeago>
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
                  <a :href="'/Posts/' + recentPosts[0].id">
                    <img
                      :src="'http://127.0.0.1:5000/images/header_image_'+ recentPosts[0].id + '.jpg'"
                      alt="Image"
                      class="img-fluid"
                    />
                  </a>
                  <h2>
                    <a :href="'/Posts/' + recentPosts[0].id">{{ recentPosts[0].title }}</a>
                  </h2>
                  <p class="mb-3">{{ recentPosts[0].body.slice(0,200) + "..." }}</p>
                  <div class="post-meta">
                    <span class="d-block">
                      <a href="#">DW</a> in
                      <a href="#">{{ recentPosts[0].category.name }}</a>
                    </span>
                    <span class="date-read">
                      <timeago :datetime="recentPosts[0].created"></timeago>
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
                  <div
                    class="thumbnail"
                    :style="{'background-image': 'url(' + 'http://127.0.0.1:5000/images/header_image_'+ post.id + '.jpg' + ')'}"
                  ></div>
                  <div class="contents">
                    <h2>
                      <a :href="'/Posts/' + recentPosts[0].id">{{ post.title }}</a>
                    </h2>
                    <div class="post-meta">
                      <span class="d-block">
                        <a href="#">DW</a> in
                        <a href="#">{{ post.category.name }}</a>
                      </span>
                      <span class="date-read">
                        <timeago :datetime="post.created"></timeago>
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
            <PopularPosts :limit="3" v-if="recentPosts.length > 0" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PopularPosts from "@/components/PopularPosts";
import PaginatedPosts from "@/components/PaginatedPosts";

export default {
  components: { PopularPosts, PaginatedPosts },

  computed: mapState({
    recentPosts: (state) => state.viewPosts.recentPosts,
  }),
  async beforeMount() {
    await this.$store.dispatch("viewPosts/loadRecentPosts", {
      pageNumber: 1,
      itemsPerPage: 4,
      sort_by: "recent",
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
