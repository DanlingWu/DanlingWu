<template>
<div>
    <div class="site-section">
      <div class="container">
        <div class="row">

          <div class="col-lg-8 single-content" >

            <p class="mb-5">
              <img src="/assets/images/big_img_1.jpg" alt="Image" class="img-fluid">
            </p>
            <h1 class="mb-4">
              <a>{{ post.title }}</a>
            </h1>
            <div class="post-meta d-flex mb-5">
              <div class="bio-pic mr-3">
                <img src="/assets/images/person_1.jpg" alt="Image" class="img-fluidid">
              </div>
              <div class="vcard">
                <span class="d-block"><a href="#">Dave Rogers</a> in <a href="#">{{ post.category }}</a></span>
                <span class="date-read">{{ post.created }} <span class="mx-1">&bullet;</span> 3 min read <span class="icon-star2"></span></span>
              </div>
            </div>

            <p> {{ post.body }}</p>

          </div>
              <PopularPosts/>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import { mapState } from 'vuex'
import PopularPosts from '@/components/PopularPosts'


export default {
  components: { PopularPosts },

  computed: mapState({
    post: state => state.currentPost
  }),
  beforeMount() {
    this.$store.dispatch('loadPost', { id: parseInt(this.$route.params.id) })
  }
}
</script>


