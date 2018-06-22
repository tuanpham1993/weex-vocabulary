<template>
  <div class="wrapper">
    <button @click="toSetting()">Setting</button>
    <list-word v-if="stage === 'HOME'" />
    <setting v-if="stage === 'SETTING'" />
  </div>
</template>

<script>
import ListWord from "./components/ListWord.vue";
import Setting from "./components/Setting.vue";
export default {
  name: "App",
  components: {
    ListWord,
    Setting
  },
  data() {
    return {
      logo: "https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png",
      stage: "HOME"
    };
  },
  methods: {
    toSetting() {
      this.stage = "SETTING";
    }
  }
};
</script>

<style scoped>
.wrapper {
  justify-content: center;
  align-items: center;
}
.logo {
  width: 424px;
  height: 200px;
}
.greeting {
  text-align: center;
  margin-top: 70px;
  font-size: 50px;
  color: #41b883;
}
.message {
  margin: 30px;
  font-size: 32px;
  color: #727272;
}
</style>
