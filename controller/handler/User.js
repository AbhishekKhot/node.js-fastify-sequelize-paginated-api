const HTTPStatus = require("../../lib/HTTPStatus");
const userService = require('../../services/User');

async function AddNewUserHandler(request, reply) {
    await userService.addNewUser(request.body)
    reply.status(HTTPStatus.CREATED.code).send({ message: "New user added successfully" })
}

async function GetAllUserHandler(request, reply) {
    const users = await userService.getAllUsers()
    reply.status(HTTPStatus.OK.code).send({ users })
}

module.exports = {
    AddNewUserHandler,
    GetAllUserHandler
}