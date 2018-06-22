<template>
  <div class="list-word">
    <div class="">
    <button @click="setGroup()">NEW</button>
    <button @click="setGroup()">DOING</button>
    <button @click="setGroup()">COMMON</button>
    <button @click="setGroup()">DONE</button>
    </div>
    <div>
      <div class="list-item" v-for="word in words" :key="word">
        <span class="list-item__text">{{word}}</span>
      </div>
    </div>
  </div>
</template>

<script>
const storage = weex.requireModule("storage");
export default {
  data() {
    return {
      group: 1,
      words: []
    };
  },
  mounted() {
    this.setWords(this.group);
  },
  watch: {
    group(newGroup) {
      this.setWords(newGroup);
    }
  },
  methods: {
    setGroup(group) {
      this.group = group;
    },
    setWords(group) {
      let allWords = [];
      storage.getAllKeys(data => {
        allWords = data.data;
        const words = allWords
          .filter(x => parseInt(x.substring(6, 7)) === group)
          .map(x => x.substring(8));
        this.words = words;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.list-word {
  width: 100%;
}
  .list-item {
    border-top: solid 1px black;
    width: 100%;
    height: 100px;
    padding-left: 20px;
    &__text {
      margin-top: 22px;
      font-size: 36px;
    }
  }
</style>
