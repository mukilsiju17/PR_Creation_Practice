import mongoose, { Schema, model } from 'mongoose';

const Users = new Schema({
    Id: {
        type: String, 
        required: true, 
        unique: true,
        index: true
    },
    Name : {
        type: String, 
        required: true
    },
    Email : { 
        type: String, 
        required: true, 
        unique: true,
        index: true
    },
    Phone : {   
        type: String, 
        required: true, 
        unique: true,
        index: true
    },
    Role : {
        type: String,
        required: true,
        enum: ['Admin', 'User'],
        default: 'User'
    },
    Password : {
        type: String, 
        required: true
    },
},{
    timestamps: true
});  
   
export const UserModel = model("UserModel", Users, "User_details"); 