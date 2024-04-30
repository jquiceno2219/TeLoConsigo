// User defines the atributtes / parameters of User.

class User {
    constructor(name, identification, address, phone, email, userType) {
        this.name = name;
        this.identification = identification;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.userType = userType;
    }
}

module.exports = User;