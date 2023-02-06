const mongoose = require('mongoose');

async function connect() {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect('mongodb://localhost:27017/simple_blog_dev');
        console.log('Connected Successfully!!!');
    } catch (error) {
        console.log('Connected Failed!!!');
    }
}

module.exports = { connect };
