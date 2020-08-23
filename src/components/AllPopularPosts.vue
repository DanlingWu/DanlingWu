<template>
  <div v-if="posts">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <span class="caption d-block big">All Popular Posts</span>
          </div>

          <div class="post-entry-2 d-flex" v-for="(post, index) in posts" :key="index">
            <div
              class="thumbnail order-md-2"
              style="background-image: url('assets/images/img_h_4.jpg')"
            ></div>
            <div class="contents order-md-1 pl-0">
              <h2>
                <a :href="'/Posts/' + post.id">{{ post.title }}</a>
              </h2>
              <p class="mb-3">{{ post.body.slice(0,20) + "..."  }}</p>
              <div class="post-meta">
                <span class="d-block">
                  <a href="#">Dave Rogers</a> in
                  <a href="#">{{ post.category.name }}</a>
                </span>
                <span class="date-read">
                  <timeago :datetime="post.created"></timeago>
                  <span class="mx-1">&bullet;</span> 3 min read
                  <span class="icon-star2"></span>
                </span>
              </div>
            </div>
          </div>

          <p>
            <a href="/AllPopularPosts/?sort_by=popular" class="more">
              See All Popular
              <span class="icon-keyboard_arrow_right"></span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {"limit": Number},
  computed: mapState({
    posts(state) {
        return state.viewPosts.popularPosts.slice(0, this.limit);
    },
  }),

  async beforeMount() {
    await this.$store.dispatch("viewPosts/loadPopularPosts", {
      pageNumber: 1,
      itemsPerPage: 4,
      sort_by: "popular"
    });
  },
};
</script>
