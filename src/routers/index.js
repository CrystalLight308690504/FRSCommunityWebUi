import Vue from 'vue'
import Router from 'vue-router'
import homeRouter from 'views/home/router/'
import answerRouter from 'views/answer/router/'
import blogRouter from 'views/blog/router/'
Vue.use(Router)
const routes = [
  {
    path:'',
    redirect:"/home"
  },
  homeRouter,
  blogRouter,
  answerRouter
]
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
