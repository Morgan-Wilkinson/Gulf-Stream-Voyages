import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { createContext, useState, useContext, useEffect } from "react";
import "photoswipe/dist/photoswipe.css";
import Seo from "../../../components/common/Seo";
import Header from "../../../components/header/header";
import Overview from "./components/Overview";
import TopBreadCrumb from "./components/TopBreadCrumb";
import SidebarRight from "./components/SidebarRight";
import ReviewProgress from "./components/guest-reviews/ReviewProgress";
import DetailsReview from "./components/guest-reviews/DetailsReview";
import ReplyForm from "./components/ReplyForm";
import ReplyFormReview from "./components/ReplyFormReview";
import Facilities from "./components/Facilities";
import Footer from "../../../components/footer";
import MapPropertyFinder from "./components/MapPropertyFinder";
import GalleryCruiseSlider from "./components/GalleryCruiseSlider";
import { UserContext } from "../../_app";
import Review from "../../../models/Review";

export const SingleBoatContext = createContext();
export const NewReviewContext = createContext();

const LeaveReview = () => {
  const userContext = useContext(UserContext);
  const review = new Review();

  if (userContext != null && userContext.email != null) {
    review.email = userContext.email;

    return (
      <NewReviewContext.Provider value={review}>
        <section className="pt-40 layout-pb-md">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-10">
                <div className="row">
                  <div className="col-auto">
                    <h3 className="text-22 fw-500">Leave a Reply</h3>
                    <p className="text-15 text-dark-1 mt-5">
                      Your email address will not be published.
                    </p>
                  </div>
                </div>
                {/* End .row */}

                <ReplyFormReview />
                {/* End ReplyFormReview */}

                <ReplyForm />
              </div>
            </div>
          </div>
        </section>
        {/* End Reply Comment box section */}
      </NewReviewContext.Provider>
    );
  }
};

const BoatSingleDynamic = () => {
  const router = useRouter();

  const [boat, setBoat] = useState({});
  const name = router.isReady ? router.query.name : "";

  // Get the Data for the boat and if null retrieve the data
  useEffect(() => {
    const boats = localStorage.getItem("boats")
      ? JSON.parse(localStorage.getItem("boats"))
      : null;

    if (name != "" && name != null && boats != null) {
      console.log(name);
      console.log(
        window.location.href.substring(
          window.location.href.lastIndexOf("/") + 1
        )
      );
      const foundBoat = boats.find((item) => item.name == name);
      if (name == null && foundBoat == null) {
        router.push("/404");
      } else {
        setBoat(foundBoat);
      }
    }
  }, [name]);

  if (name == null || boat == null) {
    router.push("/404");
  } else {
    return (
      <>
        <SingleBoatContext.Provider value={boat}>
          <Seo pageTitle="Cruise Single" />
          {/* End Page Title */}
          <div className="header-margin"></div>
          {/* header top margin */}
          <Header />
          {/* End Header 1 */}
          <TopBreadCrumb boatName={boat?.name} />
          {/* End top breadcrumb */}
          <section className="pt-40">
            <div className="container">
              <div className="row justify-between items-end">
                <div className="col-auto">
                  <h1 className="text-26 fw-600">{boat?.name}</h1>
                  <div className="d-flex x-gap-5 items-center pt-5">
                    <i className="icon-location-2 text-16 text-light-1" />
                    <div className="text-15 text-light-1">Florida</div>
                  </div>
                </div>
                {/* End .col-auto */}

                <div className="col-auto">
                  <div className="row x-gap-10 y-gap-10">
                    <div className="col-auto">
                      <button className="button px-15 py-10 -blue-1">
                        <i className="icon-share mr-10" />
                        Share
                      </button>
                    </div>
                    {/* End .col-auto */}
                  </div>
                  {/* End .row */}
                </div>
                {/* End .col-auto */}
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
          </section>
          {/* End top gallery header section */}
          <section className="pt-30">
            <div className="container">
              <div className="row y-gap-30">
                <div className="col-xl-8">
                  <GalleryCruiseSlider galleryImages={boat?.galleryImages} />
                  {/* End gallery grid wrapper */}

                  <Overview boat={boat} />
                  {/* End Overview */}
                </div>
                {/* End .col-xl-8 */}

                <div className="col-xl-4">
                  <SidebarRight cruise={boat} />
                </div>
                {/* End .col-xl-4 */}
              </div>
              {/* End .row */}
            </div>
            {/* End container */}
          </section>
          {/* End single page content */}
          <section className="mt-40">
            <div className="container border-top-light pt-40">
              <div className="row x-gap-40 y-gap-40">
                <div className="col-12">
                  <h3 className="text-22 fw-500">Facilities of this Cruise</h3>
                  <div className="row x-gap-40 y-gap-40 pt-20">
                    <Facilities />
                  </div>
                  {/* End .row */}
                </div>
                {/* End .col-12 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
          </section>
          {/* End facilities */}
          <section className="pt-40">
            <div className="container">
              <h3 className="text-22 fw-500 mb-20">Cruise Location</h3>
              <div className=" rounded-4 overflow-hidden map-500">
                <MapPropertyFinder />
              </div>
            </div>
          </section>
          {/* End MapPropertyFinder */}
          <section className="pt-40 py-20">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h3 className="text-22 fw-500">Guest reviews</h3>
                </div>
              </div>
              {/* End .row */}

              <ReviewProgress />
              {/* End review with progress */}

              <div className="pt-40">
                <DetailsReview />
                {/* End review with details */}
              </div>

              <div className="row pt-30">
                <div className="col-auto">
                  <a
                    href="#"
                    className="button -md -outline-blue-1 text-blue-1"
                  >
                    Show all 116 reviews{" "}
                    <div className="icon-arrow-top-right ml-15"></div>
                  </a>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
            {/* End container */}
          </section>
          {/* End Review section */}

          <LeaveReview></LeaveReview>
          {/* End facilites section */}
          <Footer />
        </SingleBoatContext.Provider>
      </>
    );
  }
};

export default dynamic(() => Promise.resolve(BoatSingleDynamic), {
  ssr: false,
});
