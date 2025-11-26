import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { timestamps: true });

const blogSchema = new Schema({
    title: { type: String, required: true },
    // Link to the User model using ObjectId
    author: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user',
        required: true 
    },
    content: { type: String, required: true },
    status: { 
        type: String, 
        enum: ['draft', 'published', 'archived'], 
        default: 'draft' 
    },
}, { timestamps: true });

// FIX: Use .model() (lowercase), not .Model()
const userModel = mongoose.model("user", userSchema);
const blogModel = mongoose.model("blog", blogSchema);

export { userModel, blogModel };