<template>
  <div class="flex flex-center">
      <q-card class="full-width" dark>
        <q-linear-progress :value="0.6" color="blue" />

        <q-card-section class="row items-center no-wrap">
          <div class="row">
                <div>
                    <img src="../assets/cover.png"
                    height="45px" alt="album">
                </div>
                <div class="q-px-md">
                    <div class="ip-font-bold">The Walker</div>
                    <div class="text-custom ip-font">Fitz & The Tantrums</div>
                </div>
          </div>


          <q-space />
          <q-btn flat round icon="shuffle" />
          <q-btn flat round icon="fast_rewind" />
          <q-btn flat round icon="pause" />
          <q-btn flat round icon="fast_forward" />
          <q-btn flat round icon="repeat" />
           <q-space />
           <q-item dark dense  class="vol-control row">
                <q-btn flat round icon="volume_up" />
                <q-item-section>
                <q-slider
                    v-model="volume"
                    :min="0"
                    :max="10"

                    color="blue"
                />
                </q-item-section>
            </q-item>
        </q-card-section>
      </q-card>

  </div>
</template>

<script>

export default {
  name: 'Sidebar',
  data () {
    return {
         volume: 6,
    }
  },
  methods: {

  }

}
</script>
<style lang="scss" scoped>
.vol-control{
    width:180px;
    align-items: center;
}
.text-custom{
    color:#B4CFF2;
}
</style>
