class Review {
  // Form Fields
  title = "";
  email = "";
  content = "";
  staff = 0;
  cleanliness = 0;
  comfort = 0;
  facilities = 0;
  overallRating = Review.CalculateOverall();

  clearFields() {
    title = "";
    email = "";
    content = "";
    staff = 0;
    cleanliness = 0;
    comfort = 0;
    facilities = 0;
    overallRating = 0;
  }

  static CalculateOverall() {
    let additionValue =
      this.staff + this.cleanliness + this.comfort + this.facilities;
    this.overallRating = additionValue == 0 ? 0 : additionValue / 4;
  }
}

export default Review;
