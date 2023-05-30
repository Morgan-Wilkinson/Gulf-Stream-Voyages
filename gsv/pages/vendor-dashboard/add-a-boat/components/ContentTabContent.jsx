import BoatContent from "./content/BoatContent";
import BoatPolicy from "./content/BoatPolicy";
import BannerUploader from "./content/BannerUploader";
import FeaturedUploader from "./content/FeaturedUploader";
import GalleryUploader from "./content/GalleryUploader";

const ContentTabContent = () => {
  return (
    <>
      <div className="col-xl-10">
        <div className="text-18 fw-500 mb-10">Boat Content</div>
        <BoatContent />
        {/* End BoatContent */}

        <div className="mt-30">
          <div className="fw-500">Banner Image</div>
          <BannerUploader />
        </div>
        {/* End BannerUploader */}

        <div className="mt-30">
          <div className="fw-500">Gallery</div>
          <GalleryUploader />
        </div>
        {/* End GalleryUploader */}

        <div className="border-top-light mt-30 mb-30" />

        <div className="text-18 fw-500 mb-10">Boat Policy</div>
        <BoatPolicy />
        {/* End BoatPolicy */}

        <div className="mt-30">
          <div className="fw-500">Featured Image</div>
          <FeaturedUploader />
        </div>
        {/* End FeaturedUploader */}

        <div className="d-inline-block pt-30">
          <button className="button h-50 px-24 -dark-1 bg-blue-1 text-white">
            Save Changes <div className="icon-arrow-top-right ml-15" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ContentTabContent;
