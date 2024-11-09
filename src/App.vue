<script lang="ts">
import ThemeButton from '@/components/ThemeButton.vue'
import { meowDecode, meowEncode } from '@/logic/meow'
import { Component, Vue } from 'vue-facing-decorator'
import { RouterLink, RouterView } from 'vue-router'

@Component({ components: { RouterLink, RouterView, ThemeButton } })
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
        <router-link to="/about" class="nav-link">关于</router-link>
      </div>
    </div>
    <div class="nav-right">
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
  font-family: 'PingFangSC-Medium', 'PingFang SC', 'Helvetica Neue', "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Helvetica, Arial, sans-serif;
}

.nav {
  position: fixed;
  width: 100vw;
  height: 50px;
  left: 0;
  top: 0;
  background: hsl(347, 100%, 72%);
  filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.89));
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

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

      a {
        color: white;
        text-decoration: none;
        position: relative;
        transition: all 0.3s linear;

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
          color: bisque;
          text-decoration: none;

          &:before {
            transform: scaleX(1);
          }
        }

        &.router-link-exact-active {
          color: antiquewhite;
        }
      }
    }
  }

  .nav-right {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
  }
}

.placeholder{
  display: block;
  width: 100%;
  height: 70px;
}

[data-theme="dark"] {
  .nav {
    background: hsl(342, 28%, 21%);;
  }

  body {
    background: #1e1e2e;
  }
}
</style>
