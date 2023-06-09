import Seo from "../../components/common/Seo";
import Header from "../../components/header/header";
import Footer from "../../components/footer";
import MainFilterSearchBox from "../../components/cruise-list/cruise-list-v1/MainFilterSearchBox";
import TopHeaderFilter from "../../components/cruise-list/cruise-list-v1/TopHeaderFilter";
import BoatListing from "./components/BoatListing";
import Pagination from "../../components/cruise-list/common/Pagination";
import Sidebar from "../../components/cruise-list/cruise-list-v1/Sidebar";
import { createContext, useState } from "react";

export const BoatsContext = createContext();

const BoatListingContainer = () => {
  const [boats, setBoats] = useState([]);
  return (
    <>
      <BoatsContext.Provider value={{ boats, setBoats }}>
        <Seo pageTitle="Boat Listing" />
        {/* End Page Title */}
        <div className="header-margin"></div>
        <Header />
        {/* End Header 1 */}
        <section className="pt-40 pb-40 bg-light-2">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="text-center">
                  <h1 className="text-30 fw-600">Boat Listing</h1>
                </div>
                {/* End text-center */}
                {/* <MainFilterSearchBox /> */}
              </div>
              {/* End col-12 */}
            </div>
          </div>
        </section>
        {/* Top SearchBanner */}
        <section className="layout-pt-md layout-pb-lg">
          <div className="container">
            <div className="row y-gap-30">
              {/*
            <div className="col-xl-3">
              <aside className="sidebar y-gap-40 xl:d-none">
                <Sidebar />
              </aside>

              <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="listingSidebar"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasLabel">
                    Filter Tours
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>

                <div className="offcanvas-body">
                  <aside className="sidebar y-gap-40  xl:d-block">
                    <Sidebar />
                  </aside>
                </div>
              </div>
            </div>
          */}
              <div>
                <TopHeaderFilter />
                <div className="mt-30"></div>
                {/* End mt--30 */}
                <div className="row y-gap-30">
                  <BoatListing />
                </div>
                {/* End .row */}
                <Pagination />
              </div>
              {/* End .col for right content */}
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </section>
        {/* End layout for listing sidebar and content */}
        <Footer />
      </BoatsContext.Provider>
    </>
  );
};

export default BoatListingContainer;
