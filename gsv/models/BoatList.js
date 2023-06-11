class BoatList {
  static obj =
    typeof window !== "undefined" && localStorage.getItem("boats")
      ? JSON.parse(localStorage.getItem("boats"))
      : null;
  static boatList = this.obj != null ? this.obj : new Array();

  static updateBoatList(obj) {
    this.boatList = obj != null ? obj : new Array();
  }
}

export default BoatList;
