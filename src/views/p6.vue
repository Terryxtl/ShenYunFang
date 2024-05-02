<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="col-5 image-section">
    <div class="text-container"></div>
  </div>

  <div class="col-5 image-section"></div>
</template>
<style scoped>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.text-container {
  display: flex;
  align-items: center;
  column-gap: 10px;
  flex-grow: 1;
  position: relative;
  float: right;
  margin-bottom: 30px;
}

.image-container img,
.text-container img {
  max-width: 300px;
  max-height: 300px;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 15px;
}

.image-description {
  max-height: 100%;
  max-width: 100%;
  height: auto;
  width: auto;
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
  flex-basis: 75%;
  border: 2px solid #bbb;
  border-radius: 15px;
  padding: 20px;
  white-space: nowrap;
}
</style>
