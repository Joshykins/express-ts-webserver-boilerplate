import { model, Schema, Model, Document } from 'mongoose';

export interface IUser extends Document {
    id: string;
    displayName: string;
    email: string;
    password: string;
    created: Date;
}

const UserSchema : Schema = new Schema({
    id: { type: String, required: true, unique: true },
    displayName: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    created: { type: Date }
})

export const User : Model<IUser> = model('Users', UserSchema);