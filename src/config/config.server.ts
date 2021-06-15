//Enviromental Variables
import * as dotenv from "dotenv";
import { LogLevels } from "../util/logger";

dotenv.config();

let logLevelEnv : string = process.env.LOG_LEVEL || "DEBUG" 
let logLevel : LogLevels;

if(logLevelEnv == "ERROR") {

    console.log( "Log level selected was err" );

    logLevel = LogLevels.ERROR;
}
else if(logLevelEnv == "DEBUG") {
    
console.log( "Log level selected was debug" );
    //always log all
    logLevel = LogLevels.DEBUG;
}
else {
    
console.log( "Log level selected was info" );
    //always log all
    logLevel = LogLevels.INFO;
}




export const EnvVariables = {
    PORT: process.env.PORT || 4000,
    DBConnectionString : process.env.CONNECTION_STRING,
    LogLevel : logLevel
}
