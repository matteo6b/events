import i18next from "i18next";
import I18NextVue from "i18next-vue";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "es",
    resources: {
      es: {
        translation: {
            auth:{
                google: "Iniciar sesión con Google",
                apple: "Iniciar sesión con Apple",
                signOut: "Cerrar sesión"
            }
          // here we will place our translations...
        },
      },
    },
  });

export default function (app) {
  app.use(I18NextVue, { i18next });
  return app;
}
