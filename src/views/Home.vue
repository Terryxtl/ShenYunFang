<template>
  <div class="container-fluid">
    <div class="row vh-100">
      <div class="col-md d-flex align-items-center justify-content-center">
        <video-container />
      </div>
      <div class="col-md d-flex align-items-center justify-content-center">
        <url-circle />
      </div>
    </div>
  </div>
</template>

<script>
import VideoContainer from '@/components/VideoContainer.vue'
import UrlCircle from '@/components/UrlCircle.vue'
export default {
  components: { VideoContainer, UrlCircle }
}
</script>

<style scoped>
.row.d-flex {
  max-height: 100%;
}
</style>
