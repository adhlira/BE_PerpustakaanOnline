import express from "express";
import userRoute from "./routes/users_route.js";
import bookRoute from "./routes/books_route.js";
import visitorRoute from "./routes/visitor_route.js";
import memberLoanRoute from "./routes/member_loans_route.js";
import visitorLoanRoute from "./routes/visitor_loans_route.js";
import loginRoute from "./routes/login_route.js";
import reservationRoute from "./routes/reservation_route.js";

const app = express();

app.use(express.json());
app.use(userRoute);
app.use(bookRoute);
app.use(visitorRoute);
app.use(memberLoanRoute);
app.use(visitorLoanRoute);
app.use(loginRoute);
app.use(reservationRoute);

export default app;
