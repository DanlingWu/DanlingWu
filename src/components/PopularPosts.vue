<template>
<div>

     <div class="col-lg-12">
                <div class="section-title">
                  <h2>Popular Posts</h2>
                </div>
                  <div class="trend-entry d-flex" v-for="(post, index) in posts" :key="index" >
                  <div class="number align-self-start">{{ post.id }}</div>
                  <div class="trend-contents">
                    <h2><a :href="'/Posts/' + post.id" >{{ post.title }}</a></h2>
                    <div class="post-meta">
                      <span class="d-block"><a href="#">{{ post.title }}</a> in <a href="#">{{ post.category.name }}</a></span>
                      <span class="date-read">Jun 14 <span class="mx-1">&bullet;</span> 3 min read <span class="icon-star2"></span></span>
                    </div>
                  </div>
                </div>

                <p>
                  <a href="/AllPopularPosts" class="more">See All Popular <span class="icon-keyboard_arrow_right"></span></a>
                </p>
              </div>

</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    posts: state => state.posts
  }),
  beforeMount() {
    this.$store.dispatch('loadPosts')
  }
}
</script>
