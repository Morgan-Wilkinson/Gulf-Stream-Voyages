import dynamic from "next/dynamic";
import CallToActions from "../components/common/CallToActions";
import Seo from "../components/common/Seo";
import Header from "../components/header/header";
import Footer from "../components/footer";

const UiElements = () => {
  return (
    <>
      <Seo pageTitle="Ui Elements" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header />
      {/* End Header 1 */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <Footer />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(UiElements), { ssr: false });
