import mongoose, { Schema } from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        isEditable: {
            type: String,
            required: false,
            default: true,
        },
        color: {
            id: String,
            code: String,
            name: String,
        },
        icon: {
            code: String,
            name: String,
            symbol: String,
        },
        user: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
    },
)

const Category = mongoose.model("Category", categorySchema);

export default Category 