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

export const getAllCompletedTasks = async (request: AuthRequest, response: Response) => {
    try {
      const userId = request.user
      const tasks = await Task.find({
        user: userId,
        isCompleted: true,
      })
      response.send(tasks)
    } catch (error) {
      console.log("error in getAllCompletedTasks", error)
      response.send({ error: "Error while fetching tasks" })
      throw error
    }
  }

export const getTasksForToday = async (request: AuthRequest, response: Response) => {
    try {
      const userId = request.user
      const todaysISODate = new Date()
      todaysISODate.setHours(0, 0, 0, 0)
      const tasks = await Task.find({
        user: userId,
        date: todaysISODate.toISOString(),
      })
      response.send(tasks)
    } catch (error) {
      console.log("error in getTasksForToday", error)
      response.send({ error: "Error while fetching tasks" })
      throw error
    }
  }

  export const createTask = async (request: AuthRequest, response: Response) => {
    try {
      const userId = request.user
      const { name, date, categoryId }: ITask = request.body
  
      const task = await Task.create({
        name,
        date,
        categoryId,
        user: userId,
      })
      response.send(task)
    } catch (error) {
      console.log("error in createTask", error)
      response.send({ error: "Error while creating task" })
      throw error
    }
  }