<template>
    <div>
        <button @click="loadCommonWords()">Load 5000</button>
    </div>
</template>

<script>
const storage = weex.requireModule("storage");
import commonWords from "../5000.json";
export default {
//   mounted() {
//     storage.getAllKeys(data => {
//       console.log(data);
//       data.data.forEach(x => storage.removeItem(x));
//     });
//   },
  methods: {
    loadCommonWords() {
      commonWords.forEach(words => {
        storage.setItem(`GROUP#1#${words}`, "EMPTY");
      });
    }
  }
};
</script>

<style>
</style>
