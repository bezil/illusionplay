<template>
  <q-page class="flex flex-center dark-bg">
      <div class="full-width pos-r">
          <div class="row">
                 <Sidebar v-if="accesstoken != null" class="l-sidebar"/>
                 <Body v-if="accesstoken != null" class="l-body"/>
          </div>
      </div>
        <!-- <div class="fixedbottom full-width">
             <Musicbar v-if="accesstoken != null" class="l-musicbar"/>
        </div> -->
  </q-page>

</template>


<script>
import Sidebar from 'components/Sidebar'
import Body from 'components/Body'
//import Musicbar from 'components/Musicbar'

import {  mapState, mapActions } from 'vuex'

export default {
  name: 'Player',
  data() {
    return{

    }
  },
  components: {
    Sidebar,
    Body,
    //Musicbar
  },
  computed:{
        ...mapState('spotifystore',['accesstoken']),
  },
  methods: {
     ...mapActions('spotifystore',['getUserDetails','getPlaylists','getTopPlaylist']),
  },
  mounted(){
      if(this.accesstoken == null){
          console.log('here')
            this.$router.push('login')
      }
      else{
       this.getUserDetails();
       this.getPlaylists();
       this.getTopPlaylist();

      }
  }

}
</script>
<style lang="scss" scoped>
.pos-r{
    position: relative;
}
// .fixedbottom{
//     position: fixed;
//     bottom:0;
//     height:82px;
// }
.l-sidebar{
    flex:0.15;
    background: #0B111E;
     min-width:150px;

}
.l-body{
    flex:0.85;
    background: linear-gradient(180deg, rgba(11,17,30,1) 0%, rgba(17,30,55,1) 100%);
}
// .l-musicbar{
//     height:82px;
// }
</style>
