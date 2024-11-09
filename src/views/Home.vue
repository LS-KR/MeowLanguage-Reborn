<script lang="ts">
import { meowEncode } from '@/logic/meow'
import { Component, Vue } from 'vue-facing-decorator'

@Component({})
export default class Home extends Vue {
  original = ''
  encoded = meowEncode(this.original)

  encode() {
    this.encoded = meowEncode(this.original)
    console.log(this.original)
  }

  copy() {
    navigator.clipboard.writeText(this.encoded)
  }
}
</script>

<template>
  <div class="encodes">
    <textarea
      v-model="original"
      v-on:change="encode()"
      v-on:keydown="encode()"
      v-on:keyup="encode()"
      placeholder="Type something..."
    ></textarea>
    <p>{{ encoded }}</p>
    <button class="ripple" v-on:click="copy()">复制</button>
  </div>
</template>

<style lang="scss">
@import '@/css/fonts.css';

.encodes {
  width: calc(100% - 4rem);
  height: 100%;
  padding: 2rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  color: #4c4f69;

  textarea {
    width: calc(100% - 4rem);
    height: 16rem;
    resize: none;
    border: none;
    outline: none;
    margin: auto;
    background-color: rgba(18, 18, 28, 0.05);
    border-radius: 2rem;
    padding: 0.5rem 1rem;
    font-family: 'Maple Mono', 'JetBrains Mono', 'Consolas', 'Courier New', monospace;
    font-size: 16px;
  }

  p {
    width: calc(100% - 4rem);
    min-height: 16rem;
    text-align: start;
    text-wrap: stable;
    font-family: 'Senty Pea', 'Senty Tang', 'Senty Cream', 'PingFang SC', 'Hiragino Sans GB',
      'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
    font-size: 18px;
  }

  .ripple {
    background-position: center;
    transition: background 0.8s;
    border: none;
    border-radius: 2px;
    padding: 12px 18px;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
    color: white;
    background-color: hsl(347, 100%, 72%);
    box-shadow: 0 0 4px #999;
    outline: none;

    &:hover {
      background: hsl(347, 100%, 72%)
        radial-gradient(circle, transparent 1%, hsl(347, 100%, 72%) 1%) center/15000%;
    }

    &:active {
      background-color: hsl(347, 100%, 84%);
      background-size: 100%;
      transition: background 0s;
    }
  }
}

[data-theme='dark'] {
  .encodes {
    color: #cdd6f4;

    textarea {
      background-color: rgba(255, 255, 255, 0.05);
      color: #cdd6f4;
    }

    .ripple {
      background-color: hsl(342, 28%, 21%);
      box-shadow: 0 0 4px #444;

      &:hover {
        background: hsl(342, 28%, 21%)
          radial-gradient(circle, transparent 1%, hsl(342, 28%, 21%) 1%) center/15000%;
      }

      &:active {
        background-color: hsl(342, 28%, 31%);
        background-size: 100%;
        transition: background 0s;
      }
    }
  }
}
</style>
