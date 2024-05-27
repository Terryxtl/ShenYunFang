<template>
  <div class="container-fluid">
    <div class="row">
      <div
        class="col-md col-5 d-flex align-items-center justify-content-center introcontainer"
      >
        <intro-sec />
      </div>
      <div
        class="col-md col-5 d-flex align-items-center justify-content-center bg-danger-subtle"
      >
        <video-container />
      </div>
      <div><url-circle /></div>
    </div>
  </div>
</template>

<script>
import VideoContainer from '@/components/VideoContainer.vue'
import UrlCircle from '@/components/UrlCircle.vue'
import IntroSec from '@/components/IntroSec.vue'
export default {
  components: { VideoContainer, UrlCircle, IntroSec }
}
</script>

<style scoped>
.row.d-flex {
  max-height: 100%;
}
.introcontainer {
  background-color: #f7dd92;
}
</style>
