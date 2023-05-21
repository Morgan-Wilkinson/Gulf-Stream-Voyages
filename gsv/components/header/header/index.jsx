import Link from "next/link";
import { useEffect, useState } from "react";
import MainMenu from "../MainMenu";
import MobileMenu from "../MobileMenu";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

function LoginButtons() {
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);

  const logout = async (event) => {
    console.log("Logging out");
    auth.signOut();
  };
  if (user) {
    console.log(user);
    return (
      <div>
        <div className="d-flex items-center ml-20 is-menu-opened-hide md:d-none">
          <button
            type="submit"
            className="button px-30 fw-400 text-14 -blue-1 bg-blue-1 h-50 text-white"
            onClick={logout}
          >
            Logout
          </button>
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
}

const Header = () => {
  const auth = getAuth();
  const [user, loading, error] = useAuthState(auth);

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const userLoginButton = () => {};
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

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

export default Header;
