import express from "express";
import userController from "../controller/user-controller.js";
import { authenticate } from "../middleware/auth-middleware.js";

const publicRouter = new express.Router();

publicRouter.post('/api/register',userController.register);
publicRouter.post('/api/login',userController.login);



publicRouter.get("/api/profile", authenticate, (req, res) => {
  res.json({ data: req.user });
});
export {
    publicRouter
}

