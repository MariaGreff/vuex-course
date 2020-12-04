export default {
  // here we cam use async (in actions):
  actions: {
    // first parameter in action is a context
    // it is not enough just to define the action, we need to call it as well (in App component in our case)
    async fetchPosts(ctx) {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      const posts = await res.json();
      // here we need to change the state via mutations: to commit method of the context we pass the name of the mutation and data
      ctx.commit("updatePosts", posts);
    }
  },
  // function that will directly change the store:
  mutations: {
    // first parameter is always state, second: what we will provide to it
    updatePosts(state, posts) {
      state.posts = posts;
    }
  },
  // initial data and all the data available in the app:
  state: {
    posts: []
  },
  // functions that allow to transform data and get it from the store:
  getters: {
    allPosts(state) {
      return state.posts;
    }
  }
};
