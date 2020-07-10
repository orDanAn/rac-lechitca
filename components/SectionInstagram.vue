<template>
  <container>
    <!-- тут тоже надо прокидывать класс миксин если он нужен, а если нет то прямо внутри компонента можно прописать этот же класс -->
    <baner>
      РАССКАЗЫВАЙТЕ ВАШИ ИСТОРИИ В ИНСТАГРАМ
      <br />
    </baner>
    <div class="instagram__main-container">
      <div class="instargam__text-container">
        <section-title class="instagram__title"
          ><a
            href="https://www.instagram.com/raklechitsa/"
            class="instagram__link"
            >Инстаграм</a
          >
        </section-title>
        <section-subtitle class="instagram__subtitle"
          >Два раза в неделю мы просматриваем все посты по хештегу
          #этонелечится. Все истории, где нет нецензурных выражений и
          запрещенного контента попадают сюда. Следите за правильным написанием
          хештега, чтобы мы не пропустили вашу историю.</section-subtitle
        >
      </div>
      <div class="instagram__preview-container">
        <img
          v-for="card in cards"
          :key="card.id"
          :src="card.url"
          alt="фотка из инстаграм"
          class="instagram__preview-card"
        />
      </div>
    </div>
  </container>
</template>

<script>
import Baner from '@/components/Baner';
import Info_section from '@/components/Info_section';
import Title_section from '@/components/Title_section';
import Container from '@/components/Container';

export default {
  components: {
    baner: Baner,
    'section-title': Title_section,
    'section-subtitle': Info_section,
    container: Container,
  },
  data() {
    return {
      cards: [
        {
          id: '1',
          url:
            'https://static.tildacdn.com/tild6235-6365-4361-b063-383634643132/ENiUf89XkAkhUKb.jpg',
        },
        {
          id: '2',
          url:
            'https://www.vokrug.tv/pic/product/5/a/a/4/5aa4257d1d77fb7439c7b892b930cfc1.jpg',
        },
        {
          id: '3',
          url:
            'https://thumb.tildacdn.com/tild6232-3834-4032-b133-613431343531/-/resize/824x/-/format/webp/b1mBxyAceq0rdqivhoHB.png',
        },
        {
          id: '4',
          url:
            'https://univertv.org/uploads/posts/2020-03/1583348439_vnutri-lapenko-1-5.jpg',
        },
        {
          id: '5',
          url:
            'https://static.tildacdn.com/tild6235-6365-4361-b063-383634643132/ENiUf89XkAkhUKb.jpg',
        },
        {
          id: '6',
          url:
            'https://www.vokrug.tv/pic/product/5/a/a/4/5aa4257d1d77fb7439c7b892b930cfc1.jpg',
        },
        {
          id: '7',
          url:
            'https://thumb.tildacdn.com/tild6232-3834-4032-b133-613431343531/-/resize/824x/-/format/webp/b1mBxyAceq0rdqivhoHB.png',
        },
        {
          id: '8',
          url:
            'https://univertv.org/uploads/posts/2020-03/1583348439_vnutri-lapenko-1-5.jpg',
        },
      ],
    };
  },
};
</script>

<style scoped>
.stories-rectangle {
  margin: 100px 65px 0;
}

.stories-baner__text {
  margin: -10px 0 -25px;
}

.instagram__main-container {
  margin: 105px auto 100px;
  width: 90.5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.instagram__title {
  text-decoration-line: underline;
}
.instagram__link:hover {
  opacity: 0.8;
  transition: opacity 0.3s ease-in-out;
}

.instagram__link {
  color: #000;
}

.instagram__subtitle {
  margin-top: 2em;
}

.instagram__preview-container {
  width: 870px;
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(4, 1fr);
  grid-gap: 30px;
}

.instagram__preview-card {
  width: 195px;
  height: 195px;
}

.instagram__preview-card:hover {
  cursor: pointer;
}

@media screen and (max-width: 1280px) {
  .instagram__main-container {
    margin-bottom: 90px;
    max-width: 91vw;
  }

  .instagram__preview-container {
    max-width: 604px;
    grid-gap: 20px;
  }

  .instagram__preview-card {
    width: 136px;
    height: 136px;
  }
}

@media screen and (max-width: 1024px) {
  .stories-rectangle {
    margin: 70px auto 0;
  }

  .instagram__main-container {
    margin: 75px auto 0;
    max-width: 91vw;
    padding: 0 10px;
  }

  .instagram__text-container {
    max-width: 260px;
  }

  .instagram__title {
    margin-top: 5px;
    font-size: 24px;
    line-height: 28px;
  }

  .instagram__subtitle {
    font-size: 13px;
    line-height: 16px;
    max-width: 260px;
  }

  .instagram__preview-container {
    max-width: 604px;
    grid-gap: 20px;
    margin-left: 30px;
  }

  .instagram__preview-card {
    width: 100px;
    height: 100px;
  }
}

@media screen and (max-width: 980px) {
  .instagram__main-container {
    flex-direction: column;
  }

  .instargam__text-container {
    justify-content: center;
    width: 100%;
  }
  .instagram__main-container {
    flex-direction: column;
  }
  .instagram__preview-container {
    margin: 40px auto 70px auto;
    width: 100vw;
  }

  .instagram__title {
    text-align: center;
    margin: 26px auto;
  }

  .instagram__subtitle {
    margin: 26px auto;
  }
}

@media screen and (max-width: 768px) {
  .stories-rectangle {
    margin: 70px auto 0;
    width: 95%;
  }

  .stories-baner__text {
    font-size: 24px;
    line-height: 40px;
    width: 628px;
    margin: -10px auto -30px;
  }

  .instagram__main-container {
    margin: 75px auto 70px;
    max-width: 1180px;
    flex-direction: column;
  }

  .instargam__text-container {
    justify-content: center;
    width: 100%;
  }

  .instagram__title {
    margin-top: 10px;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    width: 100%;
  }

  .instagram__subtitle {
    font-size: 13px;
    line-height: 16px;
    width: 380px;
    margin: 26px auto;
  }

  .instagram__preview-container {
    max-width: 765px;
    grid-gap: 17px;
    margin: 40px auto 0;
    width: 100%;
  }

  .instagram__preview-card {
    width: 137px;
    height: 137px;
  }
}

@media screen and (max-width: 600px) {
  .instagram__preview-container {
    grid-template: repeat(4, min-content) / repeat(2, min-content);
    grid-gap: 20px;
    width: 100%;
    justify-content: center;
  }
}

@media screen and (max-width: 320px) {
  .stories-rectangle {
    margin: 40px auto 0;
    width: 95%;
  }

  .stories-baner__text {
    font-size: 16px;
    line-height: 18px;
    margin: -3px 0 -20px;
    width: 220px;
  }

  .instagram__main-container {
    margin: 25px 0 50px;
    max-width: 1180px;
    flex-direction: column;
  }

  .instargam__text-container {
    justify-content: center;
    width: 100%;
  }

  .instagram__title {
    margin-top: 0px;
    font-size: 18px;
    line-height: 21px;
    text-align: left;
    width: 100%;
  }

  .instagram__subtitle {
    font-size: 13px;
    line-height: 16px;
    max-width: 290px;
    margin: 26px auto;
  }

  .instagram__preview-container {
    width: 100%;
    grid-gap: 27px;
    margin: 0 0 0 15px;
    grid-template: repeat(4, min-content) / repeat(2, min-content);
    grid-gap: 10px;
    justify-content: center;
  }

  .instagram__preview-card {
    width: 140px;
    height: 140px;
  }
}
</style>
