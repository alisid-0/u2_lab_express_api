const mongoose = require(`mongoose`)

mongoose
    .connect(`mongodb+srv://kevinli617:gqmZeGfE7zniH0e0@cluster0.yg9kt7s.mongodb.net/movieDatabase?retryWrites=true&w=majority`)
    .then(()=>{
        console.log(`Successfully connnected to MongoDB!`)
    })
    .catch((e)=>{
        console.error(`Connection Error: `, e.message)
    })

    mongoose.set(`debug`, true)
    const db = mongoose.connection

    module.exports = db