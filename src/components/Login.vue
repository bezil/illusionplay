<template>
  <q-page class="flex flex-center">
      <div class="column">
        <img src="../assets/hlogo.png" alt="logo" width="300px">
        <q-btn push class="ip-font" text-color="dark" unelevated
         type="a" :href="auth"
        color="secondary">Login with Spotify</q-btn>
      </div>

  </q-page>
</template>

<script>
import { accessUrl } from '../boot/spotify'
export default {
  name: 'Login',
  data () {
    return {
        auth:accessUrl
    }
  },
  methods: {

  }

}
</script>
