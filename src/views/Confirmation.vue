<template>
  <div class="Confirmation">
    <h1 class="Confirmation__title">Confirmation</h1>
    <div class="Confirmation__input-body">
      <label class="Confirmation__input-body-label">Name</label>
      <h2>{{ inputValue.name }}</h2>
      <label class="Confirmation__input-body-label">Email</label>
      <h2>{{ inputValue.email }}</h2>
      <label class="Confirmation__input-body-label">Gender</label>
      <h2>{{ inputValue.gender }}</h2>
      <label class="Confirmation__input-body-label">Country</label>
      <h2>{{ inputValue.country }}</h2>
      <template v-if="buttonDisabled">
        <button
          disabled
          @click="submit"
          class="Confirmation__input-body-button"
        >
          <div class="spinner"><div class="spinner-circle"></div></div>
        </button>
      </template>
      <template v-else>
        <button
          id="e2e-confirmation-button"
          @click="submit"
          class="Confirmation__input-body-button"
        >
          <p>Submit</p>
        </button>
      </template>
      <br />
      <div class="Confirmation__input-body-back">
        <router-link to="/">Back To Input</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Confirmation",
  computed: {
    ...mapState({
      inputValue: state => state.input
    })
  },
  data() {
    return {
      buttonDisabled: false
    };
  },
  methods: {
    toggleButton() {
      this.buttonDisabled = !this.buttonDisabled;
    },
    submit() {
      this.toggleButton();
      new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, 3 * 1000);
      }).then(() => {
        this.$router.push("/completion");
        this.toggleButton();
      });
    }
  },
  beforeRouteEnter(to, from, next) {
    if (from.name === "completion") next({ path: "/" });
    else next();
  }
};
</script>

<style lang="scss" scoped>
.Confirmation {
  max-width: 500px;
  margin: 0 auto;

  &__title {
    color: #acaaad;
    margin-bottom: 15px;
  }

  &__input-body {
    & h2 {
      text-align: center;
    }
    &-label {
      font-size: 17px;
      margin-top: 15px;
      display: block;
    }
    &-button {
      & p {
        font-size: 25px;
      }
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
    }
    &-back {
      text-align: center;
    }
  }
}

.spinner {
  & .spinner-circle {
    margin: 0 auto;
    width: 20px;
    height: 22px;
    border: 3px solid #fff;
    border-bottom: 3px solid #ddd6f3;
    border-radius: 50%;
    animation-name: spin;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
