const express = require('express');
const router = express.Router();

const appCtrl = require('../controllers/app');

router.get('/attendee/:attendeeId', appCtrl.showByAttendeeId);
router.get('/team/:teamId', appCtrl.showByTeam);
router.get('/company/:companyName', appCtrl.showByCompany);
router.get('/title/:title', appCtrl.showByTitle);


module.exports = router;