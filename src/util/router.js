import Vue from 'vue';
import VueRouter from 'vue-router';
import Root from '../components/Root/Root.vue';
import Login from '../components/Login/Login.vue';
import MyPage from '../components/MyPage/MyPage.vue';

Vue.use(VueRouter);
const router = new VueRouter();

router.map({
  '/': {
    component: Root,
    subRoutes: {
      '/my_page': {
        component: MyPage
      }
    }
  },
  '/login': {
    component: Login
  }
})

export default router;
