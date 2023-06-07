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

  clearFields() {
    this.name = "";
    this.type = "";
    this.description = "";
    this.youtubeLink = "";
    this.bannerImages = new Array();
    this.featuredImages = new Array();
    this.galleryImages = new Array();
    this.policyArray = new Array();
  }
}

export default Boat;
