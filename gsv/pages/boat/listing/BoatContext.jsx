import { createContext } from "react";

const BoatContext = createContext({
  boats: [],
  setBoats: (newBoatArray) => {
    boats.splice(0, boats.length, ...newBoatArray);
  },
});
