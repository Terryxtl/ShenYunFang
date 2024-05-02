<template>
  <div
    class="row-inline d-flex align-items-center mb-3"
    v-for="(item, index) in itemList"
    :key="index"
  >
    <div class="col-4 text-end pe-5">
      <h1>{{ item.name }}</h1>
    </div>
    <div class="row row-inline row-cols-2">
      <div class="col" v-for="(img, imgIndex) in item.imgList" :key="imgIndex">
        <img class="img-thumbnail" :src="img.imgUrl" />
      </div>
    </div>
  </div>
</template>

<script>
function getAssetsImages(name) {
  return new URL(`/src/assets/images/${name}`, import.meta.url).href;
}
export default {
  data() {
    return {
      itemList: [
        {
          name: '亚克力挂件',
          imgList: [
            {imgUrl: getAssetsImages('3.1.jpg')},
            {imgUrl: '@/assets/image/3.2.jpg'},
          ],
        },
        {
          name: '贴纸',
          imgList: [
            {imgUrl: 'src/assets/image/3.3.jpg'},
            {imgUrl: 'src/assets/image/3.4.jpg'},
          ],
        },
        {
          name: '纸胶带',
          imgList: [
            {imgUrl: 'src/assets/image/3.5.jpg'},
            {imgUrl: 'src/assets/image/3.6.jpg'},
          ],
        },
        {
          name: '抱枕',
          imgList: [
            {imgUrl: 'src/assets/image/3.7.jpg'},
            {imgUrl: 'src/assets/image/3.8.jpg'},
            {imgUrl: 'src/assets/image/3.9.jpg'},
            {imgUrl: 'src/assets/image/3.10.jpg'},
          ],
        },
      ],
    };
  },
};
</script>

<style scoped></style>
