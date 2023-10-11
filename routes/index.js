const express = require('express');
const router = express.Router();
const Message = require('../models/message');
const dateAndTime = require('../helpers/date');

/* GET home page. */
router.get('/', function(req, res, next) {
  run();
  async function run() {
    try {
      const messages = await Message.find();
      res.render('index', { 
        title: 'Mini Message Board',
        messages: messages,
        utils: dateAndTime
      });
    } catch(e) {
      console.log(e.message);
    }
  }
});

router.get('/new', function(req, res, next) {
  res.render('form', {
    title: 'Mini Message Board'
  });
});


/* New message POST */
router.post('/new', function(req, res, next) {
  run();
  async function run() {
    const newMessage = await Message.create({
      text: req.body.userMessage,
      user: req.body.userName,
    });
  };
  res.redirect('/');
});

module.exports = router;
