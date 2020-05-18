<template>
  <div class="container">
    <h1 class="main-title">
      #РАКЛЕЧИТСЯ
    </h1>
    <button-main-title class="button" />
  </div>
</template>

<script>
import ButtonMainTitle from '@/components/ui/ButtonMainTitle';
export default {
  components: {
    'button-main-title': ButtonMainTitle,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  min-height: calc(100vh - 100px);
  background: #613a93;
  position: relative;
}

.main-title {
  font-family: 'Inter', Helvetica, sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
  color: #fff;
}

@media screen and (max-width: 1280px) {
  .main-title {
    height: 620px;
    font-weight: 800;
    font-size: 78px;
    line-height: 94px;
  }
}

.button {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
