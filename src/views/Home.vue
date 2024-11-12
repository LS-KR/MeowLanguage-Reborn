<script lang="ts">
import { meowDecode, meowEncode } from '@/logic/meow'
import { Component, Vue } from 'vue-facing-decorator'
import { getTheme } from '@/logic/theme'

@Component({})
export default class Home extends Vue {
  original = ''
  encoded = '什么都没有呢喵~'
  labelStyle = ''

  encode() {
    if (this.original.length < 1) {
      this.encoded = '什么都没有呢喵~'
    } else if (this.original.endsWith('Σ(っ°Д°;)っ') || this.original.endsWith('_(:з」∠)_')) {
      this.encoded = meowDecode(this.original)
    } else {
      this.encoded = meowEncode(this.original)
    }
  }

  copy() {
    navigator.clipboard.writeText(this.encoded)
  }

  focusIn() {
    this.labelStyle = `transform: translateY(-1.75rem); background: ${getTheme() != 'dark' ? '#eff1f5' : '#1e1e2e'}; color: #ff9ca8;`
  }

  focusOut() {
    if (this.original.length < 1) {
      this.labelStyle = ''
    } else {
      this.labelStyle = `transform: translateY(-1.75rem); background: ${getTheme() != 'dark' ? '#eff1f5' : '#1e1e2e'};`
    }
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
      v-on:focusin="focusIn()"
      v-on:focusout="focusOut()"
    ></textarea>
    <label class="meow-label" v-bind:style="labelStyle">
      猫咪要填写在这里
    </label>
    <p>{{ encoded }}</p>
    <button class="ripple" v-on:click="copy()">复制</button>
  </div>
</template>

<style lang="scss">
@import '@/css/fonts.css';

.encodes {
  width: calc(100% - 2rem);
  height: 100%;
  padding: 1rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  color: #4c4f69;
  position: relative;

  textarea {
    width: calc(100% - 4rem);
    height: 16rem;
    resize: none;
    outline: none;
    margin: auto;
    background-color: transparent;
    border-radius: 1rem;
    padding: 1rem 1rem;
    font-family: 'Maple Mono', 'JetBrains Mono', 'Consolas', 'Courier New', 'PingFang SC', monospace;
    font-size: 16px;
    border: #7e7e7e80 1.5px solid;
    transition: all 0.1s ease-in-out;

    &:hover {
      border: #7e7e7e solid 1.5px;
    }

    &:focus {
      border: #ff9ca8 solid 1.5px;
      outline: #ff9ca8 solid 0.5px;
    }
  }

  .meow-label {
    position: absolute;
    transition: all 0.25s ease-in-out;
    left: 2.5rem;
    top: 2rem;
    color: #7e7e7e80;
    padding: 0 0.5rem;
  }

  p {
    width: calc(100% - 2rem);
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
    background-color: #ff9ca8ff;
    box-shadow: 0 0 4px #999;
    outline: none;

    &:hover {
      background: #ff9ca8ff
        radial-gradient(circle, transparent 1%, #ff9ca8ff 1%) center/15000%;
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
      color: #cdd6f4;
    }

    .meow-label {
      color: #cdd6f480;
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

@media screen and (max-width: 600px) {
  .encodes {
    width: calc(100% - 1rem);
    padding: 2rem 0;

    textarea {
      width: calc(100% - 1rem);
    }

    .meow-label {
      top: 3rem;
      left: 1rem;
    }

    p {
      width: calc(100% - 1rem);
    }
  }
}
</style>
