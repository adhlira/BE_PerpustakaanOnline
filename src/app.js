import express from "express";
import userRoute from "./routes/users_route.js";
import bookRoute from "./routes/books_route.js";
import visitorRoute from "./routes/visitor_route.js";

const app = express();

app.use(express.json());
app.use(userRoute);
app.use(bookRoute);
app.use(visitorRoute);

export default app;
