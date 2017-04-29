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
      var latlng = new google.maps.LatLng(35.415272, 136.758887); //緯度・経度
      var myOptions = {
        zoom: 18, //拡大倍率
        center: latlng, 
        mapTypeId: google.maps.MapTypeId.ROADMAP //地図の種類
      };
      var map = new google.maps.Map(document.getElementById("map"), myOptions); //地図を表示
    }
  }
