class Boat {
  // Form Fields
  name = "";
  type = "";
  description = "";
  youtubeLink = "";
  bannerImages = new Array();
  featuredImages = new Array();
  galleryImages = new Array();
  policyArray = new Array();
  numberOfReviews = 0;
  ratings = 0;

  clearFields() {
    this.name = "";
    this.type = "";
    this.description = "";
    this.youtubeLink = "";
    this.bannerImages = new Array();
    this.featuredImages = new Array();
    this.galleryImages = new Array();
    this.policyArray = new Array();
    this.numberOfReviews = 0;
    this.ratings = 0;
  }
}

export default Boat;
