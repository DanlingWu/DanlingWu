<template>
  <div>
    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 single-content">
            <p class="mb-5">
              <img
                :src="'http://127.0.0.1:5000/images/header_image_'+ post.id + '.jpg'"
                alt="Image"
                class="img-fluid"
              />
            </p>
            <h1 class="mb-4">
              <a>{{ post.title }}</a>
            </h1>
            <div class="post-meta d-flex mb-5">
              <div class="bio-pic mr-3">
                <img src="/assets/images/person_1.jpg" alt="Image" class="img-fluidid" />
              </div>
              <div class="vcard">
                <span class="d-block">
                  <a href="#">DW</a> in
                  <a href="#">{{ post.category.name }}</a>
                </span>
                <timeago :datetime="post.created"></timeago>
              </div>
            </div>

            <p>{{ post.body }}</p>
          </div>
          <PopularPosts :limit="3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PopularPosts from "@/components/PopularPosts";

export default {
  components: { PopularPosts },
  computed: mapState({
    post: (state) => state.viewPosts.currentPost,
  }),
  beforeMount() {
    this.$store.dispatch("viewPosts/loadPost", {
      id: parseInt(this.$route.params.id),
    });
  },
};
</script>


