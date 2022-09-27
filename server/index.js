const express = require('express');
require('dotenv').config({ path: './config/.env' });
const connectDb = require('./config/connectDb');
const port = process.env.PORT || 1234;
const app = express();
const userAuthRoute = require('./Routes/authUser.js');
const articleRoute = require('./Routes/articleRoute');
const adminRoute = require('./Routes/adminRoute');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.listen(port, (e) => {
    e ? console.log('server not runnig') : console.log(`server is running on ${port}`);
});

connectDb();
app.use('/api', userAuthRoute);
app.use('/api', articleRoute);
app.use('/api', adminRoute);

