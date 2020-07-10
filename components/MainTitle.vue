<template>
  <div class="container">
    <container>
      <h1 class="main-title">
        {{ blocks[0].hashtag }}
      </h1>
      <button-main-title
        class="button"
        @btnMainTaitle="$emit('btnMainTaitle')"
      />
    </container>
  </div>
</template>

<script>
import ButtonMainTitle from '@/components/ui/ButtonMainTitle';
import Container from '@/components/Container';
export default {
  components: {
    'button-main-title': ButtonMainTitle,
    container: Container,
  },
  computed: {
    blocks() {
      return this.$store.getters['storeBlocks/getBlocks'];
    },
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
  min-height: calc(100vh - 76px);
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

.button {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
}

@media screen and (max-width: 1280px) {
  .main-title {
    font-size: 78px;
    line-height: 94px;
  }
}

@media screen and (max-width: 768px) {
  .main-title {
    font-size: 64px;
    line-height: 77px;
  }
}

@media screen and (max-width: 590px) {
  .main-title {
    font-size: 36px;
    line-height: 44px;
  }

  .button {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
