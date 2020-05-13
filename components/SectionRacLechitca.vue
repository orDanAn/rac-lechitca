<template>
  <section>
    <h2 class="main-section-titlerac-lechitca">
      #РАКЛЕЧИТСЯ
    </h2>
    <title-section class="title-rac-lechitca">
      О проекте
    </title-section>
    <div class="rac-lechitca-conteiner">
      <info-section class="paragraph-rac-lechitca">
        Этот проект был создан благотворительным фондом Константина Хабенского.
      </info-section>
      <div class="rac-lechitca-conteiner_inside">
        <div class="conteiner-link">
          <link-section class="link_white">Рак Лечится</link-section>
          <link-section class="link_grey">Фонд Хабенского</link-section>
        </div>
        <div>
          <info-section-long class="paragraph-rac-lechitca">
            Есть вещи, которые не лечатся. Особенности характера, страстные
            увлечения, привычки, ставшие частью нашего «я», фобии, которые мы
            приобрели в детстве. Список можно продолжать до бесконечности, но
            одна болезнь в него точно не войдет. Эта болезнь — рак. Рак лечится,
            и лучшее доказательство — люди с их неизлечимыми особенностями,
            которые сумели победить рак.
          </info-section-long>
          <info-section-long class="paragraph-rac-lechitca">
            Рак лечится — проект Благотворительного Фонда Константина Хабенского
            и Leo Burnett Moscow. С его помощью мы надеемся изменить отношение
            людей к раку и заставить каждого поверить: онкологическое
            заболевание — это не приговор.
          </info-section-long>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Baner from '@/components/Baner';
import Info_section_long from '@/components/Info_section_long';
import Info_section from '@/components/Info_section';
import Title_section from '@/components/Title_section';
import LinkSection from '@/components/ui/LinkSection';

export default {
  components: {
    'info-section': Info_section,
    'info-section-long': Info_section_long,
    'title-section': Title_section,
    'link-section': LinkSection,
  },
};
</script>

<style scoped>
section {
  width: 100%;
  max-width: 1440px;
  background: #613a93;
  padding-top: 90px;
  padding-bottom: 62px;
}

.main-section-titlerac-lechitca {
  font-family: Inter;
  font-style: normal;
  font-weight: 800;
  font-size: 58px;
  line-height: 70px;
  text-align: center;
  color: #ffffff;
}

.title-rac-lechitca {
  margin: 80px 0 32px 60px;
  color: #ffffff;
}

.rac-lechitca-conteiner {
  display: flex;
  justify-content: space-between;
  margin: 0 60px 0 60px;
}

.rac-lechitca-conteiner_inside {
  display: flex;
  justify-content: space-between;
  flex-basis: 785px;
}

.link_white {
  color: #ffffff;
}

.link_grey {
  color: #c9c9c9;
}

.link-section:hover {
  color: #ffffff;
}

.link_whitey:hover {
  color: #ffffff;
}

.conteiner-link {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 170px;
  margin-right: 40px;
}

.paragraph-rac-lechitca {
  color: #dedede;
  margin-bottom: 18px;
}
</style>
