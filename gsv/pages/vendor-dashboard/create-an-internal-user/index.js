import React, { useState, useEffect } from "react";
import Seo from "../../../components/common/Seo";
import Sidebar from "../common/Sidebar";
import Header from "../../../components/header/dashboard-header";
import Footer from "../common/Footer";
import InternalUserForm from "./components/InternalUserForm";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { UserContext } from "../../_app";

export default function InternalUserCreationForm() {
  const router = useRouter();
  const userContext = useContext(UserContext);

  if (userContext != null && userContext.admin == true) {
    return (
      <>
        <Seo pageTitle="Vendor Add Create An Internal User" />
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
                  <h1 className="text-30 lh-14 fw-600">
                    Create a New Internal User
                  </h1>
                  <div className="text-15 text-light-1">
                    Fill out the following form to create a new user and email
                    them a password reset.
                  </div>
                </div>
                {/* End .col-12 */}
              </div>
              {/* End .row */}

              <div className="py-30 px-30 rounded-4 bg-white shadow-3">
                <InternalUserForm />
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
}
