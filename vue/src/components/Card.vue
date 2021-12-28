<template>
  <div
    class="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-gray-800 dark:highlight-white/5"
  >
    <img
      class="absolute ml-5 w-28 h-28 rounded shadow-lg"
      src="../assets/logo.png"
    />
    <div class="min-w-0 py-5 pl-40 pr-5">
      <div
        class="text-gray-900 font-medium text-sm sm:text-base truncate dark:text-gray-200"
      >
        {{ title }}
      </div>
      <div
        class="text-gray-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-gray-400"
      >
        <p class="my-5">Software Developer</p>
        <a
          href="https://jasonreid.dev/"
          class="button text-white font-bold bg-blue-600 hover:bg-blue-800 py-2 px-4 rounded"
        >
          Check out my portfolio!
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  /*--sitePrimaryAccent from Gatsby Portfolio*/
  background-color: #8b548c;
}
a:hover {
  background-color: #8b548c;
  color: black;
}
</style>
