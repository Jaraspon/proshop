import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translations_th from './language/th.json'
import translations_en from './language/en.json'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // we init with resources
        resources: {
            en: {
                translations: translations_en
            },
            th: {
                translations: translations_th
            }
        },
        fallbackLng: "en",
        locales: ['en', 'th'],
        debug: true,

        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations",

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false,  // << ----- this line
        },
    });

export default i18n;