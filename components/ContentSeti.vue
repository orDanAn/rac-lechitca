<template>
  <div class="content-seti">
    <title-popup class="content-seti__title">
      Поделитесь
    </title-popup>
    <div class="content-seti__images">
      <a
        href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fsrc%3Dsp%26u%3Dhttps%253A%252F%252Fraklechitsa.ru%252Fstories%26title%3D%25D0%25A0%25D0%2590%25D0%259A%25D0%259B%25D0%2595%25D0%25A7%25D0%2598%25D0%25A2%25D0%25A1%25D0%25AF.%25D0%25A0%25D0%25A4%26utm_source%3Dshare2&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=ru_RU"
        target="_blank"
      >
        <picture>
          <source srcset="/images/FaceBook.svg" media="(min-width: 590px)" />
          <source srcset="/images/FaceBook-mini.svg" media="(min-width: 0)" />
          <img src="/images/FaceBook.svg" alt="FaceBook" />
        </picture>
      </a>
      <a
        href="https://twitter.com/intent/tweet?text=%D0%A0%D0%90%D0%9A%D0%9B%D0%95%D0%A7%D0%98%D0%A2%D0%A1%D0%AF.%D0%A0%D0%A4&url=https%3A%2F%2Fraklechitsa.ru%2Fstories&utm_source=share2"
        target="_blank"
      >
        <picture>
          <source srcset="/images/Twit.svg" media="(min-width: 590px)" />
          <source srcset="/images/Twit-mini.svg" media="(min-width: 0)" />
          <img src="/images/Twit.svg" alt="Twitter" />
        </picture>
      </a>
      <a
        href="https://oauth.vk.com/authorize?client_id=-1&redirect_uri=https%3A%2F%2Fvk.com%2Fshare.php%3Furl%3Dhttps%253A%252F%252Fraklechitsa.ru%252Fstories%26title%3D%25D0%25A0%25D0%2590%25D0%259A%25D0%259B%25D0%2595%25D0%25A7%25D0%2598%25D0%25A2%25D0%25A1%25D0%25AF.%25D0%25A0%25D0%25A4%26utm_source%3Dshare2&display=widget"
        target="_blank"
      >
        <picture>
          <source srcset="/images/VK.svg" media="(min-width: 590px)" />
          <source srcset="/images/VK-mini.svg" media="(min-width: 0)" />
          <img src="/images/VK.svg" alt="ВКонтакте" />
        </picture>
      </a>
      <a
        href="https://connect.ok.ru/dk?st.cmd=OAuth2Login&st.layout=w&st.redirect=%252Fdk%253Fcmd%253DWidgetSharePreview%2526amp%253Bst.cmd%253DWidgetSharePreview%2526amp%253Bst.title%253D%2525D0%2525A0%2525D0%252590%2525D0%25259A%2525D0%25259B%2525D0%252595%2525D0%2525A7%2525D0%252598%2525D0%2525A2%2525D0%2525A1%2525D0%2525AF.%2525D0%2525A0%2525D0%2525A4%2526amp%253Bst.shareUrl%253Dhttps%25253A%25252F%25252Fraklechitsa.ru%25252Fstories&st._wt=1&st.client_id=-1"
        target="_blank"
      >
        <picture>
          <source srcset="/images/OK.svg" media="(min-width: 590px)" />
          <source srcset="/images/OK-mini.svg" media="(min-width: 0)" />
          <img src="/images/OK.svg" alt="Одноклассники" />
        </picture>
      </a>
      <a href="https://www.instagram.com/raklechitsa/" target="_blank">
        <picture>
          <source srcset="/images/inst.svg" media="(min-width: 590px)" />
          <source srcset="/images/inst-mini.svg" media="(min-width: 0)" />
          <img src="/images/inst.svg" alt="Инстаграм" />
        </picture>
      </a>
      <a
        href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
        target="_blank"
      >
        <picture>
          <source srcset="/images/YouTube.svg" media="(min-width: 590px)" />
          <source srcset="/images/YouTube-mini.svg" media="(min-width: 0)" />
          <img src="/images/YouTube.svg" alt="YouTube" />
        </picture>
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

@media screen and (max-width: 1280px) {
  .content-seti {
    min-width: 800px;
    min-height: 324px;
  }

  .content-seti__images {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 400px;
    margin: auto;
  }

  .content-seti__title {
    font-size: 32px;
    line-height: 36px;
  }
}

@media screen and (max-width: 950px) {
  .content-seti {
    min-width: 580px;
    min-height: 324px;
  }
}

@media screen and (max-width: 590px) {
  .content-seti {
    min-width: 290px;
    min-height: 191px;
  }

  .content-seti__images {
    width: 280px;
  }

  .content-seti__title {
    margin: 15px auto 60px;
    text-align: center;
    font-size: 18px;
    line-height: 21px;
  }

  .content-seti__button-close {
    top: 10px;
    right: 7px;
  }
}
</style>
