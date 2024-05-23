import { useContext } from "react";
import { NewReviewContext } from "../[name]";
const ReplyForm = () => {
  const newReviewContext = useContext(NewReviewContext);

  const setTitle = (title) => {
    newReviewContext.title = title;
  };

  const setContent = (content) => {
    newReviewContext.content = content;
  };

  return (
    <form className="row y-gap-30 pt-20">
      <div className="col-xl-6">
        <div className="form-input ">
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label className="lh-1 text-16 text-light-1">Title</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-xl-6">
        <div className="form-input ">
          <input type="text" value={newReviewContext.email} required disabled />
          <label className="lh-1 text-16 text-light-1">Email</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <textarea
            required
            rows={4}
            defaultValue={""}
            onChange={(e) => setContent(e.target.value)}
          />
          <label className="lh-1 text-16 text-light-1">
            Write Your Comment
          </label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-auto">
        <button
          type="submit"
          className="button -md -dark-1 bg-blue-1 text-white"
        >
          Post Comment <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
      {/* End .col */}
    </form>
  );
};

export default ReplyForm;
