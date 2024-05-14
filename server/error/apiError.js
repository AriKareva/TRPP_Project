class ApiError extends Error{
    constructor(status, message){
        super()
        this.status = status
        this.message = message
    }

    static failRequest(message){
        return new ApiError(404, message)
    }

    static serverError(message){
        return new apiError(500, message)
    }

    static forbidden(message){
        return new apiError(403, message)
    }

    
}

module.exports = ApiError