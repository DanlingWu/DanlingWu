<template>
<div>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">

            <form @submit.prevent="savePost">
            <p v-if="post === null || post === undefined" class="h4 text-center mb-4">New Post</p>
            <p v-else class="h4 text-center mb-4">Edit Post: {{post.title}}</p>
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" id="title" class="form-control border" :value="post.title" @input="updateTitle">
            </div>
            <br>
            <div class="form-group">
                <label for="content">Body</label>
                <textarea class="form-control border" type="text" id="content" rows="5" :value="post.body" @input="updateContent"></textarea>
            </div>
            <div class="text-center mt-4">
                <button class="btn btn-outline-purple" type="submit">Save<i class="far fa-paper-plane ml-2"></i></button>
            </div>
            </form>
        </div>
    </div>
</div>


    <!--<div class="row">
      <section class="post column">
        <h1>{{ post.title }}</h1>

        <div>{{ post.body }}</div>

        <button @click="is_editing = true">EDIT</button>
      </section>

      <post-form v-if="is_editing" @saved="is_editing = false" class="column" />
    </div>-->

</div>

</template>


<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    post: ''
    return { is_editing: false }
  },

  methods:
    mapActions('admin', {
        editPost: 'editPost',
    }),

    savePost() {
      this.$store.dispatch('addPost')
      	.then(() => this.$emit('saved'))
    },
    updateTitle(e) {
      this.$store.commit('editPost', { title: e.target.value })
    },
    updateContent(e) {
      this.$store.commit('editPost', { body: e.target.value })
    },

  computed:
    mapState({
      post: state => state.admin.currentAdminPost,
      //adminPost: state => state => state.admin.currentAdminPost,
    }),

  beforeMount() {
    this.$store.dispatch('admin/loadAdminPosts', { id: parseInt(this.$route.params.id) })
      }
  }



</script>
<!-- emit: trigger named event(s) which in turn cause functions called listeners to be called.-->