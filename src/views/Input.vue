<template>
  <div class="Input">
    <h1 class="Input__title">Input</h1>
    <div class="Input__input-body">
      <label class="Input__input-body-label">Name</label>
      <input v-model="input.name" class="Input__input-body-input" type="text" />
      <label class="Input__input-body-label">Email</label>
      <input
        v-model="input.email"
        class="Input__input-body-input"
        type="text"
      />
      <label class="Input__input-body-label">Gender</label>
      <label class="Input__input-body-radio">
        <input
          v-model="input.gender"
          value="Male"
          class="Input__input-body-radio"
          type="radio"
          name="gender"
        />Male
      </label>
      <label class="Input__input-body-radio">
        <input
          v-model="input.gender"
          value="Female"
          class="Input__input-body-radio"
          type="radio"
          name="gender"
        />Femal
      </label>
      <label class="Input__input-body-radio">
        <input
          v-model="input.gender"
          value="Other"
          class="Input__input-body-radio"
          type="radio"
          name="gender"
        />Other
      </label>
      <label class="Input__input-body-label">Country</label>
      <select v-model="input.country" class="Input__input-body-select">
        <option>Australia</option>
        <option>Bangladesh</option>
        <option>China</option>
        <option>Japan</option>
        <option>Korea</option>
        <option>USA</option>
        <option>Vietnam</option>
      </select>
      <button @click="submit" class="Input__input-body-button">Next</button>
      <p v-if="isShowErrorMessage" class="Input__input-body-error">
        Oops! You must type ALL items.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",
  data() {
    return {
      isShowErrorMessage: false,
      input: {
        name: "",
        email: "",
        gender: "",
        country: ""
      }
    };
  },
  methods: {
    validation() {
      return !Object.keys(this.input).some(key => !this.input[key]);
    },
    submit() {
      if (this.validation()) {
        this.isShowErrorMessage = false;
        this.$store.commit("updateInput", this.input);
        this.$router.push({
          path: "/confirmation",
          params: this.input
        });
      } else {
        this.isShowErrorMessage = true;
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (from.name === "confirmation") {
        vm.input = vm.$store.state.input;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.Input {
  max-width: 500px;
  margin: 0 auto;

  &__title {
    color: #acaaad;
    margin-bottom: 15px;
  }

  &__input-body {
    &-label {
      font-size: 17px;
      margin-top: 15px;
      display: block;
    }
    &-input {
      color: #867676;
      width: 500px;
      height: 30px;
      font-size: 18px;
      outline: none;
      border: 3px solid #ddd6f3;
      border-radius: 7px;
      display: block;
    }
    &-radio {
      padding-right: 15px;
    }
    &-select {
      color: #867676;
      width: 500px;
      height: 30px;
      font-size: 18px;
      outline: none;
      border: 3px solid #ddd6f3;
      border-radius: 7px;
      background: #fff;
    }
    &-button {
      width: 300px;
      height: 50px;
      margin: 15px 0 0 100px;
      background-color: #faaca8;
      background-image: linear-gradient(19deg, #faaca8 0%, #ddd6f3 100%);
      border-radius: 25px;
      outline: none;
      cursor: pointer;
      border: 0;
      color: #fff;
      font-size: 25px;
    }
    &-error {
      text-align: center;
      color: red;
    }
  }
}
</style>
