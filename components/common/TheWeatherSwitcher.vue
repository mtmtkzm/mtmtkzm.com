<template>
  <div>
    <div class="weather-switch">
      <div class="toggle" @click="toggleChoices">
        <AppIcon :name="weatherCurrent" />
      </div>

      <transition-group
        tag="ul"
        class="choices"
        name="choice"
        @before-enter="beforeEnter"
        @after-enter="afterEnter"
        @enter-cancelled="afterEnter"
      >
        <li
          v-for="(weather, index) in weatherList"
          v-show="isChoicesOpen"
          :key="weather"
          :data-index="index"
          @click="() => choiceClickHandler(weather)"
        >
          <AppIcon :name="weather" />
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChoicesOpen: false
    }
  },

  computed: {
    weatherList: function() {
      return this.$store.getters.weathers
    },
    weatherCurrent: function() {
      return this.$store.state.weather
    }
  },

  methods: {
    toggleChoices: function() {
      this.isChoicesOpen = !this.isChoicesOpen
    },
    choiceClickHandler: function(weather) {
      this.updateWeather(weather)
      this.toggleChoices()
    },
    updateWeather: function(weather) {
      this.$store.commit('updateWeather', weather)
      this.sendGaEvent(weather)
    },
    // enter の初めにインデックス×75でディレイを付ける
    beforeEnter(el) {
      el.style.transitionDelay = `${75 * el.dataset.index}ms`
    },
    // enter が終わるか中止されたらディレイを消す
    afterEnter(el) {
      el.style.transitionDelay = ''
    },
    sendGaEvent: function(weather) {
      this.$ga.event({
        eventCategory: 'Switching Color Weather',
        eventAction: 'Switched',
        eventLabel: weather,
        eventValue: 1
      })
    }
  }
}
</script>

<style scoped lang="postcss">
.weather-switch {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  .app-icon {
    fill: var(--color-primary);
  }
}

.toggle {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: var(--color-secondary);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  cursor: pointer;

  transition: color var(--base-transition);
}

.choices {
  display: flex;
  list-style: none;

  li {
    margin-right: 16px;

    width: 36px;
    height: 36px;
    border-radius: 20px;
    background-color: var(--color-secondary);
    color: var(--color-primary);

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
}

/* For transition group */
.choice-enter-active,
.choice-leave-active {
  transition: transform 250ms, opacity 250ms;
}

.choice-enter,
.choice-leave-to {
  opacity: 0;
  transform: translateX(5px);
}
</style>
