"use client";
import { db } from "../../../../firebase/app";
import { collection, doc, setDoc } from "firebase/firestore";
import { createContext } from "react";
import Boat from "../../../../models/Boat";
import BoatContent from "./content/BoatContent";
import BoatPolicy from "./content/BoatPolicy";
import BannerUploader from "./content/BannerUploader";
import FeaturedUploader from "./content/FeaturedUploader";
import GalleryUploader from "./content/GalleryUploader";

export const BoatContext = createContext();
const boat = new Boat();
const errorCodeMessage = new Map([
  [
    "auth/account-exists-with-different-credential",
    "There is already an Account associated with this credential",
  ],
  ["auth/email-already-in-use", "Email already in use"],
  ["auth/invalid-email", "Invalid email"],
  ["auth/operation-not-allowed", "Sign up method currently not supported"],
  ["auth/weak-password", "Weak password"],
  [
    "auth/user-disabled",
    "User currently disabled please contact technical support at admin@gulfstreamvoyages.com",
  ],
  ["auth/user-not-found", "User not found"],
  ["auth/wrong-password", "Incorrect password"],
  ["auth/invalid-verification-code", "Invalid Verification Code"],
  ["auth/invalid-verification-id", "Invalid Verification Id"],
  ["auth/invalid-credential", "Expired credentials"],
  [
    "auth/too-many-requests",
    "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.",
  ],
  [
    "permission-denied",
    "This user does not have the correct permissions to preform this action.",
  ],
]);
var success = "";

const SetBoatData = async () => {
  const { ...data } = boat;
  console.log(data);
  const boatsRef = collection(db, "boats");

  const currentDoc = doc(boatsRef);
  await setDoc(currentDoc, data)
    .then(() => {
      alert(data.name + " saved!");
      success = data.name + " saved!";
      boat.clearFields();
    })
    .catch((err) => {
      console.log(err);
      const error = errorCodeMessage.get(err.code);
      alert(error != "undefined" && error != null ? error : err.message);
    });
};

const ContentTabContent = () => {
  success = "";
  return (
    <>
      <BoatContext.Provider value={boat}>
        <div className="col-xl-10">
          <div className="text-18 fw-500 mb-10">Boat Content</div>
          <BoatContent />
          {/* End BoatContent */}

          <div className="mt-30">
            <div className="fw-500">Featured Image</div>
            <FeaturedUploader />
          </div>

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

          {/* End FeaturedUploader */}
          {success != "" && (
            <div class="alert alert-success" role="alert">
              {success}
            </div>
          )}

          <div className="d-inline-block pt-30">
            <button
              className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
              onClick={SetBoatData}
            >
              Save Boat <div className="icon-arrow-top-right ml-15" />
            </button>
          </div>
        </div>
      </BoatContext.Provider>
    </>
  );
};

export default ContentTabContent;
