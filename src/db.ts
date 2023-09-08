import mongoose from "mongoose";

const connectToDb = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
        if (connection) {
            console.log('Database connected')
        }
    } catch (error) {
        console.log('Error establishing connection', error)
        throw error
    }
}