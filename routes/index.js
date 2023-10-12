const express = require('express');
const router = express.Router();
const Message = require('../models/message');

/* GET home page. */
router.get('/', function(req, res, next) {
  run();
  async function run() {
    try {
      const messages = await Message.find().sort({dateAdded: -1});
      res.render('index', { 
        title: 'Mini Message Board',
        messages: messages,
      });
    } catch(e) {
      console.log(e.message);
    }
  }
});

router.get('/new', function(req, res, next) {
  res.render('form', {
    title: 'New Message'
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
    res.redirect('/');
  };
});

module.exports = router;
