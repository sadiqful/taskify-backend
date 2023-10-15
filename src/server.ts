import express, { Request, Response } from 'express'
import cors from 'cors'
import connectToDb from './db'
import categoryRoutes from "./routes/category.routes"
import taskRoutes from "./routes/task.routes"
import userRoutes from "./routes/user.routes"

const app = express();

app.use(express.json())
app.use(cors())

connectToDb()

const PORT = 1337

app.get("ping", ( request: Request, response: Response) => {
    response.send("Hello World")
})

app.use("/users", userRoutes)
app.use("/categories", categoryRoutes)
app.use("/tasks", taskRoutes)

app.listen(PORT, () => {
    console.log("Connection established")
})