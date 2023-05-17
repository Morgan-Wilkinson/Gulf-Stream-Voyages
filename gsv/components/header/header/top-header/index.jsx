import Link from "next/link";
import CurrenctyMegaMenu from "../../CurrenctyMegaMenu";
import ContactInfo from "./ContactInfo";
import LanguageMegaMenu from "../../LanguageMegaMenu";

const HeaderBanner = () => {
  return (
    <section className="header-banner py-5 bg-blue-1">
      <div className="container">
        <div className="row items-center justify-between">
          <div className="col-auto">
            <ContactInfo />
            {/* End .row */}
          </div>
          {/* End .col */}

          <div className="col-auto">
            <div className="row x-gap-15 items-center jusify-between">
              <div className="col-auto">
                <div className="w-1 h-20 bg-white-20" />
              </div>
              <div className="col-auto">
                <Link href="/login" className="text-12 text-white">
                  Sign In
                </Link>
                <Link href="/signup" className="text-12 text-white">
                  Sign In
                </Link>
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
  );
};

export default HeaderBanner;
