const home = () => import('views/home/')
export default{
    path:'/home',
    components:{
      contents:home
    },
    children: [
    {
      path: 'profile',
    }
  ]
}
