const moment = require('moment');

// Time is currently set in fly.toml to EST
const dateAndTime = (time) => {
  const utcDate = time;
  const localDate = new Date(utcDate);
  return moment(localDate).format('MMM D, YYYY [at] h:mma');
}

module.exports = dateAndTime;