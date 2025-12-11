import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import HeroSection from "./components/heroSection/HeroSection";
import AboutSection from "./components/aboutSection/AboutSection";
import EventSection from "./components/evenSection/EventSection";
import PosterSection from "./components/posterSection/PosterSection";
import HighlightSection from "./components/highlightSection/HighlightSection";
import GallerySection from "./components/gallerySection/GallerySection";
import TestinomialSection from "./components/testinomialSection/TestinomialSection";
import BookNowSection from "./components/booknowSection/BookNowSection";
import ContactSection from "./components/contactSection/ContactSection";
import Footer from "./components/footer/Footer";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          Vakrtunda: "Vakratunda Mahakaya Surya Koti Samaprabha Nirvighnam Kuru Me Deva Sarva-Kaaryeshu Sarvadaa ",
        },
      },
      hi: {
        translation: {
          Vakrtunda:
            "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा",
        },
      },
    },
    lng: "hi", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
function App() {

  return (
    <div className="w-full p-4 space-y-4">
      <NavBar />
      <HeroSection />
      <AboutSection/>
      <EventSection/>
      <PosterSection/>
      <HighlightSection/>
      <GallerySection/>
      <TestinomialSection/>
      <ContactSection/>
      <BookNowSection/>
      <Footer/>
    </div>
  );
}

export default App;
