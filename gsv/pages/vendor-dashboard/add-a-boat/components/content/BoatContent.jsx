import { useContext, useState } from "react";
import { BoatContext } from "../ContentTabContent";

const BoatContent = () => {
  const boat = useContext(BoatContext);

  const setName = (name) => {
    boat.name = name;
  };

  const setBoatType = (type) => {
    boat.type = type;
  };

  const setDescription = (description) => {
    boat.description = description;
  };

  const setYoutubeLink = (youtubeLink) => {
    boat.youtubeLink = youtubeLink;
  };

  return (
    <div className="row x-gap-20 y-gap-20">
      <div className="col-12">
        <div className="form-input ">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label className="lh-1 text-16 text-light-1">Boat Name</label>
        </div>
      </div>
      {/* End Name */}

      <div className="col-12">
        <div className="form-input ">
          <input
            type="text"
            onChange={(e) => setBoatType(e.target.value)}
            required
          />
          <label className="lh-1 text-16 text-light-1">Boat's Type</label>
        </div>
      </div>
      {/* End Content */}
      <div className="col-12">
        <div className="form-input ">
          <textarea
            required
            rows={5}
            defaultValue={""}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label className="lh-1 text-16 text-light-1">Boats Description</label>
        </div>
      </div>
      {/* End Content */}

      <div className="col-12">
        <div className="form-input ">
          <input
            type="url"
            onChange={(e) => setYoutubeLink(e.target.value)}
            required
          />
          <label className="lh-1 text-16 text-light-1">Youtube Video</label>
        </div>
      </div>
      {/* End youtube Video */}
    </div>
  );
};

export default BoatContent;
