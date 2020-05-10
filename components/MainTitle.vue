<template>
  <div class="conteiner">
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
.conteiner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  height: 689px;
  background: #613a93;
}

.main-title {
  font-family: 'Inter', Helvetica, sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
  color: #ffffff;
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
  margin-top: 639px;
}
</style>
