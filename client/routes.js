import Home from "./components/Home";
import Post from "./components/Post";

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/posts',
    exact: true,
    component: Post
  }
]