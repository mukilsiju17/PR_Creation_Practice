import { UserModel } from "./schema";

interface User {
  Id: string;
  Name: string;
  Email: string;
  Password: string;
  Phone: string;
  Role: string;
  timestamp: Date;
}

export const createUser = async (user: User) => {
  try {
    const newUser = new UserModel(user);
    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    throw new Error(`Error creating user: ${error}`);
  }
};

export const fetchAllusers = async () => {
  try {
    const users = await UserModel.find({});
    return users;
  } catch (error) {
    throw new Error(`Error fetching users: ${error}`);
  }
};

export const changeUserData = async (Id : string) => {
    try {
        const user = await UserModel.findOneAndUpdate({Id}, { $set: { Role: "User" } }, { new: true });
        return user;
    }catch (error) {
        throw new Error(`Error updating user: ${error}`);
    }
}

export const deleteUserById = async (Id : string) => {
    try {
        const user = await UserModel.findOneAndDelete({Id});
        return user;
    }catch (error) {
        throw new Error(`Error deleting user: ${error}`);
    }
}