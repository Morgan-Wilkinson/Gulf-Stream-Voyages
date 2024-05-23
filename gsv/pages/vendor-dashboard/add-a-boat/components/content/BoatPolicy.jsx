import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { BoatContext } from "../ContentTabContent";

const BoatPolicy = () => {
  const boat = useContext(BoatContext);
  const [error, setError] = useState("");
  const [policies, setPolicies] = useState(2);
  const [questionPolicyList, setQuestionPolicyList] = useState(["", ""]);

  function AddItem() {
    setQuestionPolicyList((questionPolicyList) => [...questionPolicyList, ""]);
    setPolicies(policies + 1);
  }

  const DeleteItem = (index) => (e) => {
    if (questionPolicyList.length > 1) {
      let tempArray = new Array();
      for (let i = 0; i < questionPolicyList.length; i++) {
        if (i == index) continue;
        tempArray.push(questionPolicyList[i]);
      }

      setQuestionPolicyList(tempArray);
      boat.policyArray = tempArray;
    } else {
      alert("Minimum of at least 1 policy is required.");
    }
  };

  const UpdatePolicy = (index) => (e) => {
    let tempArray = [...questionPolicyList];
    let newElement = tempArray[index];
    newElement = e.target.value;
    tempArray[index] = newElement;

    setQuestionPolicyList(tempArray);
    boat.policyArray = tempArray;
  };

  function SaveBoat() {}

  return (
    <>
      <div className="mt-20">
        <div className="overflow-scroll scroll-bar-1">
          <table className="table-5 -border-bottom col-12">
            <thead className="bg-light-2">
              <tr>
                <th>Policy List</th>
                <th />
              </tr>
            </thead>
            {/* End thead */}

            <tbody>
              {questionPolicyList.map((element, index) => (
                <tr key={index}>
                  <td className="col-11">
                    <div className="form-input ">
                      <input
                        type="text"
                        required
                        value={element}
                        onChange={UpdatePolicy(index)}
                      />
                      <label className="lh-1 text-16 text-light-1">
                        Policy
                      </label>
                    </div>
                  </td>
                  {/* End td */}

                  <td className="col-1">
                    <button
                      className="flex-center bg-light-2 rounded-4 size-35"
                      onClick={DeleteItem(index)}
                    >
                      <i className="icon-trash-2 text-16 text-light-1" />
                    </button>
                  </td>
                  {/* End td */}
                </tr>
              ))}

              {/* End tr */}
            </tbody>
          </table>
        </div>
        {/* End overflow */}

        <div className="d-flex justify-end">
          <button
            className="button -md -blue-1 bg-blue-1-05 text-blue-1 mt-20"
            onClick={AddItem}
          >
            Add Item
          </button>
        </div>
      </div>
      {/* End policy */}
    </>
  );
};

export default BoatPolicy;
