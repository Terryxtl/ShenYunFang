<template>
  <div class="content-container p-2 px-5">
    <goods-list />
  </div>
</template>

<script>
import GoodsList from '@/components/GoodsList.vue'
export default {
  components: { GoodsList }
}
</script>
<style scoped>
.content-container img {
  width: 20rem;
  height: auto;
  padding: 10px;
  margin: 10px;
}

.ti-group {
  display: column;
  padding-bottom: 10px;
  border-bottom: 2px dashed #ccc;
  height: auto;
}

text {
  max-width: 30%;
  display: flex;
  align-items: center;
  font-size: 48px;
  margin-right: 120px;
}

.image-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 20px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
}
</style>
