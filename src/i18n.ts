import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importamos los archivos JSON directamente
import translationES from './locales/es/translation.json';
import translationEN from './locales/en/translation.json';

const resources = {
  es: { translation: translationES },
  en: { translation: translationEN }
};

i18n
  .use(initReactI18next) // Pasa la instancia de i18n a react-i18next
  .init({
    resources,
    lng: 'es', // Idioma por defecto
    fallbackLng: 'en', // Idioma de respaldo si falla el principal
    interpolation: {
      escapeValue: false // React ya protege contra inyecciones XSS
    }
  });

export default i18n;