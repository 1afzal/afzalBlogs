import { Router } from "express";
const blogsRouter = Router();
import { blogModel, userModel } from "../models/DBmodel.js";



blogsRouter.get(`/all`, async(req, res) => {
    try {
            const blogs = await blogModel.find({});
            console.log(blogs)
            res.status(200).send(blogs);
        }
    catch (err) {
        res.status(400).json({
            message: `error in fetching blogs ${err.message}`
        })
    }
})

blogsRouter.get(`/blog/:id`, (req, res) => {
    async function fetchBlog() {
        const id = req.params.id
        const blog = await blogModel.findById(id)
        if (blog) {
            res.status(200).json({
                data: blog
            })
        }
        else {
            res.status(400).send(`unable to fetch blog ${err.message}`)
        }
    }
    fetchBlog();
})

blogsRouter.post(`/blog/post`, (req, res) => {
    try {
        const newBlog = blogModel.create({
            title: req.body.title,
            author: req.body.author,
            content: req.body.content,
            status: req.body.status ?? "draft",
        })
        res.status(200).send("blog created successfully");

    }
    catch (err) {
        console.log(`error in creating blogs ${err.message}`);
    }
})

blogsRouter.put(`/blog/update/:id`, async (req,res) => {
        try {
            const blogId = req.params.id;
            const blog = await blogModel.findByIdAndUpdate(blogId, req.body, {new:true})

            res.status(200).json({
                data: blog
            })
        }
        catch (err) {
            res.status(400).json({
                message: err.message
            })
        }
    })

blogsRouter.delete('/blog/delete/:id', async(req,res) => {
    try{
        const blogId = req.params.id
        const deleted_blog = await blogModel.findByIdAndDelete(blogId)
        if(!deleted_blog){
            res.status(400).json({
                message: "Blog not found"
            })
        }
        else{
        res.status(200).json({
            message: `blog ${deleted_blog._id} deleted successfully`
        })
    }
    }
    catch(err){
        console.log(`error in deleting ${err.message}`);
    }
})

export default blogsRouter;

