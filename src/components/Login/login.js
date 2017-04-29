import Vue from 'vue'
import Resource from 'vue-resource'
import VueRouter from 'vue-router';
Vue.use(VueRouter);
Vue.use(Resource);

export default {
  vuex: {
    actions: {
    }
  },
  data: function () {
     return {
       email: '',
       password: '',
     }
   },
  methods: {
  },
  created() {
    console.log("[LOGIN COMPORNENT] created");
  }

}
