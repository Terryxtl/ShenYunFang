<template>
  <div class="content-container">
    <div class="text-content">
      <div class="image-row">
        <img
          src="@/assets/image/4.4.webp"
          alt="Top Image"
          class="img-thumbnail"
          style="
            width: 40%;
            display: flex;
            flex-direction: column;
            align-items: center;
          "
        />
        <img
          src="@/assets/image/4.3.webp"
          alt="Top Image"
          class="img-thumbnail"
          style="
            width: 40%;
            display: flex;
            flex-direction: column;
            align-items: center;
          "
        />
      </div>
      <h1>审计监督与法规</h1>
      <ol>
        <li>
          <strong>实行审计全覆盖的目标要求：</strong
          >对公共资金、国有资产、国有资源和领导干部履行经济责任情况实行审计全覆盖，是党中央、国务院对审计工作提出的明确要求。审计机关要建立健全与审计全覆盖相适应的工作机制，科学规划，统筹安排，分类实施，注重实效，坚持党政同责、同责同审。
        </li>
        <li>
          <strong>审计监督制度：</strong
          >国家实行审计监督制度，坚持中国共产党对审计工作的领导，构建集中统一、全面覆盖、权威高效的审计监督体系。国务院和县级以上地方人民政府设立审计机关。审计机关对财政收支或者财务收支的真实、合法和效益，依法进行审计监督。
        </li>
        <li>
          <strong>审计机关的职权和程序：</strong
          >审计机关依照法律规定的职权和程序，进行审计监督。审计机关依据有关财政收支、财务收支的法律、法规和国家其他有关规定进行审计评价，在法定职权范围内作出审计决定。
        </li>
        <li>
          <strong>审计工作报告：</strong
          >国务院和县级以上地方人民政府应当每年向本级人民代表大会常务委员会提出审计工作报告。审计工作报告应当报告审计机关对预算执行、决算草案以及其他财政收支的审计情况，重点报告对预算执行及其绩效的审计情况，按照有关法律、行政法规的规定报告对国有资源、国有资产的审计情况。
        </li>
        <li>
          <strong>审计处理处罚：</strong
          >计机关依照有关财政收支、财务收支的法律、法规，以及国家有关政策、标准、项目目标等方面的规定进行审计评价，对被审计单位违反国家规定的财政收支、财务收支行为，在法定职权范围内作出处理、处罚的决定
        </li>
        <li>
          <strong>群众对违法违规行为的举报：</strong
          >任何单位和个人对依法应当接受审计机关审计监督的单位违反国家规定的财政收支、财务收支行为，有权向审计机关举报。审计机关接到举报，应当依法及时处理
        </li>
      </ol>
    </div>
    <div class="image-container">
      <img
        src="@/assets/image/4.1.webp"
        alt="First Image"
        style="margin-top: 10px"
      />
      <p id="image-description">宪法</p>
      <img src="@/assets/image/4.2.webp" alt="Second Image" />
      <p id="image-description1">审计法</p>
    </div>
  </div>
</template>
<style scoped>
.content {
  padding: 20px;
}

.content h2 {
  color: #333;
  margin-bottom: 10px;
}

.content p,
.content ol {
  margin-bottom: 10px;
  line-height: 1.6;
}

.content ol {
  padding-left: 20px;
}

.content-container {
  display: flex;
  align-items: flex-start;
  padding: 20px;
  box-sizing: border-box;
}

.text-content {
  width: 70%;
  padding-right: 20px;
  box-sizing: border-box;
}

.image-container {
  width: 30%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-left: 1px dotted #333;
}

.image-container img {
  width: 80%;
  height: auto;
  box-sizing: border-box;
  padding: 20px;
}

.image-container p {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}

.image-row {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
}

.image-row img {
  display: block;
  margin: 0 10px;
}

ol {
  font-size: 18px;
  border: 2px solid #aaa;
  border-radius: 10px;
}
</style>
