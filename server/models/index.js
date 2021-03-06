require('dotenv').load();
const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = Promise;

mongoose.connect(process.env.DB_URL, {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

module.exports.Admin = require('./admin');
module.exports.Robe = require('./robe');
module.exports.FeaturedItems = require('./featured');
