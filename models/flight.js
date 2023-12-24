const mongoose = require('mongoose')

const Schema = mongoose.Schema

const flightSchema = new Schema({ //<-- exporting this schema below
    airline: {type: String, required: true,
                enum: ['American', 'Southwest', 'United']},
    airport: {type: String, required: true,
                enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], 
                default: 'DEN'},
    flightNo: {type: Number, required: 10-9999},
    departs: {type: Date, default: function(){
            return new Date().getDate;
    }}

})

module.exports = mongoose.model('Flight', flightSchema) //<-- exporting! 