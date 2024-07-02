import express from 'express';
import mongoose from 'mongoose';
import { router } from './routes/user-routes.js';
import blogRouter from './routes/blog-routes.js';
// import router from './routes/user-routes';

const app = express();

app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose.connect("mongodb+srv://admin:gison@dev.fhxwbar.mongodb.net/?retryWrites=true&w=majority&appName=DEV").then(() => app.listen(5000)).then(() => console.log("Connected To Database and Listening To Localhost 5000")
).catch((err) => console.log(err));
