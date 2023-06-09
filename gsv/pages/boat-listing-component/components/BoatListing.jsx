import Image from "next/image";
import { db } from "../../../firebase/app";
import { collection, getDocs } from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import cruiseData from "../../../data/cruise";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { BoatsContext } from "../index";

const BoatListing = () => {
  const delayAnimation = 100;
  const { boats, setBoats } = useContext(BoatsContext);
  var boatArray = new Array();

  useEffect(() => {
    const GetAllBoatData = async () => {
      let tempArray = new Array();
      const querySnapshot = await getDocs(collection(db, "boats"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        tempArray.push(doc.data());
        boatArray.push(doc.data());
      });

      setBoats(tempArray);
      console.log(boats);
    };

    GetAllBoatData();
  }, []);

  // Get Data
  return (
    <>
      {boatArray.map((element, index) => (
        <div key={index}> Hi </div>
      ))}
    </>
  );
};

export default BoatListing;
