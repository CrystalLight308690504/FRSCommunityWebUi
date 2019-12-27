const blog = () => import('views/blog/')
export default {
    path:'/blog',
    components: {
      contents :blog
    }
}
