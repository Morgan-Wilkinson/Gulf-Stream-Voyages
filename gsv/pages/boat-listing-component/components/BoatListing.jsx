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
      {boats.map((element, index) => (
        <div
          className="col-12"
          key={index}
          data-aos="fade"
          data-aos-delay={delayAnimation * index}
        >
          <div className="border-top-light pt-30">
            <div className="row x-gap-20 y-gap-20">
              <div className="col-md-auto">
                <div className="w-250 md:w-1/1 rounded-4">
                  <div className="cardImage ">
                    <div className="custom_inside-slider">
                      <Swiper
                        className="mySwiper"
                        modules={[Pagination, Navigation]}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={true}
                      >
                        {element?.featuredImages?.map((slide, i) => (
                          <SwiperSlide key={i}>
                            <div className="ratio ratio-1:1">
                              <div className="cardImage__content">
                                <Image
                                  width={300}
                                  height={300}
                                  className="rounded-4 col-12 js-lazy"
                                  src={slide}
                                  alt="image"
                                />
                              </div>

                              <div className="cardImage__wishlist">
                                <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                  <i className="icon-heart text-12" />
                                </button>
                              </div>
                              {/* End .cardImage__wishlist */}
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                  {/* End .cardImage__content */}
                </div>
                {/* End cartImage */}
              </div>
              {/* End .col-auto */}

              <div className="col-md">
                <div className="text-14 text-light-1">{element?.name}</div>
                <h3 className="text-18 lh-16 fw-500 mt-5">{element?.name}</h3>
                <div className="row y-gap-15 pt-30">
                  <div className="col-auto">
                    <div className="text-14">Boat Type</div>
                    <div className="text-14 text-light-1">{element?.type}</div>
                  </div>
                </div>
              </div>
              {/* End col-md */}

              <div className="col-md-auto text-right md:text-left">
                <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                  <div className="col-auto">
                    <i className="icon-star text-yellow-1 text-10" />
                  </div>
                  <div className="col-auto">
                    <div className="text-14 lh-13 text-light-1">
                      <span className="text-15 fw-500 text-dark-1">
                        {element?.ratings}
                      </span>{" "}
                      {element?.numberOfReviews} reviews
                    </div>
                  </div>
                </div>
                <Link
                  href={`/cruise/cruise-single/${element.name}`}
                  className="button h-50 px-24 -dark-1 bg-blue-1 text-white mt-24"
                >
                  View Detail <div className="icon-arrow-top-right ml-15" />
                </Link>
              </div>
              {/* End .col-md-auto */}
            </div>
            {/* End .row */}
          </div>
          {/* End border-top */}
        </div>
      ))}
    </>
  );
};

export default BoatListing;
