import Vue from 'vue';
  export default {
    
    vuex: {
      getters: {
      },
      actions: {
      }
    },
    watch:{
      heatmap_data(){
        console.log('[CHART] watch heatmap_data: fire');
      }
    },
    created() {
      console.log("[Heatmap] headerComponent created");
    },
    ready(){
    }
  }
