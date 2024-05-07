<template>
  <div class="UrlCircle mx-1">
    <div class="square" v-for="item in itemlist" :key="item.title">
      <router-link :to="item.url">
        <img class="shadow-sm" :src="item.imgUrl" />
        <p>
          <strong>{{ item.title }}</strong>
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemList: Array
  },
  data() {
    return {
      itemlist: [
        {
          url: '/1',
          imgUrl: 'src/assets/image/0.1.webp',
          title: '精品集萃'
        },
        {
          url: '/2',
          imgUrl: 'src/assets/image/0.2.webp',
          title: '审计精鉴'
        },
        { url: '#', imgUrl: 'src/assets/image/0.3.webp', title: '审计优选' },
        { url: '#', imgUrl: 'src/assets/image/0.4.webp', title: '政策法规' },
        { url: '#', imgUrl: 'src/assets/image/0.5.webp', title: '审计交流' },
        { url: '#', imgUrl: 'src/assets/image/0.6.webp', title: '创意激扬' },
        { url: '#', imgUrl: 'src/assets/image/0.7.webp', title: '审计心语' },
        {
          url: '/5',
          imgUrl: 'src/assets/image/0.8.webp',
          title: '审计书海'
        }
      ]
    }
  }
}
</script>

<style scoped>
.square {
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  position: relative;
}

img {
  width: 100%;
  height: auto;
  border-radius: 50%;
}

a {
  font-size: 1.25em;
  position: relative;
  bottom: -35px;
  text-decoration: none;
  color: black;
}

.UrlCircle {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 0.25fr);
  gap: 4%;
}
</style>
