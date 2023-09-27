import bcrypt from 'bcrypt'
import { Response, Request } from 'express'
import jwt from 'jsonwebtoken'
import { Types } from 'mongoose'
import { IUser } from '../types'
import User from '../models/user-model'

const getUserToken = (_id: string | Types.ObjectId) => {
    const userToken = jwt.sign({ _id }, "express", {
        expiresIn: "7d",
    })
    return userToken
}

export const createNewUser = async (request: Request, response: Response) => {
    try {
        const { name, email, password } = request.body;
    
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return response.status(409).send("User Already exist")
        }

        const hashPassword = await bcrypt.hash(password, 12)

        const user = await User.create({
            name: name,
            email: email,
            password: hashPassword 
        })

        return response.status(200).send("Account created successful")
    }   catch (error) {
        console.log('Error creating new user', error)
        throw error
    }
}

export const login = async (request: Request, response: Response) => {
    try {
        const {email, password} : IUser = request.body
        const existingUser = await User.findOne({ email })
        if (!existingUser) {
            return response.status(409).send("User does not exist")
        }

        const isPasswordIdentical = await bcrypt.compare(
            password,
            existingUser.password
        )

        if (isPasswordIdentical) {
            const token = getUserToken(existingUser._id)
            return response.send({
                token,
                user: {
                    email: existingUser.email,
                    name: existingUser.name
                },
            })
        } else {
            return response.status(409).send("Invalid login credentials")
        }
    } catch (error) {
        console.log("Error in", error)
        throw error
    }
}