// const { Signup } = require("../controller/AuthController");
// const router = require("express").Router();

// router.post("/signup", Signup);

// module.exports = router;
const { Signup, Login, userVerification } = require('../controller/AuthController')
const router = require('express').Router()

router.post('/signup', Signup)
router.post('/login', Login)
router.post('/',userVerification)

module.exports = router