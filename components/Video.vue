<template>
  <div>
    <section class="video">
      <div class="video__text-container">
        <main-title>{{ text }}</main-title>
        <description class="video__description">{{ info }}</description>
        <div class="video__button-container">
          <button-left />
          <button-right />
        </div>
      </div>
      <div class="video__container">
        <iframe class="video__iframe" src="" frameborder="0"></iframe>
        <p class="video__text">
          Все видео вы можете найте на нашем
          <a href="#" class="video__link">YouTube канале</a>.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import Title_section from '@/components/Title_section';
import Info_section from '@/components/Info_section';
import Button_left from '@/components/ui/Button_left';
import Button_right from '@/components/ui/Button_right';
export default {
  components: {
    'main-title': Title_section,
    description: Info_section,
    'button-left': Button_left,
    'button-right': Button_right,
  },
  data() {
    return {
      text: 'Истории людей, победивших рак, но не свои привычки',
      info:
        'Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии, страхи. Но это точно не рак.Рак лечится. Лучшее доказательство — люди с их историями.',
    };
  },
};
</script>

<style scoped>
.video {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  margin: 100px auto 0 auto;
}
.video__text-container {
  display: flex;
  flex-direction: column;
  margin-top: 11px;
}
.video__button-container {
  display: flex;
  margin-top: 150px;
}
.video__description {
  margin-top: 32px;
}
.video__iframe {
  width: 867px;
  height: 450px;
  background: #e5e5e5;
  margin-left: 40px;
}
.video__text {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #666666;
  margin-top: 6px;
  margin-left: 40px;
}
.video__link {
  color: #666666;
  text-decoration: underline;
  margin: 0;
}
@media (min-width: 1280px) and (max-width: 1439px) {
  .video__button-container {
    margin-top: 124px;
  }
  .video__description {
    margin-top: 30px;
  }
  .video__iframe {
    width: 773px;
    height: 400px;
  }
}
</style>
