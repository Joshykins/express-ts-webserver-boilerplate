import { Collection, Db, MongoClient, ObjectId } from 'mongodb';
import { EnvVariables } from '../../config/config.server';
import { mongoClient } from '../connection/data.connect';


export interface User {
    _id?: ObjectId;
    displayName: string;
    email: string;
    password: string;
    created: Date;
}


export const Users = async () : Promise<Collection<User>> => {    
    return mongoClient.db().collection<User>("Users");
}
