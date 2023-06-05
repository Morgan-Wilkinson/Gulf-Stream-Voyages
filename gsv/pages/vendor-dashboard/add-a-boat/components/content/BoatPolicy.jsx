import React, { useState, useEffect } from "react";

const BoatPolicyQuestions = () => {
  const [policyQuestion, setPolicyQuestion] = useState("");
  const [policyAnswer, setPolicyAnswer] = useState("");

  return (
    <>
      <tr>
        <td className="col-5">
          <div className="form-input ">
            <input
              type="text"
              onChange={(event) => setPolicyQuestion(event.target.value)}
              required
            />
            <label className="lh-1 text-16 text-light-1">Question?</label>
          </div>
        </td>
        {/* End td */}

        <td className="col-7">
          <div className="form-input ">
            <input
              type="text"
              onChange={(event) => setPolicyAnswer(event.target.value)}
              required
            />
            <label className="lh-1 text-16 text-light-1">Answer!</label>
          </div>
        </td>
        {/* End td */}
      </tr>
    </>
  );
};

const BoatPolicy = () => {
  const [error, setError] = useState("");
  const [policyQuestionList, setPolicyQuestionList] = useState([
    BoatPolicyQuestions(),
  ]);

  function AddItem() {
    setPolicyQuestionList((policyQuestionList) => [
      ...policyQuestionList,
      BoatPolicyQuestions(),
    ]);
    console.log("Pushed New Size = " + policyQuestionList.length);
  }

  function DeleteItem(element) {
    console.log(policyQuestionList.length);
    if (policyQuestionList.length > 1) {
      setPolicyQuestionList((policyQuestionList) =>
        policyQuestionList.filter((element) => element !== element)
      );
    } else {
      setError("Minimum of at least 1 policy is required.");
      alert(error);
    }
  }

  // function UpdateQuestion(item) {
  //   console.log(item);
  //   // console.log(event.target);
  //   // setQuestionPolicyMap((questionPolicyMap) =>
  //   //   questionPolicyMap.filter((element) => element.id !== id)
  //   // );
  // }

  // function UpdateAnswer(id) {}
  return (
    <>
      <div className="mt-20">
        <div className="fw-500 mb-20">Policy</div>
        <div className="overflow-scroll scroll-bar-1">
          <table className="table-5 -border-bottom col-12">
            <thead className="bg-light-2">
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th />
              </tr>
            </thead>
            {/* End thead */}

            <tbody>
              {policyQuestionList.length > 0 &&
                policyQuestionList.map((element) => (
                  <div key={element}>
                    {element}
                    <td className="col-auto">
                      <button
                        className="flex-center bg-light-2 rounded-4 size-35"
                        onClick={DeleteItem.bind(this, element)}
                      >
                        <i className="icon-trash-2 text-16 text-light-1" />
                      </button>
                    </td>
                  </div>
                ))}
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
