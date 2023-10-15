import { Request, Response } from "express"
import { AuthRequest } from "../middleware"
import Task from "../models/task-model"
import { ITask } from "../types"

export const getAllTasks = async (request: AuthRequest, response: Response) => {
  try {
    const userId = request.user
    const tasks = await Task.find({
      user: userId,
    })
    response.send(tasks)
  } catch (error) {
    console.log("error in getAllTasks", error)
    response.send({ error: "Error while fetching tasks" })
    throw error
  }
}

export const getAllTasksByCategory = async (request: AuthRequest, response: Response) => {
    try {
      const userId = request.user
      const { id } = request.params
      const tasks = await Task.find({
        user: userId,
        categoryId: id,
      })
      response.send(tasks)
    } catch (error) {
      console.log("error in getAllTasksByCategory", error)
      response.send({ error: "Error while fetching tasks" })
      throw error
    }
  }