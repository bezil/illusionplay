<template>
  <q-page class="flex flex-start">
      <div class="column full-width">
          <div class="banner q-px-lg q-mb-md">
              <div class="row items-center">
                  <div class="albumcover">
                      <img :src="list.images[0].url" height="180px">
                  </div>
                  <div class="column q-px-lg flex-1">
                        <div class="bannerheader ip-font-bold">
                            {{list.name}}</div>
                        <div class="bannerdesc ip-font">
                            {{list.description}}</div>
                  </div>

              </div>
          </div>

          <div class="list full-width">
              <div class="listbg"
               v-bind:style="{ backgroundImage: 'url(' + list.images[0].url + ')' }">

              </div>

            <div class="songslist q-pa-md">
                          <q-item-label header class="ip-font-bold text-white"
                          >Songs List</q-item-label>

                <q-item clickable v-ripple
                v-for="(item, i, k) in list.tracks.items" :key="k"
                 v-on:click="getTrack(list.tracks.items[i].track.external_urls.spotify)">
                    <q-item-section avatar>
                    <q-avatar square>
                        <img :src="list.tracks.items[i].track.album.images[0].url">
                    </q-avatar>
                    </q-item-section>

                    <q-item-section>
                    <q-item-label class="text-white ip-font" lines="1">
                        {{list.tracks.items[i].track.name}}
                    </q-item-label>
                    <q-item-label caption lines="1">
                        <span class="text-info ip-font">
                            {{list.tracks.items[i].track.album.name}}
                        </span>
                    </q-item-label>
                    </q-item-section>
                        <q-space></q-space>
                    <q-item-section side top class="text-secondary ip-font">
                    {{millisToMinutesAndSeconds(list.tracks.items[i].track.duration_ms)}}
                    </q-item-section>
                </q-item>

                <q-separator inset="item" class="text-primary"/>
                </div>
          </div>

      </div>

  </q-page>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Body',
  data () {
    return {

    }
  },
  computed:{
        ...mapState('spotifystore',['list']),
  },
  methods: {
      millisToMinutesAndSeconds(ms){
          var minutes = Math.floor(ms / 60000);
          var seconds = ((ms % 60000) / 1000).toFixed(0);
          return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
      },
      getTrack(uri) {
            window.open(uri, '_blank');
      }

  },
  mounted(){
  }

}
</script>
<style lang="scss" scoped>
.banner{
    flex:0.25;
}
.flex-1{
    flex:1;
}
.albumcover{
    border-radius: 8px;
    background: linear-gradient(145deg, #0c1220, #0a0f1b);
    box-shadow:  12px 12px 24px #0a101c,
                -12px -12px 24px #0c1220;
}
.bannerheader{
    font-size: 3rem;
    color:white;
    flex-wrap: wrap;
}
.bannerdesc{
    font-size: 1rem;
    color:#B4CFF2;
        flex-wrap: wrap;


}
.list{

    position: relative;
    flex:0.75;
    z-index:0;

}
.list .listbg{
    opacity: 0.1;
        /* The image used */
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;

    /* Add the blur effect */
    filter: blur(14px);
    -webkit-filter: blur(14px);

    /* Full width */
    width: 100%;

    /* Center and scale the image nicely */
    background-position: cover;
    background-repeat: no-repeat;
    background-size: cover;
}
.songslist{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    z-index:2;
    height:100%;
    overflow: scroll;

}
</style>
