require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/routes');


const app = express();
const port = process.env.PORT || 3000;
const dotenv =require("dotenv");
const {connectDatabase,getConnection} = require('./database');
app.use(express.json());
app.get('/ping', (req, res) => {
    res.send('Pong!');
});

connectDatabase();

app.get('/',(req,res)=>{
    res.send(getConnection())
})
app.get('/', (req, res) => {
    console.log('Connected');
    res.json({ message: getConnection() });
});

// Use user routes
app.use('/api', userRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
