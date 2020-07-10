<template>
  <section class="stories">
    <container>
      <slot></slot>
    </container>
  </section>
</template>

<script>
import Container from '@/components/Container';

export default {
  components: {
    container: Container,
  },
};
</script>

<style scoped>
.stories {
  max-width: 1320px;
  margin: 0 auto;
}

.story-item {
  width: 300px;
  margin-bottom: 70px;
}

.story-item__name {
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
}

.story-item__text {
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
}

@media screen and (max-width: 1350px) {
  .story-item {
    width: 265px;
  }
}

.story-item__name {
  margin-top: 16px;
  margin-bottom: 14px;
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
}

.story-item__text {
  width: 83%;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #666666;
}

@media screen and (max-width: 1280px) {
  .stories {
    width: 100%;
  }
}

@media screen and (max-width: 1200px) {
  .story-item {
    width: 225px;
    margin-bottom: 60px;
  }

  .story-item__name {
    font-size: 18px;
    line-height: 22px;
  }

  .story-item__text {
    font-size: 13px;
    line-height: 16px;
  }
}

@media screen and (max-width: 1024px) {
  .story-item {
    width: 208px;
  }
}

@media screen and (max-width: 940px) {
  .story-item {
    width: 218px;
    margin-bottom: 40px;
  }

  .stories__subtitle {
    text-align: center;
    width: 380px;
    margin: 0 auto;
    margin-top: 80px;
  }
}

@media screen and (max-width: 768px) {
  .story-item {
    width: 216px;
  }

  .stories__subtitle {
    width: 290px;
    margin-top: 80px;
  }
}

@media screen and (max-width: 730px) {
  .story-item {
    width: 235px;
  }
}

@media screen and (max-width: 535px) {
  .story-item {
    width: 290px;
  }
}

@media screen and (max-width: 378px) {
  .stories__subtitle {
    text-align: left;
    margin-top: 50px;
  }
}
</style>
