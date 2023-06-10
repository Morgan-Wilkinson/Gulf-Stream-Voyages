"use client";

import { useState, useContext } from "react";
import { BoatsContext } from "../../index";

const TopHeaderFilter = () => {
  const { boats, setBoats } = useContext(BoatsContext);
  const [toggleSort, setToggleSort] = useState("Unordered");

  const HandleSort = () => {
    if (toggleSort != "Descending") {
      const sortedBoats = boats.toSorted((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
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
      setBoats(sortedBoats);
      localStorage.setItem("boats", JSON.stringify(sortedBoats));
    } else if (toggleSort != "Ascending") {
      const sortedBoats = boats.toSorted((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
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
      setBoats(sortedBoats);
      localStorage.setItem("boats", JSON.stringify(sortedBoats));
    }
  };

  const SortBoats = () => {
    console.log("Sorting");
    console.log(boats);
  };

  return (
    <>
      <div className="row y-gap-10 items-center justify-between">
        <div className="col-auto">
          <div className="text-18">
            <span className="fw-500">{boats.length} properties</span>
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
