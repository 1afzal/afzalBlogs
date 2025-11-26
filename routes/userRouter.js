import { Router } from "express";
const userRouter = Router();
import { userModel } from "../models/DBmodel.js";


userRouter.post(`/signup`, async (req, res) => {
    const { name, email, password } = req.body
    if (!email | !password || !name) {
        return res.status(400).json({
            message: "please enter mail or password"
        })
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await userModel.create({
            email: email,
            password: hashedPassword
        })
        res.status(201).json({
            message: "user signed up successfully"
        })
    }
    catch (err) {
        if (err.code === 11000) {
            return res.status(400).json({ message: "Email already exists" });
        }
        res.status(400).json({
            message: `signup failed ${err.message} `
        })
    }
})

userRouter.post(`/signin`, () => {

})

export default userRouter;