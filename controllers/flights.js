const Flight = require('../models/flight')

module.exports = {
    index, 
    new: newFlight, 
    create, 
    show
}

async function index (req, res){
    const flights = await Flight.find({});
    res.render('flights/index', {title: 'Mongoose Express Flights!', flights});
}

async function newFlight(req, res){
    res.render('flights/new', {title: 'Add a Flight', errorMsg: ''});
}

async function show(req, res){
    const flight = await Flight.findById(req.params.id)
    res.render('flights/show', {title: 'Flight Detail', flight})
}

async function create(req, res){

    for(let key in req.body){
        if(req.body[key] === '') delete req.body[key]
    }
    try{
        const flight = await Flight.create(req.body)
        res.redirect(`/flights/${flight._id}`)
    }catch (err){
        res.render('flights/new', {errorMsg: err.message})
    }
}