import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouters.js';

// IN ORDER TO READ THE CONTENT FROM /ENV FOLDER anduse it in utils.js
dotenv.config()

const app = express();

//Parsing the body of http request
// Parsing json data in the body of request
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// These are used to resolve the postman error occuring while posting


mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
    // SO AS TO GET RID OF WARNINGS
})

const db = mongoose.connection;

db.on('error', console.error.bind(console, "error in connecting to mongodb"));
db.once('open', function () {
    console.log('connection successful');
});



//Creating the api to respond at the following routers
app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)
app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb')
})

app.get('/', (req, res) => {
    res.send("Server is ready");
})

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
})
// IF THERE IS ANY ENVIRONMENT VARIABLE USE THAT OTHERWISE USE 5000 DEFAULT PORT
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
})