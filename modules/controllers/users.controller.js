// Necessary modules import.
const express = require('express');
const router = express.Router();
const usersModel = require('../models/users.model');
const passwordController = require('./password.controller');
const jwt = require('jsonwebtoken');
const checkAuth = require('../jwt_middleware');

// Necessary modules export.
module.exports = router;

// Sets functions by the router path.
router.post('/', register);
router.post('/login', login);

async function register(req, res) { //registers new users
    try {
        let userId = req.body.id * 1;
        let password = req.body.password;
        let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!userId || isNaN(userId) || userId < 1 || String(userId).length > 16 || !password.trim() || !password.match(passwordRegex)) {
            throw 1;
        }
        let result = {};
        let hash = await passwordController.hash(password);
        if (usersModel.checkUser(userId)) {
            throw 2;
        }
        usersModel.addUser(userId, hash);
        result.userId = userId;
        console.log('process.env.JWT_KEY: ',process.env.JWT_KEY);
        result.token = jwt.sign(result, process.env.JWT_KEY, {
            expiresIn: '12h'
        });
        res.json(result);
    } catch (e) {
        console.log('error: ',e);
        let errorMessage = 'Internal server error';
        if (e == 1) {
            errorMessage = 'invalid data';
        } else if (e == 2) {
            errorMessage = 'user id already exists';
        }
        res.status(403).send(errorMessage);
    }
}

async function login(req, res) { // verifies user data on login
    try {
        console.log('in login')
        let userId = req.body.id * 1;
        let password = req.body.password;
        if (!userId || isNaN(userId) || userId < 1 || String(userId).length > 16 || !password || !password.trim()) {
            throw 1;
        }
        let userData = usersModel.getUserData(userId);
        let result = {};
        if (!userData) {
            throw 2;
        }
        console.log('password: ', password, ' hash: ', userData.hash);
        let passwordVerification = await passwordController.verify(password, userData.hash);
        if (!passwordVerification) {
            throw 2;
        }
        result.userId = userId;
        result.token = jwt.sign(result, process.env.JWT_KEY, {
            expiresIn: '12h'
        });
        res.json(result);
    } catch (e) {
        let errorMessage = 'Internal server error';
        if (e == 1) {
            errorMessage = 'invalid data';
        } else if (e == 2) {
            errorMessage = "Incorrect ID or password";
        }
        res.status(403).send(errorMessage);
    }
}