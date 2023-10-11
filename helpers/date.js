const moment = require('moment');

const dateAndTime = () => {
  return moment().format('MMM D, YYYY [at] h:mma');
}

module.exports = dateAndTime;