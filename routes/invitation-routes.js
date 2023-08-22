const express = require('express');

const router= express.Router();

const invitationController = require('../controllers/invitation-controller');

router.get('/car/:cnum',invitationController.getInvitationsByCarNumber);

router.get('/',invitationController.getAllInvitation);

router.get('/:invid',invitationController.getInvitationByid);

router.post('/',invitationController.createInvitation);


module.exports = router