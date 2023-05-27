class User {
  constructor(obj) {
    obj = obj != null ? obj : {};
    this.authProvider = obj.authProvider != null ? obj.authProvider : "";
    this.name = obj.name != null ? obj.name : "";
    this.firstName = this.getFirstName(obj.name);
    this.lastName = this.getLastName(obj.name);
    this.email = obj.email != null ? obj.email : "";
    this.uid = obj.uid != null ? obj.uid : "";
    this.role = obj.role != null ? obj.role : "";
    this.admin = this.isAdmin(obj.role) ? true : false;
  }

  isAdmin(role) {
    if (role == "admin") {
      return true;
    } else {
      return false;
    }
  }

  getFirstName(name) {
    const words = name.split(" ");
    if (words != null && words[0] != null) {
      return words[0];
    } else {
      return name;
    }
  }

  getLastName(name) {
    const words = name.split(" ");
    if (words != null && words[1] != null) {
      return words[1];
    } else {
      return null;
    }
  }
}

export default User;
