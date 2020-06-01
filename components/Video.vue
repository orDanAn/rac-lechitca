<template>
  <div>
    <!-- <section class="video">
      <div class="video__text-container">
        <main-title>{{
          textFromApi.find(item => item.block === 'videos').title
        }}</main-title>
        <description
          class="video__description"
          v-html="textFromApi.find(item => item.block === 'videos').text"
        ></description>
        <div class="video__button-container">
          <button-switch
            :position="'left'"
            class="video__button video__button_left"
          ></button-switch>
          <button-switch
            :position="'right'"
            class="video__button video__button_right"
          ></button-switch>
        </div>
      </div>
      <div class="video__container">
        <iframe class="video__iframe" src="" frameborder="0"></iframe>
        <p class="video__text">
          {{
            textFromApi.find(item => item.block === 'videos').note.substr(0, 35)
          }}
          <a
            href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
            target="_blank"
            class="video__link"
            >{{
              textFromApi
                .find(item => item.block === 'videos')
                .note.substr(35, 14)
            }}</a
          >.
        </p>
      </div>
    </section> -->
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
  computed: {
    textFromApi() {
      return this.$store.getters['storeBlocks/getBlocks'];
    },
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
  .video__button {
    position: absolute;
    top: 130px;
  }
  .video__button_left {
    right: 345px;
  }
  .video__button_right {
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
  .video__button {
    position: absolute;
    top: 66px;
  }
  .video__button_left {
    right: 170px;
  }
  .video__button_right {
    left: 170px;
  }
  .video__description {
    margin-top: 17px;
  }
}
</style>
