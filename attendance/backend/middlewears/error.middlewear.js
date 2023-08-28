const {UserNotFound}  = require('../utils/error.util')
const errorHandler = (err, req, res, next) => { 
    
    let statusCode = 500;
    let message = 'Internal Server Error'
    
    switch (err) { 
        case err instanceof UserNotFound:
            statusCode = err.status;
            message = err.message;
            break;
        case err instanceof Error:
            message = err.message
            break;
        default:
            message = err;
            break;

    }

    res.status(statusCode).send(message)
    return next(err)
    
    
}

module.exports = {
    errorHandler
}