import { createI18n, type I18n } from "vue-i18n";

import  en  from './en.json';
import  ch  from './ch.json';

let browserLanguage = window.navigator.language

// 先塞入瀏覽器預設語言在 i18n
if (browserLanguage.toLowerCase() === 'en') {
    browserLanguage = 'en'
} else if (browserLanguage.toLowerCase() === 'zh-tw') {
    browserLanguage = 'ch'
} else {
    browserLanguage = 'en'
}

export const i18n = createI18n({
    globalInjection: true,
    legacy: false,
    locale: browserLanguage,
    fallbackLocale: browserLanguage,
    locales: ['en', 'ch'],
    messages: {
        ch,
        en,
    }
})
