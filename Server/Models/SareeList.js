const mongoose = require('mongoose');

const SareeDetailsSchema = new mongoose.Schema({
    saree_images : {
        type : [String]
    },
    saree_name : {
        type : String,
        required : true
    },
    saree_price : {
        type : String,
        required : true
    },
    saree_material : {
        type : String
    }
});

module.exports = mongoose.model('SareeDetails',SareeDetailsSchema);