import mongoose from 'mongoose';

export function userSchema(){
    const { Schema } = mongoose;

    const userSchema = new Schema({
    auth0Id: String
    });

    mongoose.model('users', userSchema);
}
