import dynamic from "next/dynamic";
import CallToActions from "../components/common/CallToActions";
import Seo from "../components/common/Seo";
import Header from "../components/header/header";
import Footer from "../components/footer";
import NotFound from "../components/common/NotFound";

const index = () => {
  return (
    <>
      <Seo pageTitle="404" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header />
      {/* End Header 1 */}

      <NotFound />
      {/* End 404 section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <Footer />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
