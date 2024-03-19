import express from "express";
import { getUsers, getViews, getWithDelay, getUsersNoList, validateEmail, div1, boost } from "../Controllers/todo.js";

const todoRouter = express.Router();
todoRouter.get('/users', getUsers);
todoRouter.get('/views', getViews);
todoRouter.get('/delay', getWithDelay);
todoRouter.get('/usersnolist', getUsersNoList);
todoRouter.post('/validate', validateEmail);
todoRouter.get('/div1', div1);
todoRouter.get('/boost', boost);

export default todoRouter;