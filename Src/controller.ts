import { Request, Response } from "express";
import { createUser, fetchAllusers, changeUserData, deleteUserById} from "./service";
import {userSchema} from "./Validation";


export const InsertNewUser = async (req : Request, res : Response): Promise<void> => {
    const { error } = userSchema.validate(req.body);
  
    if (error) {
        res.status(400).json({ message: error.details[0].message });
    }
  
    try {
      const user = await createUser(req.body);
      if (user) {
        res.status(201).json({ message: "User created successfully", user });
      } else {
        res.status(400).json({ message: "User creation failed" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error inserting user", error });
    }
  };
export const GetAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await fetchAllusers();
    if (users) {
      res.status(200).json({ message: "Users fetched successfully", users });
    } else {
      res.status(404).json({ message: "No users found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error in updating user", error: (error as Error).message });

  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const {Id} = req.params;
    const user = await changeUserData(Id);    
    if (user) {
      res.status(200).json({ message: "User updated successfully", user });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  }catch (error) {
    res.status(500).json({ message: "Error in updating user", error: (error as Error).message });
}
};  

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const {Id} = req.params;
        const user = await deleteUserById(Id)
        if (user) {
            res.status(200).json({ message: "User deleted successfully", user });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    }catch (error) {
        res.status(500).json({ message: "Error in updating user", error: (error as Error).message });
    }
}
