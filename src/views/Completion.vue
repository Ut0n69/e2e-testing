<template>
  <div class="Completion">
    <h1 class="Completion__title">Completion</h1>
    <div class="Completion__body">
      <h2>It has been successful</h2>
      <router-link class="Completion__body-button" to="/" tag="button">
        Back To Top
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Completion"
};
</script>

<style lang="scss" scoped>
.Completion {
  max-width: 500px;
  margin: 0 auto;

  &__title {
    color: #acaaad;
    margin-bottom: 15px;
  }

  &__body {
    text-align: center;

    &-button {
      width: 300px;
      height: 50px;
      margin: 15px 0 0 20px;
      background-color: #faaca8;
      background-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);
      border-radius: 25px;
      outline: none;
      cursor: pointer;
      border: 0;
      color: #fff;
      font-size: 25px;
    }
  }
}
</style>
