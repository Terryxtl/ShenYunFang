<template>
  <div class="book-container row mt-2 px-4">
    <div
      class="book col-md p-3 me-4 bg-light bg-gradient"
      v-for="item in booklist"
      :key="item.bookname"
    >
      <a :href="item.url" target="_blank"><img v-bind:src="item.img" /></a>
      <h4>
        <strong>{{ item.bookname }}</strong>
      </h4>
      <h6>作者: {{ item.author }}</h6>
      <h6 v-if="item.translator">译者: {{ item.translator }}</h6>
      <p v-html="item.bookinfo"></p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      booklist: [
        {
          url: 'https://book.douban.com/subject/2275826/',
          img: 'src/assets/image/5.2.jpg',
          bookname: '《蒙哥马利审计学》',
          author: '(美)文森特·M·奥莱利',
          translator: '刘霄仑,陈关亭',
          bookinfo:
            '<p>《蒙哥马利审计学》是2007年中信出版社出版的图书,作者是(美)文森特·M·奥赖利。该书标志着美国乃至世界现代审计理论与实践的最高成就,从第一版开始就被认为是审计人员的标准参考书。</p><p>它经历百年,传世不衰,所推出的各个版本早已被全球审计学界奉为“圣经”。</p><p>《蒙哥马利审计学》第十二版的问世,为会计师在当前巨变的信息社会中有效的管理审计风险、实现审计目标提供了权威指南。</p>'
        },
        {
          url: 'https://book.douban.com/subject/35069157/',
          img: 'src/assets/image/5.3.jpg',
          bookname: '《审计简史》',
          author: '德里克·马修斯',
          translator: '周华/莫彩华',
          bookinfo:
            '<p>近年来,财务舞弊和审计丑闻屡见不鲜,会计行业的公信力备受质疑,这一切都促使人们努力寻找提升注册会计师行业价值的可行路径。</p><p>本书通过梳理审计技术和审计程序的发展历程,提供了一个新颖的研究视角,有助于深入了解审计丑闻频发的原因以及现行注册会计师审计制度的弊端,形成了较具说服力的研究发现,这些贡献使得本书成为一部发人深省的佳作。</p>'
        },
        {
          url: 'https://book.douban.com/subject/26746460/',
          img: 'src/assets/image/5.1.jpg',
          bookname: '《让数字说话：审计,就这么简单》',
          author: '孙含晖、王苏颖、阎歌',
          bookinfo:
            '<p>如何从数字中找出乐趣,把握数字,捕捉数字背后的故事,从而用生活化的语言将专业化的知识展现给读者是本书作者独具匠心之处。</p><p>本书称得上是一次出品有趣的尝试,或者颠覆无趣的盛宴,有趣不是为了讨好,也算不上讨巧,有趣就如洗菜切肉之于大厨——不是一项了不得的技艺,却是变着法子让读者大快朵颐的后继材料。——张连起</p>'
        }
      ]
    }
  }
}
</script>
<style scoped>
img {
  width: 100%;
  height: auto;
  margin-bottom: 16px;
}
p {
  font-size: 16px;
  text-indent: 2em;
}
h4 {
  text-align: center;
}
h6 {
  text-align: center;
}
</style>
