require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const helmet = require('helmet');
const morgan = require('morgan');
const xss = require('xss-clean');
const cors = require('cors');
const mongoSanatize = require('express-mongo-sanitize');
const rateLimiter = require('express-rate-limit');
const cookieParser = require('cookie-parser');

const connectDB = require('./db/connect')

const authRouter = require('./routes/auth-routes');
const userRouter = require('./routes/user-routes');
const quizRouter = require('./routes/quiz-router');

const notFoundMiddleWare = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.set('trust proxy', 1);
// app.use(
//     rateLimiter({
//         windowMs: 15 * 60 * 1000,
//         max: 60
//     })
// );

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser(process.env.JWT_SECRET));

app.use(morgan('combined'));
app.use(helmet());
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5000"],
    credentials: true
}));
app.use(xss())
app.use(mongoSanatize());



app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/quiz', quizRouter);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleWare);

const PORT = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    };
};

start();