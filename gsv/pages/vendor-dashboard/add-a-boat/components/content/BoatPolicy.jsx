import React, { useState, useEffect } from "react";

const BoatPolicy = () => {
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
  };

  return (
    <>
      <div className="row x-gap-20 y-gap-20">
        <div className="col-12">
          <div className="form-input ">
            <input type="text" required />
            <label className="lh-1 text-16 text-light-1">
              Boat rating standard
            </label>
          </div>
        </div>
      </div>
      {/* End boat rating standard */}

      <div className="mt-20">
        <div className="fw-500 mb-20">Policy</div>
        <div className="overflow-scroll scroll-bar-1">
          <table className="table-5 -border-bottom col-12">
            <thead className="bg-light-2">
              <tr>
                <th>Policy</th>
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
