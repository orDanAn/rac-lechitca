<template>
  <root>
    <section class="storie-header">
      <img src="" alt="" class="storie-header__img" />
      <div class="storie-header__title-containe">
        <div class="storie__grey-line"></div>
        <h3 class="storie-header__text">
          Александр Тарханов: «Я не могу победить свою пунктуальность в отличии
          от рака»
        </h3>
      </div>
      <div class="storie-header__subtitle-container">
        <p class="storie-header__share">Поделитесь ↗</p>
        <p class="storie-header__date">20 апреля 2018</p>
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

    <section class="share">
      <div class="storie__grey-line"></div>
      <!-- здесь воткнуть мнемоник -->
      <share class="share-link"
        >Поделитесь этой статьей в своих социальных сетях ↗</share
      >
      <div class="storie__grey-line_underline"></div>
    </section>

    <additional-stories>
      <div v-for="item in stories" :key="item.id" class="story-item">
        <story-image />
        <p class="story-item__name">{{ item.name }}</p>
        <p class="story-item__text">
          {{ item.text }}
        </p>
      </div>
    </additional-stories>

    <more-stories>Больше статей</more-stories>
  </root>
</template>

<script>
import Root from '@/components/Root';
import StoriesWrap from '@/components/StoriesWrap';
import MoreStoriesBtn from '@/components/ui/MoreStoriesBtn';

export default {
  components: {
    root: Root,
    'additional-stories': StoriesWrap,
    'more-stories': MoreStoriesBtn,
  },

  data() {
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

<style lang="scss" scoped></style>
