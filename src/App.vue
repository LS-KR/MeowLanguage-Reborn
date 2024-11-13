<script lang="ts">
import ThemeButton from '@/components/ThemeButton.vue'
import { meowDecode, meowEncode } from '@/logic/meow'
import { Component, Vue } from 'vue-facing-decorator'
import { RouterLink, RouterView } from 'vue-router'
import { Icon } from '@iconify/vue'
import { applyTheme } from '@/logic/theme'

@Component({ components: { RouterLink, RouterView, ThemeButton, Icon } })
export default class App extends Vue {
  created() {
    ;(async function () {
      const original = 'Hello, this is a meow test with compression!'
      console.log('Original:', original)

      const encoded = meowEncode(original, false)
      console.log('Encoded:', encoded)

      const decoded = meowDecode(encoded)
      console.log('Decoded:', decoded)
    })()
    applyTheme()
  }
}
</script>

<template>
  <div class="nav">
    <div class="nav-left">
      <div class="nav-image">
        <img src="/img/meow.png" alt="meow" />
      </div>
      <div class="nav-links">
        <router-link to="/" class="nav-link">喵语翻译器</router-link>
      </div>
    </div>
    <div class="nav-right">
      <router-link to="/about" class="nav-link">
        <Icon icon="mynaui:info-circle-solid" class="nav-icon" />
      </router-link>
      <a class="nav-link" href="https://github.com/LS-KR/MeowLanguage-Reborn">
        <Icon
          class="nav-icon"
          icon="prime:github"
          style="width: 2rem; height: 2rem; margin-top: -2px"
        />
      </a>
      <div class="theme-button">
        <ThemeButton />
      </div>
    </div>
  </div>
  <div class="placeholder"></div>
  <router-view />
</template>

<style lang="scss">
@import '@/css/fonts.css';

* {
  transition: all 0.5s ease;
}

body {
  background: #eff1f5;
}

#app {
  font-family: 'PingFangSC-Medium', 'PingFang SC', 'Helvetica Neue', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Helvetica, Arial, sans-serif;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}

.nav {
  position: fixed;
  width: 100vw;
  height: 64px;
  left: 0;
  top: 0;
  background: #ff9ca8ff;
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 2147483647;

  .nav-left {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
    gap: 1rem;

    .nav-image {
      width: 36px;
      height: 36px;
      border-radius: 36px;
      overflow: hidden;

      img {
        width: 36px;
        height: 36px;
        display: block;
        object-fit: cover;
      }
    }

    .nav-links {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 100%;
      padding: 0;
      margin: 0;
      gap: 1rem;
    }
  }

  .nav-right {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
    gap: 1rem;
  }

  .nav-icon {
    width: 1.6rem;
    height: 1.6rem;
    vertical-align: middle;
    font-size: 1.6rem;
  }

  a {
    color: white;
    text-decoration: none;
    position: relative;
    transition: all 0.3s linear;
    font-size: 1.4rem;

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background: white;
      transition: all 0.4s linear;
      transform: scaleX(0);
      transform-origin: top left;
    }

    &:active {
      text-decoration: none;
    }

    &:hover {
      color: whitesmoke;
      text-decoration: none;

      &:before {
        transform: scaleX(1);
      }
    }

    &.router-link-exact-active {
      color: aliceblue;
    }
  }

  .nav-link {
    color: white;
    text-decoration: none;
    position: relative;
    transition: all 0.3s linear;
    font-size: 1.4rem;
  }
}

.placeholder {
  display: block;
  width: 100%;
  height: 70px;
}

[data-theme='dark'] {
  .nav {
    background: hsl(342, 28%, 21%);
  }

  body {
    background: #1e1e2e;
  }
}
</style>
