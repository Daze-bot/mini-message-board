const express = require('express');
const router = express.Router();
const moment = require('moment');

const messages = [
  {
    text: "Hi there!",
    user: "Heather",
    added: moment().format('MMM D, YYYY [at] h:ma'),
  },
  {
    text: "Check it out!",
    user: "Botrick",
    added: moment().format('MMM D, YYYY [at] h:ma'),
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

router.post('/new', function(req, res, next) {
  req.body.userName
});

module.exports = router;
