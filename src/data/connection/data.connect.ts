import { connect } from "mongoose";
import { Log, LogLevels } from '../../util/logger';
import { EnvVariables } from '../../config/config.server';


export const DataBase = async():Promise<boolean> => {
    try {
        if(!EnvVariables.DBConnectionString) {
            Log("NO CONNECTION STRING GIVEN :(", LogLevels.ERROR);
            return false;
        }
        await connect(
            EnvVariables.DBConnectionString, 
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            });
        return true
    }
    catch(err) {
        Log(err, LogLevels.ERROR);
        return false;
    }
}