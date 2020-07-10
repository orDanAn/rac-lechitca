<template>
  <div>
    <project-header @clicBtnOpenPopap="popupOpen" />
    <nuxt />
    <project-footer />
    <popup v-if="popup.popupShow">
      <popup-container
        :title="currentQustion.title"
        :question="currentQustion.question"
        :explanation="currentQustion.explanation"
      />
    </popup>
    <popup v-if="popup.popupShowСontacts">
      <content-contact />
    </popup>
    <popup v-if="popup.popupShowSeti">
      <content-seti />
    </popup>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Popup from '@/components/Popup';
import Content from '@/components/Content';
import ContentContact from '@/components/ContentContact';
import ContentSeti from '@/components/ContentSeti';

export default {
  components: {
    'project-header': Header,
    'project-footer': Footer,
    popup: Popup,
    'popup-container': Content,
    'content-contact': ContentContact,
    'content-seti': ContentSeti,
  },

  computed: {
    popup() {
      return this.$store.getters['storePopup/getPopup'];
    },

    currentQustion() {
      const { quiz } = this.$store.state['storeContentPopup'];
      const { currentQustion, infoContent } = quiz;
      return infoContent[currentQustion];
    },
  },

  methods: {
    popupOpen() {
      this.$store.commit('storePopup/openPopup');
    },
  },
};
</script>

<style>
html {
  font-family: 'Inter', Helvetica, sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
