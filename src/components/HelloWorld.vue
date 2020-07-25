<template>
  <div>

    <div class="site-section py-0">
<!--    <div class="owl-carousel hero-slide owl-style">
-->
        <div class="py-0">
          <div class="container">
            <div class="half-post-entry d-block d-lg-flex bg-light">
              <div class="img-bg" style="background-image: url('assets/images/big_img_1.jpg')"></div>
              <div class="contents">
                <span class="caption">{{posts}}</span>
                <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                <p class="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis. Enim praesentium magni delectus cum, tempore deserunt aliquid quaerat culpa nemo veritatis, iste adipisci excepturi consectetur doloribus aliquam accusantium beatae?</p>

                <div class="post-meta">
                  <span class="d-block"><a href="#">Dave Rogers</a> in <a href="#">Food</a></span>
                  <span class="date-read">Jun 14 <span class="mx-1">&bullet;</span> 3 min read <span class="icon-star2"></span></span>
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
                  <div class="col-md-6">
                    <div class="post-entry-1">
                      <a href="post-single.html"><img src="assets/images/img_h_1.jpg" alt="Image" class="img-fluid"></a>
                      <h2><a href="blog-single.html">Newjhjhs Needs to Meet Its Audiences Where They Are</a></h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                      <div class="post-meta">
                        <span class="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                        <span class="date-read">Jun 14 <span class="mx-1">&bullet;</span> 3 min read <span class="icon-star2"></span></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                      <div class="post-entry-2 d-flex bg-light" v-for="(post, index) in posts" :key="index" :post="post">
                      <div class="thumbnail" style="background-image: url('assets/images/img_v_1.jpg')"></div>
                      <div class="contents">
                        <h2><a href="blog-single.html">{{ post.title }}</a></h2>
                        <div class="post-meta">
                          <span class="d-block"><a href="#">Dave Rogers</a> in <a href="#">{{ post.category.name }}</a></span>
                          <span class="date-read">{{ post.created}}  <span class="mx-1">&bullet;</span> 3 min read <span class="icon-star2"></span></span>
                        </div>
                      </div>
                    </div>
<!--
                    <div class="post-entry-2 d-flex">
                      <div class="thumbnail" style="background-image: url('assets/images/img_v_3.jpg')"></div>
                      <div class="contents">
                        <h2><a href="blog-single.html">3 News Needs to Meet Its Audiences Where They Are</a></h2>
                        <div class="post-meta">
                          <span class="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                          <span class="date-read">Jun 14 <span class="mx-1">&bullet;</span> 3 min read <span class="icon-star2"></span></span>
                        </div>
                      </div>
                    </div>
-->
                  </div>
                </div>

              </div>
              <div class="col-lg-3">
                 <PopularPosts/>
              </div>
        </div>

            <!--
                <div class="trend-entry d-flex">
                  <div class="number align-self-start">01</div>
                  <div class="trend-contents">
                    <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                    <div class="post-meta">
                      <span class="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                      <span class="date-read">Jun 14 <span class="mx-1">&bullet;</span> 3 min read <span class="icon-star2"></span></span>
                    </div>
                  </div>
                </div>
-->

            <div class="row">
              <div class="col-lg-6">
                <ul class="custom-pagination list-unstyled">
                  <li><a href="#">1</a></li>
                  <li class="active">2</li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                </ul>
              </div>
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
    posts: state => state.posts
  }),
  beforeMount() {
    this.$store.dispatch('loadPosts')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
