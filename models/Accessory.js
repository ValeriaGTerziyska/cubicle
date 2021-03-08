const mongoose = require("mongoose");


const accessorySchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLenght: 50,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?/,
    },

})

module.exports = mongoose.model('Accessory', accessorySchema);