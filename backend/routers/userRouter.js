import express from 'express'
// EXPRESS ASYNC HANDLER ARE USED TO  HANDLE THE ERROR WH=IN EXPRESS ROUTES AND SEND THESE ERROR TO YOUR EXPRESS ERROR HANDLERS 
import expressAsyncHandler from 'express-async-handler'
import data from '../data.js'
import bcrypt from 'bcrypt'
import User from '../models/userModel.js'
import { generateToken, isAuth } from '../utils.js'
// CREATING A ROUTER
const userRouter = express.Router()



userRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    // NOTE WHILE REFERESHING WE ARE CREATING AGAIN NEW USER WITH THE SAME E MAIL HENCE IT IS NOT VALID
    // TO RESOLVE THIS WE DELETED THE USERS DATA EVERYTIME
    await User.remove({})
    const createdUsers = await User.insertMany(data.users)
    res.send({ createdUsers })
}))

// RETRUNING SIGN-IN DATA WITH GENERATE A TOKEN FOR AUTHENTICATE USER
// FOR NEXT REQUEST 


//Creation hence post
userRouter.post('/sigin', expressAsyncHandler(async (req, res) => {
    // CHECKING EMAIL WITH THAT AT DATABASE
    const user = await User.findOne({ email: req.body.email })
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                password: user.password,
                isAdmin: user.isAdmin,
                token: generateToken(user)

            })
            return;
        }
    }
    res.status(401).send({ message: 'Invalid email or password' })
}))

// SINCE WE ARE CREATING A SOURCE IN THE DATABASE
// Express asynchandler is used to handle errors in async functions
userRouter.post('/register', expressAsyncHandler(async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
    })
    const createdUser = await user.save();
    res.send({
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        password: createdUser.password,
        isAdmin: createdUser.isAdmin,
        token: generateToken(createdUser)

    })
}))


//Reading hence get
userRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (user)
        res.send(user)
    else
        res.status(404).send({ message: 'User not found' })
}))

//Updation work is happening
userRouter.put('/profile', isAuth, expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if (req.body.password) {
            user.password = bcrypt.hashSync(req.body.password, 8)
        }
        const updatedUser = await user.save()
        res.send({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser)

        })
    }
    else {

    }
}))


export default userRouter