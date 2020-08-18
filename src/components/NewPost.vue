<template>
<div>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">

            <form @submit.prevent="handleFormSubmit2(post)" id="addPostForm">
            <p class="h4 text-center mb-4">New Post</p>
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" id="title" class="form-control border" v-model="post.title" name="post.title">
            </div>
            <br>
            <div class="form-group">
                <label for="title">Headline Image</label>
                <input type="file" id="header_image" class="form-control border" ref="header_image" name="header_image">
            </div>
            <br>
            <div class="form-group">
                <label for="content">Body</label>
                <textarea class="form-control border" type="text" id="content" rows="5" v-model="post.body" name="post.body"></textarea>
            </div>
             <CategoryMenu  @CustomEventInputChanged="updateCategoryId"></CategoryMenu>
            <div class="text-center mt-4">
                <button class="btn btn-outline-purple" type="submit">Save<i class="far fa-paper-plane ml-2"></i></button>
            </div>
            </form>
        </div>
    </div>
</div>

</div>

</template>


<script>
import { mapState, mapActions } from 'vuex'
import CategoryMenu from '@/components/CategoryMenu'
import axios from 'axios'

export default {
  data() {
    return {
      post: {},
      category_id: '',
      file: ''
    }
  },
  components: { CategoryMenu },
  methods:{
    async handleFormSubmit(post) {
     console.log(post)
      await this.$store.dispatch('admin/addPost', post)
      this.$router.push('/Admin')
      .catch(err => console.log(err))
    },
    updateCategoryId (id) {
      console.log("data: " + id)
      this.post.category_id = id
    },
    async handleFormSubmit2(post) {
     // The this.$refs.file refers to the ref attribute on the the input[type="file"]
     this.post['header_image'] =  new Blob([ JSON.stringify(this.$refs.header_image.files[0]) ], {
      type: 'application/json'
     });
     //post.append('header_image', this.file);
      var form = document.forms.addPostForm;
      var formData = new FormData(form);
      console.log(formData.get('header_image'))
      axios.post('http://127.0.0.1:5000/adminCURD/adminCURD/create/', formData,{
          headers: {
            'Content-Type': 'multipart/form-data'
          }
      })
      .then(res => {
        console.log('SUCCESS!');
        console.log({res});
      }).catch(err => {
        console.error({err});
      });
    }
  },
  beforeMount() {
        this.$store.dispatch('admin/loadAdminPosts')
  },
}



</script>
<!-- emit: trigger named event(s) which in turn cause functions called listeners to be called.-->