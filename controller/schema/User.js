const User = {
    type: 'object',
    properties: {
        first_name: {
            type: 'string',
        },
        last_name: {
            type: 'string'
        }
    }
}

const addNewUserSchema = {
    body: {
        type: 'object',
        properties: {
            first_name: {
                type: 'string',
            },
            last_name: {
                type: 'string'
            }
        }
    },
    required: ["first_name", "last_name"]
}

const getAllUserSchema = {
    schema: {
        response: {
            200: {
                type: 'array',
                users: User
            }
        }
    }
}

module.exports = {
    addNewUserSchema,
    getAllUserSchema
}