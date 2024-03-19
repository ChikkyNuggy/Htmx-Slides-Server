import express from "express";
import cors from "cors";
import todoRouter from "./Routers/todo.js"

const app = express();
const corsOptions = {
    origin: 'http://localhost:8000',
}
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.disable('etag');
app.use(cors(corsOptions));
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString().substring(0, 19).replace('T', ' ')
    next()
})

app.use('/', todoRouter)

export { app };