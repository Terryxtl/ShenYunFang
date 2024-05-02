<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="row mx-auto">
    <div class="col-md d-flex align-items-center">
      <video-container />
    </div>
    <div class="col-md d-flex align-items-center"><url-circle /></div>
  </div>
</template>

<script>
import VideoContainer from '@/components/VideoContainer.vue';
import UrlCircle from '@/components/UrlCircle.vue';
export default {
  components: {VideoContainer, UrlCircle},
};
</script>

<style scoped>
.container {
  height: 100%;
}
</style>
