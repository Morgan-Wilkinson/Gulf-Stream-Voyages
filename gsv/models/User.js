class User {
  static authProvider;
  static name;
  static firstName;
  static lastName;
  static email;
  static uid;
  static role;
  static admin;

  static {
    if (typeof window !== "undefined") {
      var obj = localStorage.getItem("users")
        ? JSON.parse(localStorage.getItem("users"))
        : null;

      if (obj != null) {
        this.authProvider = obj.authProvider != null ? obj.authProvider : "";
        this.name = obj.name != null ? obj.name : "";
        this.firstName = User.getFirstName(obj.name);
        this.lastName = User.getLastName(obj.name);
        this.email = obj.email != null ? obj.email : "";
        this.uid = obj.uid != null ? obj.uid : "";
        this.role = obj.role != null ? obj.role : "";
        this.admin = User.isAdmin(obj.role) ? true : false;
      }
    }
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
