const express = require('express');
const router = express.Router();
const dateAndTime = require('../helpers/date');

const messages = [
  {
    text: "Hi there!",
    user: "Heather",
    added: dateAndTime(),
  },
  {
    text: "Check it out!",
    user: "Botrick",
    added: dateAndTime(),
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Mini Message Board',
    messages: messages
  });
});

router.get('/new', function(req, res, next) {
  res.render('form', {
    title: 'Mini Message Board'
  });
});


/* New message POST */
router.post('/new', function(req, res, next) {
  messages.push({
    text: req.body.userMessage,
    user: req.body.userName,
    added: dateAndTime(),
  });
  res.redirect('/');
});

module.exports = router;
