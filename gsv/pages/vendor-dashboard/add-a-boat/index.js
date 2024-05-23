"use client";

import dynamic from "next/dynamic";
import Seo from "../../../components/common/Seo";
import Sidebar from "../common/Sidebar";
import Header from "../../../components/header/dashboard-header";
import BoatForm from "./components/index";
import Footer from "../common/Footer";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../pages/_app";

const VendorAddBoat = () => {
  const router = useRouter();
  const userContext = useContext(UserContext);

  if (userContext != null && userContext.admin == true) {
    return (
      <>
        <Seo pageTitle="Vendor Add Boat" />
        {/* End Page Title */}

        <div className="header-margin"></div>

        <Header />
        {/* End dashboard-header */}

        <div className="dashboard">
          <div className="dashboard__sidebar bg-white scroll-bar-1">
            <Sidebar />
            {/* End sidebar */}
          </div>
          {/* End dashboard__sidebar */}

          <div className="dashboard__main">
            <div className="dashboard__content bg-light-2">
              <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
                <div className="col-12">
                  <h1 className="text-30 lh-14 fw-600">Add a Boat</h1>
                  <div className="text-15 text-light-1">
                    Fill out the following form to add a new boat to the
                    website.
                  </div>
                </div>
                {/* End .col-12 */}
              </div>
              {/* End .row */}

              <div className="py-30 px-30 rounded-4 bg-white shadow-3">
                <BoatForm />
              </div>

              <Footer />
            </div>
            {/* End .dashboard__content */}
          </div>
          {/* End dashbaord content */}
        </div>
        {/* End dashbaord content */}
      </>
    );
  } else if (typeof window !== "undefined") {
    return router.push("/404");
  }
};

export default dynamic(() => Promise.resolve(VendorAddBoat), { ssr: false });
