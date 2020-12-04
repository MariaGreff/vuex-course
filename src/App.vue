<template>
  <div id="app">
    <h2>Number of posts: {{ postsCount }}</h2>
    <div class="post" v-for="post in allPosts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  // access getter form the store:
  computed: mapGetters(["allPosts", "postsCount"]),
  // another variant to access the getters from the store:
  // computed: {
  //   allPosts() {
  //     return this.$store.getters.allPosts;
  //   }
  // },
  methods: mapActions(["fetchPosts"]),
  async mounted() {
    // call dispatch method to call the action (pass name of the action as a parameter):
    this.fetchPosts(4);
    // another variant of dispatching the action
    // this.$store.dispatch("fetchPosts");
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}

.post {
  border: 1px solid grey;
  border-radius: 5px;
  margin-bottom: 1rem;
}
</style>
