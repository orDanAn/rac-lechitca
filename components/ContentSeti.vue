<template>
  <div class="content-seti">
    <title-popup class="content-seti__title">
      Поделитесь
    </title-popup>
    <div class="content-seti__images">
      <a href="" target="_blank">
        <img src="/images/FaceBook.svg" alt="Файсбук" />
      </a>
      <a href="" target="_blank">
        <img src="/images/Path.svg" alt="Твитер" />
      </a>
      <a href="" target="_blank">
        <img src="/images/VK.svg" alt="ВКонтакте" />
      </a>
      <a href="" target="_blank">
        <img src="/images/OK.svg" alt="Однакласники" />
      </a>
      <a href="" target="_blank">
        <img src="/images/inst.svg" alt="Инстаграм" />
      </a>
      <a href="" target="_blank">
        <img src="/images/YouTube.svg" alt="YouTube" />
      </a>
    </div>
    <button-close
      class="content-seti__button-close"
      @clickBtnClose="popupClose"
    />
  </div>
</template>

<script>
import ButtonClose from '@/components/ui/ButtonClose';
import Title_section from '@/components/Title_section';

export default {
  data() {
    return {
      answer: '',
    };
  },

  components: {
    'title-popup': Title_section,
    'button-close': ButtonClose,
  },

  computed: {},

  methods: {
    popupClose() {
      this.$store.commit('storePopup/closePopupShowSeti');
    },
  },
};
</script>

<style scoped>
.content-seti {
  min-width: 920px;
  min-height: 324px;
  background-color: #ffffff;
  position: relative;
}

.content-seti__images {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 400px;
  margin: auto;
}

.content-seti__title {
  margin: 40px auto 100px;
  text-align: center;
}

.content__title_center {
  margin: 0 auto;
  width: auto;
  text-align: center;
  margin-top: 40px;
}

@media screen and (max-width: 1280px) {
}

@media screen and (max-width: 1024px) {
  form {
    top: 230px;
  }
  .content__question {
    font-size: 15px;
  }
  .content__button-next {
    height: 46px;
  }
}

@media screen and (max-width: 768px) {
}

@media screen and (max-width: 590px) {
}
</style>
