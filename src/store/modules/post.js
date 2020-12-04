export default {
  // here we cam use async (in actions):
  actions: {
    // first parameter in action is a context
    // second parameter is data that we want to pass to action
    // it is not enough just to define the action, we need to call it as well (in App component in our case)
    async fetchPosts(ctx, limit = 10) {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
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
    },
    createPost(state, newPost) {
      state.posts.unshift(newPost);
    }
  },
  // initial data and all the data available in the app:
  state: {
    posts: []
  },
  // functions that allow to get data from the store:
  getters: {
    // one of the methods of validation through getters
    validPosts(state) {
      return state.posts.filter(p => {
        return p.title && p.body;
      });
    },
    allPosts(state) {
      return state.posts;
    },
    // how to access getters from getter
    postsCount(state, getters) {
      return getters.validPosts.length;
    }
  }
};
