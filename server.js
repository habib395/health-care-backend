require('dotenv').config();
const express = require('express')
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8800;
const { connectDB } = require('./config/db')
const sliderRoute = require('./routes/sliderInfoRoute');
const buyOnline = require('./routes/buyOnlineRoute');
const footerInfo = require('./routes/footerRoute');
const contactInfo = require('./routes/contactRoute');
const faqInfo = require('./routes/faqRoute');
const blogsInfo = require('./routes/blogsRoute');
const downloadInfo = require('./routes/downloadRoute');
const reviewsInfo = require('./routes/reviewsRoute');
const mediaInfo = require('./routes/mediaRoute');

app.use(cors());
app.use(express.json());

const startServer = async() =>{
    try {
        await connectDB();
        console.log('DB connection established successful.')
        app.get('/', (req, res) =>{
            res.send('health care is running')
        })
        app.use('/api/v1', sliderRoute);
        app.use('/api/v1', buyOnline);
        app.use('/api/v1', footerInfo);
        app.use('/api/v1', contactInfo);
        app.use('/api/v1', faqInfo);
        app.use('/api/v1', blogsInfo);
        app.use('/api/v1', downloadInfo);
        app.use('/api/v1', reviewsInfo);
        app.use('/api/v1', mediaInfo);
        
        app.listen(port, () => {
            console.log(`health care is running on port: ${port}`)
        })
    } catch (error) {
        console.error('failed to start server')
    }
}

startServer();

