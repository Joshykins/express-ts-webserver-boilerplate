import { RegisterDtoReq } from "../data/transferObjects/dto.auth"

//Auth Service
export const RegisterUser = async (registerRequest : RegisterDtoReq) => {
    
    const validRequest = validateRegisterRequest(registerRequest)
    
    if(!validRequest) {

    }
    //Encrypt Password

}

const validateRegisterRequest = (registerRequest : RegisterDtoReq) : boolean => {
    //Everything filled
    if(!registerRequest.email || !registerRequest.password || !registerRequest.displayName) {
        return false;
    }

    //Emails
    //Basic regex for emails
    let emailReg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if(!emailReg.test(registerRequest.email)) {
        return false;
    }

    //Display Name
    //Only letters
    var nameReg = /[^a-zA-Z0-9]/g;
    if(!nameReg.test(registerRequest.displayName)) {
        return false;
    }

    //check password meets requirements
    if(registerRequest.password.length <  10) {
        return false;
    }

    return true;
}

export const AuthenticateLogIn = async () => {
    //Decrypt Password
}

export const AuthenticateRequest = async () => {

}