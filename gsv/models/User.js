class User {
  static obj =
    typeof window !== "undefined" && localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : null;
  static authProvider =
    this.obj != null && this.obj.authProvider != null
      ? this.obj.authProvider
      : "";
  static name = this.obj != null && this.obj.name != null ? this.obj.name : "";
  static firstName = this.obj != null ? User.getFirstName(this.obj.name) : "";
  static lastName = this.obj != null ? User.getLastName(this.obj.name) : "";
  static email =
    this.obj != null && this.obj.email != null ? this.obj.email : "";
  static uid = this.obj != null && this.obj.uid != null ? this.obj.uid : "";
  static role = this.obj != null && this.obj.role != null ? this.obj.role : "";
  static admin = this.obj != null && User.isAdmin(this.obj.role) ? true : false;

  static updateUser(obj) {
    this.authProvider =
      obj != null && obj.authProvider != null ? obj.authProvider : "";
    this.name = obj != null && obj.name != null ? obj.name : "";
    this.firstName = obj != null ? User.getFirstName(obj.name) : "";
    this.lastName = obj != null ? User.getLastName(obj.name) : "";
    this.email = obj != null && obj.email != null ? obj.email : "";
    this.uid = obj != null && obj.uid != null ? obj.uid : "";
    this.role = obj != null && obj.role != null ? obj.role : "";
    this.admin = obj != null && User.isAdmin(obj.role) ? true : false;
  }

  static isAdmin(role) {
    if (role != null && role == "admin") {
      return true;
    } else {
      return false;
    }
  }

  static getFirstName(name) {
    if (name != null) {
      const words = name.split(" ");
      if (words != null && words[0] != null) {
        return words[0];
      } else {
        return name;
      }
    }
  }

  static getLastName(name) {
    if (name != null) {
      const words = name.split(" ");
      if (words != null && words[1] != null) {
        return words[1];
      } else {
        return null;
      }
    }
  }
}

export default User;
