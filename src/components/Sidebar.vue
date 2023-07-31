<template>
  <q-page class="flex flex-center">
      <div class="column full-width">
        <q-scroll-area style="height:calc(100vh - 63px)">
          <q-list padding>

            <q-item active clickable>
              <div class="row sidemenu-option">
                  <q-icon name="home" class="sidemenu-icon"></q-icon>
                  <span class="sidemenu-text ip-font">Home</span>
              </div>
            </q-item>
             <q-item active clickable>
              <div class="row sidemenu-option">
                  <q-icon name="search" class="sidemenu-icon"></q-icon>
                  <span class="sidemenu-text ip-font">Search</span>
              </div>
            </q-item>
             <q-item active clickable>
              <div class="row sidemenu-option">
                  <q-icon name="library_music" class="sidemenu-icon"></q-icon>
                  <span class="sidemenu-text ip-font">Library</span>
              </div>
            </q-item>


          </q-list>

            <div class="full-width playlist-header ip-font-bold">
                <div>MY PLAYLISTS</div>
                <hr class="full-width"/>
                 <div v-for="(item, i, k) in playlists.items" :key="k"
                 class="sidemenu-option q-py-sm ip-font">
                   {{item.name}}
                 </div>

            </div>
        </q-scroll-area>

      </div>

  </q-page>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Sidebar',
  data () {
    return {

    }
  },
  computed:{
        ...mapState('spotifystore',['playlists']),
  },
  methods: {

  }

}
</script>
<style lang="scss" scoped>
.sidemenu-option {
    color:#B4CFF2 ;
    align-items: center;
    cursor: pointer;
    transition: 200ms color ease-in;
    font-size: 1rem;
}
.sidemenu-option:hover {
    color:#fff ;
}
.sidemenu-icon{
    height:36px;
    margin-right: 10px;
}
.playlist-header{
    color:#fff;
    padding: 20px;
    font-size: 0.5rem;
}
.playlist-header > hr{
    margin-top:10px;
    border: 0.2px solid #111e37;
}
</style>
