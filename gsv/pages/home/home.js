import dynamic from "next/dynamic";
import Seo from "../../components/common/Seo";
import Footer from "../../components/footer";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Testimonial from "../../components/home/home/Testimonial";
import Link from "next/link";
import AboutIntro from "../../components/home/home/AboutIntro";
import WhyChoose from "../../components/home/home/WhyChoose";
import Cruise from "../../components/cruise/Cruise1";
import SearchBoxContent from "../../components/hero/hero/SearchBoxContent";

const Home = () => {
  return (
    <>
      <Seo pageTitle="Home" />
      {/* End Page Title */}

      <Header />
      {/* End Header top Banner */}

      <div
        className="offcanvas offcanvas-top vh-100"
        tabIndex={-1}
        id="offcanvasTop2"
        aria-labelledby="offcanvasTopLabel"
        style={{ zIndex: 1200 }}
      >
        <div className="offcanvas-header position-absolute top-0 end-0">
          <button
            type="button"
            className="btn-close text-reset "
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        {/* End header */}
        <SearchBoxContent />
      </div>
      {/* End searchBar Offcanvas Popup */}

      <Header />
      {/* End Header 9 */}

      <Hero />
      {/* End Hero 9 */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Featured Voyages</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Placeholder Text
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="/cruise/cruise-list-v2"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More Voyages
                <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20">
            <Cruise />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Features Cruise Deals Sections */}

      <AboutIntro />
      {/* About Intro Cruise  Sections */}

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-4 col-lg-5">
              <h2 className="text-30 fw-600">Why Choose Us</h2>
              <p className="mt-5">
                These popular destinations have a lot to offer
              </p>
              <p className="text-dark-1 mt-40 sm:mt-20">Placeholder Text.</p>
              <div className="d-inline-block mt-40 sm:mt-20">
                <a
                  href="/cruises"
                  className="button -md -blue-1 bg-yellow-1 text-dark-1"
                >
                  Learn More <div className="icon-arrow-top-right ml-15" />
                </a>
              </div>
            </div>
            {/* End .col */}

            <div className="col-xl-6 offset-xl-1 col-lg-7">
              <div className="row y-gap-60">
                <WhyChoose />
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Why Choose  Sections */}

      <section className="section-bg layout-pt-lg layout-pb-lg bg-light-2">
        <div className="section-bg__item col-12">
          <img src="/img/backgrounds/11.png" alt="image" />
        </div>
        {/* End section bg */}

        <div className="container">
          <div className="row justify-center pt-50 md:pt-30">
            <div className="col-xl-7 col-lg-10">
              <div className="overflow-hidden">
                <Testimonial />
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .contaienr */}
      </section>
      {/* End testimonial section */}

      <Footer />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
