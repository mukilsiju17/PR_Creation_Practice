import Joi from "joi";

export const userSchema = Joi.object({
    Id: Joi.string().required(),
    Name: Joi.string().required(),
    Email: Joi.string().email().required(),
    Password: Joi.string().required(),
    Phone: Joi.string().required(),
    Role: Joi.string().valid("Admin", "User").default("User"),
    timestamp: Joi.date().default(Date.now())
});