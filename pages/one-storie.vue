<template>
  <container>
    <section class="storie-header">
      <img
        src="https://tverlife.ru/wp-content/uploads/2019/11/683174-592828-1voopUqS.jpg"
        alt=""
        class="storie-header__img"
      />
      <div class="storie-header__title-container">
        <div class="storie__grey-line"></div>
        <h3 class="storie-header__text">
          <span class="storie-header__text-bold">Александр Тарханов:</span>
          «Я не могу победить свою пунктуальность в отличии от рака»
        </h3>
      </div>
      <div class="storie-header__subtitle-container">
        <div class="storie-header__subtitle-text">
          <p class="storie-header__share">Поделитесь ↗</p>
          <p class="storie-header__date">20 апреля 2018</p>
        </div>
        <div class="storie__grey-line storie__grey-line_underline"></div>
      </div>
    </section>

    <section class="storie-text">
      <p class="storie-text__abzac">
        Я из военной семьи. Отец хоть и не был военным сам, но нас всех держал в
        ежовых рукавицах. Думаю, поэтому мы и выросли такими ответственными.
      </p>
      <p class="storie-text__abzac">
        У меня дома до сих пор стоят часы в каждой комнате, хотя они и не нужны
        особо — я сам чувствую, опаздываю куда-то или нет, отстаю от нужного
        графика или опережаю. Вот такие встроенные внутренние часы! Будильник
        мне тоже не нужен — я всегда встаю раньше. Одеваюсь тоже быстро, как в
        армии, за 45 секунд.
      </p>
      <p class="storie-text__abzac storie-text__abzac_bold">
        «В футболе если команда опоздала на 15 минут, ей засчитывается
        поражение».
      </p>
      <p class="storie-text__abzac">
        Опаздывать я тоже не люблю, на все встречи прихожу заранее. Если знаю,
        что могу попасть по дороге в пробку, то не еду на машине. В аэропорт
        приезжаю задолго до начала регистрации. Лучше подожду и кофе попью, чем
        опоздаю!
      </p>
      <p class="storie-text__abzac">
        Когда мне было 16 лет, мне в школе геометрию нужно было пересдавать. Я
        билеты выучил, знал абсолютно все. Пришел в нужное время, а учительница
        — нет. Ну, я какое-то время подождал ее и ушел. Потом она спрашивала:
        «Почему не дождался?». Я ответил: «В футболе если команда опоздала на 15
        минут, ей засчитывается поражение». Экзамен мне все-таки поставили!
        Сейчас если кто-то из футболистов моей команды опаздывает — начинаю
        злиться, могу и прикрикнуть потом. А если кто-то опоздал на тренировку
        перед игрой — все, подготовка насмарку. Я сразу начинаю думать тогда:
        «Значит, точно проиграем». Такая болезненная пунктуальность уже не
        лечится. В отличие от рака.
      </p>
      <p class="storie-text__abzac">
        «Сейчас если кто-то из футболистов моей команды опаздывает — начинаю
        злиться, могу и прикрикнуть потом. А если кто-то опоздал на тренировку
        перед игрой — все, подготовка насмарку. Я сразу начинаю думать тогда:
        «Значит, точно проиграем». Такая болезненная пунктуальность уже не
        лечится».
      </p>
    </section>

    <section class="storie-share">
      <div class="storie__grey-line"></div>
      <p class="storie-share__link">
        Поделитесь этой статьей в своих социальных сетях ↗
      </p>
      <!-- Хаз, здесь элемент grey-line в блоке storie с мод. underline, разве нет? -->
      <div class="storie__grey-line_underline"></div>
    </section>

    <additional-stories>
      <div v-for="item in stories" :key="item.id" class="story-item">
        <story-image />
        <!-- спросить у Данилы, у него позаимствовал -->
        <p class="story-item__name">{{ item.name }}</p>
        <p class="story-item__text">
          {{ item.text }}
        </p>
      </div>
    </additional-stories>

    <more-stories>Больше статей</more-stories>
  </container>
</template>

<script>
import Container from '@/components/Container';
import StoryContainer from '@/components/StoryContainer';
import MoreStoriesBtn from '@/components/ui/MoreStoriesBtn';

export default {
  components: {
    'additional-stories': StoryContainer,
    'more-stories': MoreStoriesBtn,
    container: Container,
  },

  data() {
    // вынести в отдельный store
    return {
      stories: [
        {
          id: 1,
          name: 'Владимир Тен',
          text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: 2,
          name: 'Владимир Познер',
          text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
        {
          id: 3,
          name: 'Владимир Тен',
          text:
            'Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.',
        },
        {
          id: 4,
          name: 'Владимир Познер',
          text: 'Я боюсь акул — и, в отличии от рака, это не лечится.',
        },
      ],
    };
  },
};
</script>

<style scoped>
.storie-header {
  display: grid;
  grid-template: 290px 290px / 580px 680px;
  grid-gap: 10px;
  margin: 100px auto;
  justify-content: space-between;
  max-width: 1320px;
}

.storie-header__img {
  grid-area: 1 / 1 / span 2;
  background: limegreen;
  width: 580px;
  height: 580px;
  object-fit: cover;
  margin: 0 auto;
}

.storie-header__title-container {
  grid-area: 1 / 2;
  margin: 0 auto 0;
  display: flex;
  flex-direction: column;
  width: 680px;
}

.storie-header__text {
  font-family: 'Inter';
  font-weight: normal;
  font-size: 38px;
  line-height: 48px;
  margin: 30px auto;
}

.storie-header__text-bold {
  font-weight: bold;
}

.storie-header__subtitle-container {
  grid-area: 2 / 2;
  max-width: 680px;
  width: 100%;
  margin: auto auto 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.storie-header__subtitle-text {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.storie-header__share {
  grid-area: 1 / 1;
}

.storie-header__date {
  grid-area: 1 / 2;
}

.storie__grey-line {
  background-color: #efefef;
  width: 100%;
  height: 1px;
  margin: 0 auto;
}

.storie__grey-line_underline {
  grid-area: 2 / 1 / 2 / span 2;
  background-color: #efefef;
  width: 100%;
  height: 1px;
  margin: 30px auto 0;
}

.storie-text {
  max-width: 780px;
  width: 100%;
  margin: 100px auto 0;
}

.storie-text__abzac {
  width: 100%;
  margin-top: 30px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 136%;
}

.storie-text__abzac_bold {
  font-weight: bold;
}

.storie-share {
  max-width: 780px;
  width: 100%;
  margin: 70px auto;
}

.storie-share__link {
  margin: 30px auto;
  padding: 0;
  text-align: center;
}
</style>
