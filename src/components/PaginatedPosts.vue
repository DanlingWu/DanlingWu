<template>
  <div v-if="items">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title"  v-if="this.categoryId">
            <span class="caption d-block big" >All {{this.categoryMap[this.categoryId]}} Posts</span>

          </div>
            <div class="section-title"  v-else>
            <span class="caption d-block big" >All {{this.sortBy}} Posts</span>
          </div>

          <div class="post-entry-2 d-flex" v-for="(item, index) in items" :key="index">
            <div
              class="thumbnail order-md-2"
              style="background-image: url('assets/images/img_h_4.jpg')"
            ></div>
            <div class="contents order-md-1 pl-0">
              <h2>
                <a :href="'/Posts/' + item.id">{{ item.title }}</a>
              </h2>
              <p class="mb-3">{{ item.body.slice(0,400) + " ..." }}</p>
              <div class="post-meta">
                <span class="d-block">
                  <a href="#">DW</a> in
                  <a href="#">{{ item.category.name }}</a>
                </span>
                <span class="date-read">
                  <timeago :datetime="item.created"></timeago>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <button
            class="page-link"
            href="#"
            aria-label="Previous"
            :disabled="this.currentPage <= 1 "
            @click="changePage(currentPage-1)"
          >
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </button>

          <span v-for="index in totalPages" :key="index">
            <li class="page-item">
              <a
                :class="currentPage === index ? 'page-link page-link-active' : 'page-link'"
                @click="changePage(index)"
              >{{index}}</a>
            </li>
          </span>

          <button
            class="page-link"
            href="#"
            aria-label="Next"
            :disabled="this.currentPage >= this.totalPages"
            @click="changePage(currentPage+1)"
          >
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </button>
        </ul>
      </nav>
    </div>
  </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
import CategoryMenu from "@/components/CategoryMenu";

export default {
  data() {
    return {
      categoryMap: {
        1: "Food",
        2: "Cookery",
        3: "Travel",
        4: "Health",
      },
      pageNumber: 1,
      itemsPerPage: 4,
      currentPage: 1,
      sortBy: "",
      categoryId: "",
    };
  },

  computed: {
    ...mapActions("viewPosts", {
      loadPostsPerPage: "loadPostsPerPage",
    }),
    ...mapState({
      items: (state) => state.viewPosts.itemsPerPage,
      totalPages: (state) => state.viewPosts.totalPages,
    }),
    isDisabled() {
      if (this.currentPage <= 1 || this.currentPage >= this.totalPages) {
        return true;
      } else {
        return false;
      }
    },
  },

  methods: {
    changePage(index) {
      this.$store.dispatch("viewPosts/loadPostsPerPage", {
        pageNumber: index,
        itemsPerPage: 4,
        sort_by: this.sortBy,
      });
      this.currentPage = index;
    },
  },
  async beforeMount() {
    this.sortBy = this.$route.query.sort_by;
    this.categoryId = parseInt(this.$route.query.category_id)
    console.log(this.$route.query.category_id)
    await this.$store.dispatch("viewPosts/loadPostsPerPage", {
      pageNumber: 1,
      itemsPerPage: 4,
      sort_by: this.$route.query.sort_by,
      category_id: parseInt(this.$route.query.category_id)
    });
  },
};
</script>
<style scoped>
.page-link-active {
  background-color: #ccc;
}
</style>
