import { EnvVariables } from "../config/config.server";

enum LogLevels {
    ERROR,
    DEBUG,
    INFO
}

const Log = (msg : any, level = LogLevels.DEBUG ) => {
    if(EnvVariables.LogLevel >= level) {
        console.log(msg);
    }
}

export { LogLevels, Log }