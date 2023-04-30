const db = require('../models')
const { NotFoundError } = require('../lib/serverErrors')

class UserService {
    async getAllUsers() {
        return db.User.findAll()
    }

    async addNewUser(body) {
        return db.User.create(body)
    }
}

module.exports = new UserService()