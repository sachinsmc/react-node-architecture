const express = require('express');

const { validateToken, generateToken } = require('../middlewares');
const { findOne } = require('../controllers')
const db = require("../models");
const users =  db.users;

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('respond with a resource');
});

/** ****************************************************************************
 *                       Login - "POST /api/users/info"
 ***************************************************************************** */

router.get('/info', validateToken , async (req, res, next) => {
  // get userinfo based on id
  users.findByPk(req.query.id).then((user) => {
    console.log(user.dataValues)
    res.json({ user });
    res.end();
  })
});

/** ****************************************************************************
 *                       Login - "POST /api/users/signup"
 ***************************************************************************** */

router.post('/signup', (req, res) => {
  const newUser = users.build();
  newUser.firstName = req.body.fname,
  // newUser.password = req.query.password,
  // newUser.email = req.query.email,
  // newUser.phone = req.query.phone,
  newUser.save().then((user) => {
    console.log(req.body)
    // save user and generate token
    // generateToken
    console.log(user)
    const token = generateToken(req.body);
    res.json({ user, token });
    res.end();
  })

});

module.exports = router;
