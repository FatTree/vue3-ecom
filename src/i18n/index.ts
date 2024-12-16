import { createI18n } from "vue-i18n";
import  en  from './en.json';
import  ch  from './ch.json';


export const i18n = createI18n({
    globalInjection: true,
    legacy: false,
    locale: 'ch',
    locales: ['en', 'ch'],
    messages: {
        ch,
        en,
    }
})
