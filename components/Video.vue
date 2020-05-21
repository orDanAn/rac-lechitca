<template>
  <div>
    <section class="video">
      <div class="video__text-container">
        <main-title>{{ text }}</main-title>
        <description class="video__description">{{ info }}</description>
        <div class="video__button-container">
          <button-switch
            :position="'left'"
            class="video__buttonL"
          ></button-switch>
          <button-switch
            :position="'right'"
            class="video__buttonR"
          ></button-switch>
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
import ButtonSwitch from '@/components/ui/ButtonSwitch';
export default {
  components: {
    'main-title': Title_section,
    description: Info_section,
    'button-switch': ButtonSwitch,
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
  color: #666;
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

@media (min-width: 1024px) and (max-width: 1279px) {
  .video__iframe {
    width: 606px;
    height: 314px;
    margin-left: 30px;
  }
  .video__description {
    margin-top: 20px;
  }
  .video__button-container {
    margin-top: 80px;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .video {
    margin-top: 80px;
    flex-direction: column;
  }
  .video__iframe {
    width: 580px;
    height: 300px;
    margin: 0;
  }
  .video__text {
    margin: 15px 0 0 0;
  }
  .video__text-container {
    width: 380px;
    margin: 0 auto 0 auto;
  }
  .video__button-container {
    width: 80px;
    margin: 60px auto 0 auto;
    position: relative;
  }
  .video__buttonL {
    position: absolute;
    top: 130px;
    right: 345px;
  }
  .video__buttonR {
    position: absolute;
    top: 130px;
    left: 345px;
  }
  .video__description {
    margin-top: 26px;
  }
}
@media (min-width: 320px) and (max-width: 767px) {
  .video {
    margin: 50px auto 0 auto;
    flex-direction: column;
  }
  .video__iframe {
    width: 290px;
    height: 150px;
    margin: 0;
  }
  .video__text-container {
    width: 290px;
    margin: 0 auto 0 auto;
  }
  .video__text {
    display: none;
  }
  .video__button-container {
    width: 80px;
    margin: 40px auto 0 auto;
    position: relative;
  }
  .video__buttonL {
    position: absolute;
    top: 66px;
    right: 170px;
  }
  .video__buttonR {
    position: absolute;
    top: 66px;
    left: 170px;
  }
  .video__description {
    margin-top: 17px;
  }
}
</style>
