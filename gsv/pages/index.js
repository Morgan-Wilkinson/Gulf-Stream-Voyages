import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import Wrapper from "./layout/wrapper";
import Home from "./home/home";

const firebaseConfig = {
  apiKey: "AIzaSyBncl2FIA3Ef4nslrRFWH2_pSyiLtvsvok",
  authDomain: "gulf-stream-voyages.firebaseapp.com",
  projectId: "gulf-stream-voyages",
  storageBucket: "gulf-stream-voyages.appspot.com",
  messagingSenderId: "57433376811",
  appId: "1:57433376811:web:d88a55ed805058a3a9826e",
  measurementId: "G-51YBRDTZS7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const MainRoot = () => {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
};

export default MainRoot;
