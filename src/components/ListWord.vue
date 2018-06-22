<template>
  <div>
    <button @click="setGroup()"></button>
    <div>
      <div v-for="word in words" :key="word">{{word}}</div>
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
        console.log(data);
        allWords = data.data;
        const words = allWords
          .filter(x => parseInt(x.substring(6, 7)) === group)
          .map(x => x.substring(8));
        this.words = words;
        console.log(this.words);
      });
    }
  }
};
</script>

<style>
</style>
