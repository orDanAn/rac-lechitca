<template>
  <div>
    <h2 class="second-title">
      All stories (все истрии)
    </h2>
    <div class="div-a">
    <a href="/stories/1">первая история</a>
    <a href="/stories/2">вторая история</a>
    <a href="/stories/3">третья история</a>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
.second-title {
  font-size: 35px;
  display: flex;
  justify-content: center;
}
.div-a {
  font-size: 15px;
  display: flex;
  justify-content: center;

}

a {
  cursor: pointer;
  color:black;
  text-decoration: none;
  margin-left: 15px;

}

</style>
