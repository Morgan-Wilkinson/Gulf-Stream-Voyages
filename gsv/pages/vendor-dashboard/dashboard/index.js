"use client";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import Seo from "../../../components/common/Seo";
import DashboardCard from "./components/DashboardCard";
import Sidebar from "../common/Sidebar";
import Header from "../../../components/header/dashboard-header";
import ChartSelect from "./components/ChartSelect";
import ChartMain from "./components/ChartMain";
import Link from "next/link";
import RecentBooking from "./components/RecentBooking";
import Footer from "../common/Footer";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { UserContext } from "../../_app";

const VendorDashboard = () => {
  const router = useRouter();
  const userContext = useContext(UserContext);
  console.log(userContext);
  if (userContext != null && userContext.admin == true) {
    return (
      <>
        <Seo pageTitle="Vendor Dashboard" />
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
                  <h1 className="text-30 lh-14 fw-600">Dashboard</h1>
                  <div className="text-15 text-light-1">
                    Lorem ipsum dolor sit amet, consectetur.
                  </div>
                </div>
                {/* End .col-12 */}
              </div>
              {/* End .row */}

              <DashboardCard />

              <div className="row y-gap-30 pt-20 chart_responsive">
                <div className="col-xl-7 col-md-6">
                  <div className="py-30 px-30 rounded-4 bg-white shadow-3">
                    <div className="d-flex justify-between items-center">
                      <h2 className="text-18 lh-1 fw-500">
                        Earning Statistics
                      </h2>
                      <ChartSelect />
                    </div>
                    {/* End .d-flex */}

                    <div className="pt-30">
                      <ChartMain />
                    </div>
                  </div>
                </div>
                {/* End .col */}

                <div className="col-xl-5 col-md-6">
                  <div className="py-30 px-30 rounded-4 bg-white shadow-3">
                    <div className="d-flex justify-between items-center">
                      <h2 className="text-18 lh-1 fw-500">Recent Bookings</h2>
                      <div>
                        <Link
                          href="#"
                          className="text-14 text-blue-1 fw-500 underline"
                        >
                          View All
                        </Link>
                      </div>
                    </div>
                    {/* End d-flex */}

                    <RecentBooking />
                  </div>
                  {/* End py-30 */}
                </div>
                {/* End .col */}
              </div>
              {/* End .row */}

              <Footer />
            </div>
            {/* End .dashboard__content */}
          </div>
          {/* End dashboard content */}
        </div>
        {/* End dashboard content */}
      </>
    );
  } else if (typeof window !== "undefined") {
    return router.push("/404");
  }
};

export default dynamic(() => Promise.resolve(VendorDashboard), { ssr: false });
