const moment = require('moment');

const dateAndTime = (time) => {
  return moment(time).format('MMM D, YYYY [at] h:mma');
}

module.exports = dateAndTime;