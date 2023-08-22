const mongoose =require('mongoose');

const Schema =  mongoose.Schema;

const CarSchema = new Schema({
        carnumber:{type: String, require: true},
        company:{type: String, require: true},
        type:{type: String, require: true}, 
        year: {type: String, require: true}, 
        ownername: {type: String, require: true}, 
        openBagDate:{type: String, require: true}, 
        image:{type: String, require: false}, 
})

module.exports = mongoose.model('Car',CarSchema);