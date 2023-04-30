const db = require('../models')
const { NotFoundError } = require('../lib/serverErrors')

class UserService {
    async getAllUsers(params,) {
        const pageNo = parseInt(params.pageNo, 10)
        const limit = 5
        const offset = (pageNo - 1) * limit
        const total = await db.User.count()
        const users = await db.User.findAll({ limit: limit, offset: offset })
        return { total, users }
    }

    async addNewUser(body) {
        return db.User.create(body)
    }
}

module.exports = new UserService()