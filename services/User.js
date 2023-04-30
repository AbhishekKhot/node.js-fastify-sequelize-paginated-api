const db = require('../models')
const { NotFoundError } = require('../lib/serverErrors')

class UserService {
    async getAllUsers(params,) {
        const limit = parseInt(params.limit)
        const offset = parseInt(params.offset)
        return db.User.findAll({
            limit: limit,
            offset: offset
        })
    }

    async addNewUser(body) {
        return db.User.create(body)
    }
}

module.exports = new UserService()