const messages = require('../messages');

const getHome = (req, res) => {
  res.render('index', { messages: messages });
};

const getNew = (req, res) => {
  res.render('new');
};

const postNew = (req, res) => {
  messages.push({ text: req.body.text, user: req.body.user, added: new Date() });
  res.redirect('/');
};

module.exports = { getHome, getNew, postNew };
