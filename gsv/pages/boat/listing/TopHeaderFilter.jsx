"use client";

import { useState, useContext } from "react";
import { BoatListContext } from "../../_app";

const TopHeaderFilter = () => {
  const boatListingContext = useContext(BoatListContext);
  const [toggleSort, setToggleSort] = useState("Unordered");

  if (
    boatListingContext == null ||
    boatListingContext.boatList == null ||
    boatListingContext.boatList.length == 0
  ) {
    return;
  }

  const HandleSort = () => {
    if (toggleSort != "Descending") {
      const sortedBoats = boatListingContext.boatList.toSorted((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });

      setToggleSort("Descending");
      boatListingContext.updateBoatList(sortedBoats);
      localStorage.setItem("boats", JSON.stringify(sortedBoats));
    } else if (toggleSort != "Ascending") {
      const sortedBoats = boatListingContext.boatList.toSorted((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });

      setToggleSort("Ascending");
      boatListingContext.updateBoatList(sortedBoats);
      localStorage.setItem("boats", JSON.stringify(sortedBoats));
    }
  };

  return (
    <>
      <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="text-18">
            <span className="fw-500">
              {boatListingContext.boatList.length} properties
            </span>
          </div>
        </div>
        {/* End .col */}

        <div className="col-auto">
          <div className="row x-gap-20 y-gap-20">
            <div className="col-auto">
              <button
                className="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1"
                onClick={HandleSort}
              >
                <i className="icon-up-down text-14 mr-10" />
                Sort
              </button>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default TopHeaderFilter;
