<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="body-bg" unelevated>
      <q-toolbar>
        <q-toolbar-title>
                  <img src="../assets/ipcolor.png" height="54px">
        </q-toolbar-title>
         <q-chip dark>
        {{userdetails.display_name}}
      </q-chip>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'MainLayout',

  data () {
    return {

    }
  },
   computed:{
        ...mapState('spotifystore',['userdetails']),
  },
  methods: {

  },

}
</script>
<style lang="scss" scoped>
.body-bg{
      background: #0B111E;
}
</style>
