<template>
  <button class="stories__button ">
    <slot>SomeText</slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.stories__button {
  display: block;
  border: none;
  background-color: #fbfbfb;
  width: 100%;
  text-align: center;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  /* margin-bottom: 100px; */
  padding: 31px 0;
  cursor: pointer;
}

.stories__button:hover {
  background: #f8f8f8;
}

@media screen and (max-width: 1280px) {
  .stories__button {
    height: 78px;
  }
}
</style>
