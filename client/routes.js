import Home from "./components/Home";
import Post from "./components/Post";

export default [
  {
    path: '/',
    exact: true,
    ...Home
  },
  {
    path: '/posts',
    exact: true,
    ...Post
  }
]