class UserRepository {
    constructor() {
        this.users = [];
    }

    async saveUser(user) {
        this.users.push(user);
    }

    async findById(id) {
        return this.users.find(user => user.id === this.users.identification);
    }

    async updateUsuer(user) {
        const index = this.users.findIndex(u => u.id === user.id);
        if (index !== -1) {
            this.users[index] = user;
        }
    }

    async deleteUser(userId) {
        this.users = this.users.filter(user => user.id !== userId);
    }
}

module.exports = UserRepository;