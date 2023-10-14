const express = require('express');
const router = express.Router();
const Message = require('../models/message');

/* GET home page. */
router.get('/', function(req, res, next) {
  run();
  async function run() {
    try {
      const messages = await Message.find().sort({dateAdded: -1}).limit(40);
      const messageCount = await Message.count();
      res.render('index', { 
        title: 'Mini Message Board',
        messages: messages,
        count: messageCount,
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

/* GET all messages */
router.get('/all', function(req, res, next) {
  run();
  async function run() {
    try {
      const messages = await Message.find().sort({dateAdded: -1});
      res.render('allMessages', { 
        title: 'All Messages',
        messages: messages,
      });
    } catch(e) {
      console.log(e.message);
    }
  }
});

module.exports = router;
