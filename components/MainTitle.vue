<template>
  <h1 class="main-title">
    #РАКЛЕЧИТСЯ
  </h1>
</template>

<script>
import ButtonSmoll from '@/components/ButtonSmoll';

export default {
  'button-smoll': ButtonSmoll,
};
</script>

<style scoped>
.main-title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', Helvetica, sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
  color: #ffffff;
  background: #613a93;
  width: 100%;
  max-width: 1440px;
  height: 689px;
}

@media screen and (max-width: 1280px) {
  .main-title {
    height: 620px;
    font-weight: 800;
    font-size: 78px;
    line-height: 94px;
  }
}
</style>
