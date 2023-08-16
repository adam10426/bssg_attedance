class UserNotFound extends Error { 
    constructor(message) { 
        super(message)
        this.name = 'UserNotFound'
        this.status = 404
    }
}




module.exports = {
    UserNotFound,
}