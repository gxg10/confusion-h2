const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 var stiriSchema = new Schema({
    titlu:  {
        type: String,
        required: true
    },
    continut:  {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
 var Stiri = mongoose.model('Stiri', stiriSchema);
 module.exports = Stiri; 