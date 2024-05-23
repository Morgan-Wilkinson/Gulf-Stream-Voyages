import Link from "next/link";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import MainMenu from "../MainMenu";
import MobileMenu from "../MobileMenu";
import { useContext } from "react";
import { UserContext } from "../../../pages/_app";
import { BoatListContext } from "../../../pages/_app";
import LogoutAndRedirect from "../../../components/common/LogoutAndRedirect";
import getAllData from "../../../firebase/firestore/getAllData";

const LoginButtons = () => {
  const userContext = useContext(UserContext);
  if (userContext != null && userContext.admin == true) {
    return (
      <div>
        <div className="d-flex items-center ml-20 is-menu-opened-hide md:d-none">
          <p className="px-10">Welcome {userContext.name}</p>
          <LogoutAndRedirect></LogoutAndRedirect>
        </div>
      </div>
    );
  } else {
    return (
      <div className="d-flex items-center ml-20 is-menu-opened-hide md:d-none">
        <div>
          <Link
            href="/login"
            className="button px-30 fw-400 text-14 -blue-1 bg-blue-1 h-50 text-white"
          >
            Sign In
          </Link>
        </div>
        <div className="d-flex items-center ml-20 is-menu-opened-hide md:d-none">
          <Link
            href="signup"
            className="button px-30 fw-400 text-14 -blue-1 bg-blue-1 h-50 text-white"
          >
            Register
          </Link>
        </div>
      </div>
    );
  }
};

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const userContext = useContext(UserContext);
  const boatListingContext = useContext(BoatListContext);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  useEffect(() => {
    async function fetchBoatData() {
      const res = await getAllData("boats");
      if (res != null) {
        boatListingContext.updateBoatList(res);
      }
    }

    if (
      boatListingContext == null ||
      boatListingContext.obj == null ||
      boatListingContext.boatList == null ||
      boatListingContext.boatList.length == 0
    ) {
      const obj = localStorage.getItem("boats")
        ? JSON.parse(localStorage.getItem("boats"))
        : null;

      if (obj == null) {
        fetchBoatData();
      } else if (obj != null) {
        boatListingContext.updateBoatList(obj);
      }
    }
  }, [boatListingContext]);

  useEffect(() => {
    if (
      userContext == null ||
      userContext.obj == null ||
      userContext.email == ""
    ) {
      const obj = localStorage.getItem("users")
        ? JSON.parse(localStorage.getItem("users"))
        : null;
      if (obj != null) {
        userContext.updateUser(obj);
        if (typeof window !== "undefined") window.location.reload();
      }
    }
  }, [userContext]);

  return (
    <>
      <header className={`header bg-white ${navbar ? "is-sticky" : ""}`}>
        <div className="header__container px-30 sm:px-20">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="d-flex items-center">
                <Link href="/" className="header-logo mr-20">
                  <img src="/img/general/logo-light.svg" alt="logo icon" />
                </Link>
                {/* End logo */}

                <div className="header-menu">
                  <div className="header-menu__content">
                    <MainMenu style="text-dark-1" />
                  </div>
                </div>
                {/* End header-menu */}
              </div>
              {/* End d-flex */}
            </div>
            {/* End col */}

            <div className="col-auto">
              <div className="d-flex items-center">
                {/* Start btn-group */}
                <LoginButtons></LoginButtons>
                {/* End btn-group */}
                {/* Start mobile menu icon */}
                <div className="d-none xl:d-flex x-gap-20 items-center pl-30 text-dark-1">
                  <div>
                    <Link
                      href="/login"
                      className="d-flex items-center icon-user text-inherit text-22"
                    />
                  </div>
                  <div>
                    <button
                      className="d-flex items-center icon-menu text-inherit text-20"
                      data-bs-toggle="offcanvas"
                      aria-controls="mobile-sidebar_menu"
                      data-bs-target="#mobile-sidebar_menu"
                    />

                    <div
                      className="offcanvas offcanvas-start  mobile_menu-contnet"
                      tabIndex="-1"
                      id="mobile-sidebar_menu"
                      aria-labelledby="offcanvasMenuLabel"
                      data-bs-scroll="true"
                    >
                      <MobileMenu />
                      {/* End MobileMenu */}
                    </div>
                  </div>
                </div>
                {/* End mobile menu icon */}
              </div>
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End header_container */}
      </header>
      {/* End Header */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
