const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://pandeyuday113:lUueDycNZ6K89N5C@cluster0.wvbnd5j.mongodb.net/todos')

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos', todoSchema)
module.exports = todo