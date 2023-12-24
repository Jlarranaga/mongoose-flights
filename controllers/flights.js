const Flight = require('../models/flight')

module.exports = {
    index, 
    new: newFlight
}

async function index (req, res){
    const flights = await Flight.find({});
    res.render('flights/index', {title: 'Mongoose Express Flights!', flights});
}

async function newFlight(req, res){
    res.render('flights/new', {title: 'Add a Flight', errorMsg: ''});
}