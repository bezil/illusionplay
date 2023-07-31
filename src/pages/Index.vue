<template>
  <q-page class="flex flex-center dark-bg">
    <div>
       <Login/>
    </div>

  </q-page>
</template>

<script>
import Login from 'components/Login'

import { mapActions } from 'vuex'

export default {
  name: 'PageIndex',
  data() {
    return{

    }
  },
  components: {
    Login
  },
  methods: {
     ...mapActions('spotifystore',['getAccessToken']),
  },
  mounted() {

    this.getAccessToken()
    window.location.hash ="/"

  }
}
</script>
