<template>
  <root>
    <instagram-banner class="instagram-banner"
      >РАССКАЗЫВАЙТЕ ВАШИ ИСТОРИИ В ИНСТАГРАМ <br
    /></instagram-banner>
    <div class="instagram__main-container">
      <div class="instargam__text-container">
        <section-title class="instagram__title">Инстаграм</section-title>
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
  </root>
</template>

<script>
import Baner from '@/components/Baner';
import Info_section from '@/components/Info_section';
import Title_section from '@/components/Title_section';
import Root from '@/components/Root';

export default {
  components: {
    'instagram-banner': Baner,
    'section-title': Title_section,
    'section-subtitle': Info_section,
    root: Root,
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
.instagram-banner {
  margin-top: 100px;
  /* height: 12.5vh; */
  height: 129px;
}

.instagram__main-container {
  margin: 100px auto 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 100px;
}

@media screen and (max-width: 1280px) {
  .instagram__main-container {
    margin-bottom: 90px;
  }
}

.instagram__title {
  text-decoration-line: underline;
}

.instagram__subtitle {
  margin-top: 2em;
}

.instagram__preview-container {
  width: 870px;
  display: grid;
  grid-template: repeat(2, min-content) / repeat(4, min-content);
  grid-gap: 30px;
}

@media screen and (max-width: 1280px) {
  .instagram__preview-container {
    width: 765px;
    grid-gap: 27px;
  }
}

.instagram__preview-card {
  width: 195px;
  height: 195px;
}

@media screen and (max-width: 1280px) {
  .instagram__preview-card {
    width: 171px;
    height: 171px;
  }
}
</style>
