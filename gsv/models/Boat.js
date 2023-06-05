class Boat {
  // Form Fields
  name;
  description;
  youtubeLink;
  bannerImage;
  featuredImage;
  galleryImageArray = new Array();
  policyMap = new Map();

  constructor(obj) {
    obj = obj != null ? obj : {};
  }
}

export default Boat;
