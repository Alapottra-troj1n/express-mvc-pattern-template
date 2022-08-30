const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;
const dbConnect = require('./utils/dbConnect');
const productRoutes = require('./routes/v1/products.route');
const errorHandler = require('./middleware/errorHandler');



//middlewares
app.use(cors());
app.use(express.json());








//connect to mongodb

dbConnect();




//ROUTES


//base url -> api/v1/products/:productRoutes
app.use('/api/v1/products', productRoutes);








//home api 
app.get('/', async (req, res) => {
    res.json({ message: 'boilerplate for express mvc patter' });
})





//404 route handler
app.all("*", (req, res) => {
    res.json({ message: 'router not found' })
})





//error handler
app.use(errorHandler)




//port
app.listen(port, () => {
    console.log("listening to the port", port)
});





//mandatory error handler
process.on('unhandledRejection', (err) => {
    app.close(() => {
        process.exit(1);
    });
});
