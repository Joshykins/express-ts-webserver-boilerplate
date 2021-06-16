
export interface AuthenticatedDtoRes {
    //Payload

    //JWT
    
}

export interface RegisterDtoReq {
    email: string,
    displayName: string,
    password: string,
}

export interface LoginDtoReq {
    email: string,
    password: string,
}

export interface AuthRequestFailedRes {
    reason : string,
}
