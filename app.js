const express = require('express')
require('dotenv').config({ path: './config/.env' });
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;
const env = process.env;


app.get('/', (req, res) => {
    res.send('Welcome, Your app is working!')
})

console.log('PORT:', env.PORT)
console.log('HOST:', env.HOST)
console.log('APP:', env.APP_NAME)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));