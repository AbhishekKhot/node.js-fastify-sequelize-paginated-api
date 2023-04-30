const {
    AddNewUserHandler,
    GetAllUserHandler
} = require('../controller/handler/User')

const {
    addNewUserSchema,
    getAllUserSchema
} = require('../controller/schema/User')

module.exports = (fastify, options, done) => {
    fastify.get('/users/:limit/:offset', {
        schema: getAllUserSchema,
        handler: GetAllUserHandler
    })

    fastify.post('/addUser', {
        schema: addNewUserSchema,
        handler: AddNewUserHandler
    })

    done();
}