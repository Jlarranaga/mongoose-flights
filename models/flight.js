const mongoose = require('mongoose')

const Schema = mongoose.Schema

const destinationSchema = new Schema({ //<-- exporting this schema below
    airport: {type: String, required: true,
                enum: ['aus', 'dfw', 'den', 'lax', 'san'], 
                default: 'den'},
    arrival: {type: Date, default: function(){
            return new Date().getDate;
    }}

})

const flightSchema = new Schema({ //<-- exporting this schema below
    airline: {type: String, required: true,
                enum: ['american', 'southwest', 'united']},
    airport: {type: String, required: true,
                enum: ['aus', 'dfw', 'den', 'lax', 'san'], 
                default: 'DEN'},
    flightNo: {type: Number},
    departs: {type: Date, default: function(){
            return new Date().getDate;
    }},
    destinations: [destinationSchema]

})

module.exports = mongoose.model('Flight', flightSchema) //<-- exporting! 