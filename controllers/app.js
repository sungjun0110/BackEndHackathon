const fs = require('fs');
const rawdata = fs.readFileSync('attendees.json');
const attendees = JSON.parse(rawdata);

module.exports = {
    showByTeam,
    showByCompany,
    showByTitle,
}

function showByTeam(req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.send(attendees.filter(attendee => attendee.team == req.params.teamId));
}

function showByCompany(req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.send(attendees.filter(attendee => attendee.Company == req.params.companyName));
}

function showByTitle(req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.send(attendees.filter(attendee => attendee.title == req.params.title));
}