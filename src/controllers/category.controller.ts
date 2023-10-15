import { Response } from "express"
import { AuthRequest } from "../middleware"
import Category from "../models/category-model"
import Task from "../models/task-model"
import { ICategory } from "../types"

export const getAllCategories = async (request: AuthRequest, response: Response) => {
    try {
      const { user } = request
      const categories = await Category.find({
        user: user,
      })
      return response.send(categories)
    } catch (error) {
      response.send({ error: "Something went wrong" })
      console.log("error in getAllCategories", error)
      throw error
    }
  }