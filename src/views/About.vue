<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'
import aboutHtml from '@/assets/About.md'

@Component({})
export default class About extends Vue {
  html = aboutHtml
}
</script>

<template>
  <div class="markdown" v-html="html"></div>
</template>

<style lang="scss">
@import '@/css/markdown.scss';
</style>
