import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema({
    url: {
        type: String,
        require: true
    },
    slug: {
        type: String,
        require: true,
        unique: true
    }
}, { timestamps: true })

export default mongoose.models.Url || mongoose.model("Url", UrlSchema)