const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

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

function show(req, res){
    const flight = Flight.findById(req.params.id)
    const tickets = Ticket.find({flight: req.params.id})
    res.render('flights/show', { title: 'Flights',flight, tickets })
}

async function create(req, res){

    try{
        await Flight.create(req.body)
        res.redirect('/flights/all')
    }catch(err){
        res.redirect(`/error?error=${err}`)
    }
}