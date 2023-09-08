import express, { Request, Response } from 'express'
import cors from 'cors'
import connectToDb from './db'

const app = express();

app.use(express.json())
app.use(cors())

connectToDb()

const PORT = 1337

app.get("ping", ( request: Request, response: Response) => {
    response.send("Hello World")
})

app.listen(PORT, () => {
    console.log("Connection established")
})