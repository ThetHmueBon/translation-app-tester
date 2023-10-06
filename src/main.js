import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import enMessage from "@/locales/en.json"
import jaMessage from "@/locales/ja.json"
const i18n = createI18n({
  locale: 'en',
  allowComposition: true, // you need to specify that!
  messages: {
    en: enMessage,
    ja: jaMessage
  }
})



const app = createApp(App);
app.use(i18n);
app.mount('#app');