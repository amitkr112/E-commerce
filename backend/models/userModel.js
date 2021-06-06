import mongoose from 'mongoose'


//CREATING A SCHEMA FOR USER
// USER MODEL
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },


}, { timestamps: true }
    // THIS WILL ADD THE DATA ABOUT CREATED AT AND UPDATED AT
)
// CREATE A MODEL BASED ON THE ABOVE SCHEMA
// FIRST PARAMETER IS MODEL NAME
const User = mongoose.model("User", userSchema)
export default User;