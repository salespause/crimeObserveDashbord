import Vue from 'vue';
import Heatmap from '../Heatmap/Heatmap.vue'
import Svgmap from '../Svgmap/Svgmap.vue'
import Recap from '../Recap/Recap.vue'
import Blacklist from '../Blacklist/Blacklist.vue'

  export default {
    components: {
      'heatmap': Heatmap,
      'svgmap': Svgmap, 
      'recap': Recap, 
      'blacklist': Blacklist
    },
    vuex: {
      getters: {
      },
      actions: {
      }
    },

    created() {
    }
  }
