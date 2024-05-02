<template>
  <div class="video-container rounded border border-dark-subtle">
    <video class="p-2" poster="@/assets/image/video_poster.jpg">
      <source src="@/assets/video/1.mp4" type="video" />
    </video>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
video {
  max-width: 100%;
  justify-content: center;
  align-content: center;
}
</style>
