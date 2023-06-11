import Aos from "aos";
import { useEffect, createContext } from "react";
import ScrollTop from "../components/common/ScrollTop";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "aos/dist/aos.css";
import "../styles/index.scss";
import User from "../models/User";
import BoatList from "../models/BoatList";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export const UserContext = createContext();
export const BoatListContext = createContext();

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <main>
      <UserContext.Provider value={User}>
        <BoatListContext.Provider value={BoatList}>
          <Component {...pageProps} />
          <ScrollTop />
        </BoatListContext.Provider>
      </UserContext.Provider>
    </main>
  );
}
