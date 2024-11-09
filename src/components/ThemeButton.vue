<script lang="ts">
import { applyTheme, getTheme, setTheme, Theme } from '@/logic/theme'
import { Icon } from '@iconify/vue'
import { Component, Vue } from 'vue-facing-decorator'

@Component({ components: { Icon } })
export default class ThemeButton extends Vue {
  theme = 'unset' as Theme
  getTheme = getTheme

  changeTheme(): void {
    if (this.theme == 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
    applyTheme()
    this.theme = getTheme()
  }
}
</script>

<template>
  <div class="theme-button" v-on:click="changeTheme()">
    <Icon class="theme-icon" icon="mynaui:sun" v-if="theme != 'dark'" />
    <Icon class="theme-icon" icon="mynaui:moon" v-else />
  </div>
</template>

<style scoped lang="scss">
.theme-button {
  display: block;
  width: 24px;
  height: 24px;
  background: transparent;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.25);
  }

  .theme-icon {
    display: inline-block;
    height: 24px;
    width: 24px;
    color: #fff;
    text-align: center;
    line-height: 24px;
    vertical-align: middle;
  }
}
</style>
