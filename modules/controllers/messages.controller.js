// Necessary modules import.
const express = require('express');
const router = express.Router();
const usersModel = require('../models/users.model');
const messagesModel = require('../models/messages.model');
const checkAuth = require('../jwt_middleware');

// Exports router.
module.exports = router;

// Sets functions by router path.
router.post('/writeMessage', checkAuth, writeMessage);
router.get('/getMessages', checkAuth, getMessages);
router.delete('/deleteMessage', checkAuth, deleteMessage);

function writeMessage(req, res) { // Validates and calls to add messages to the local DB
    try {
        let messageData = {
            subject: req.body.subject,
            message: req.body.message,
            creationDate: +new Date(),
            senderId: req.userData.id * 1,
            receiverId: req.body.receiverId * 1
        }
        if (!usersModel.checkUser(messageData.senderId)) {
            throw 1;
        } else if (!messageData.receiverId || !messageData.message || !messageData.subject) {
            throw 2;
        } else if (isNaN(messageData.receiverId) || typeof messageData.message != 'string' || !messageData.message.length || typeof messageData.subject != 'string' || !messageData.subject.length) {
            throw 3;
        } else if (!usersModel.checkUser(messageData.receiverId)) {
            throw 4;
        }
        let messageId = messagesModel.addMessage(messageData);
        usersModel.addMessageReference(messageData.senderId, messageData.receiverId, messageId);
        res.json(true);
    } catch (e) {
        let errorMessage = 'Internal server error';
        if (e == 1) {
            errorMessage = {
                logout: true,
                message: 'Authentication failed, please try to login again.'
            }
        } else if (e == 2) {
            errorMessage = 'Missing data';
        } else if (e == 3) {
            errorMessage = 'Invalid input';
        } else if (e == 4) {
            errorMessage = "User does not exist"
        }
        res.status(403).send(errorMessage);
    }
}

function getMessages(req, res) { // Returns messages by user id
    try {
        let messages = {
            sent: [],
            received: []
        }
        let userId = req.userData.id;
        let userData = usersModel.getUserData(userId);
        if (!userData) {
            throw 1;
        }
        for (let i of userData.sent) {
            let messageData = messagesModel.getMessageById(i);
            messages.sent.push(messageData);
        }
        for (let i of userData.received) {
            let messageData = messagesModel.getMessageById(i);
            messages.received.push(messageData);
        }
        res.json(messages);
    } catch (e) {
        let errorMessage = 'Internal server error';
        if (e == 1) {
            errorMessage = {
                logout: true,
                message: 'Authentication failed, please try to login again.'
            }
        }
        res.status(403).send(errorMessage);
    }
}

function deleteMessage(req, res) { // Deletes messages references from user
    try {
        let messageId = req.query.messageId * 1;
        let userId = req.userData.id;
        let status = req.query.status;
        if (isNaN(messageId) || (status != 'received' && status != 'sent')) {
            throw 1;
        } else if (!usersModel.checkUser(userId)) {
            throw 2;
        }
        let referenceDeleted = usersModel.deleteMessageReference(messageId, userId, status);
        if (!referenceDeleted) {
            throw 3;
        }
        res.json(true);
    } catch (e) {
        let errorMessage = 'Internal server error';
        if (e == 1) {
            errorMessage = 'Invalid data';
        } else if (e == 2) {
            errorMessage = {
                logout: true,
                message: 'Authentication failed, please try to login again.'
            }
        } else if (e == 3) {
            errorMessage = "Couldn't find message";
        }
        res.status(403).send(errorMessage);
    }
}