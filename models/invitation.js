const mongoose =require('mongoose');

const Schema =  mongoose.Schema;

const InvitationSchema = new Schema({
    invitationDate:{type: String, require: true},
    carNumber:{type: String, require: true},
    company:{type: String, require: true},
    work:{type: [String], require: true},
    worker:{type: String, require: false},
    status:{type: String, require: true},
    days:{type: String, require: true},
    price:{type: String, require: true},
})

module.exports = mongoose.model('Invitation',InvitationSchema);