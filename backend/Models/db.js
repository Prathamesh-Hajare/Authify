const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_URL;

mongoose.connect(mongo_url)
    .then(() => {
        console.log('Datbase Connected');
    })
    .catch((err)=>{
        console.log('DB onnect error',err);
    })