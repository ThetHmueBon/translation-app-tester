<template>
   <div>
      <button @click="changeLocale('en')">English</button>
      <button @click="changeLocale('ja')">Japan</button>
      <p>{{ greetingMessage }}</p>
      <p>{{ greetingWelcome }}</p>
    </div>
</template>

<script setup>
// import { useI18n } from "vue-i18n"
import { useLocalization } from './composables/useLocalization';
const { locale, greetingMessage,greetingWelcome, changeLocale } = useLocalization();
// const { t } = useI18n();
// console.log(t)
</script>

<style>

</style>