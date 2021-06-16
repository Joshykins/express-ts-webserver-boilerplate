import { Db, MongoClient } from "mongodb";
import { Log, LogLevels } from '../../util/logger';
import { EnvVariables } from '../../config/config.server';

let dbClient : Db; 

let mongoClient : MongoClient;

export const ValidateDatabaseConnection = async():Promise<boolean> => {
    try {
        if(!EnvVariables.DBConnectionString) {
            Log("NO CONNECTION STRING GIVEN :(", LogLevels.ERROR);
            return false;
        }
        mongoClient = new MongoClient(
        EnvVariables.DBConnectionString, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        mongoClient = await mongoClient.connect();

        return true
    }
    catch(err) {
        Log(err, LogLevels.ERROR);
        return false;
    }
}

export { mongoClient };