const router = require('express').Router();
const render = require('../lib/renderTemplate');
const HomePage = require('../src/views/Home');




router.get('/', (req, res) => {
    const userInfo = req.session?.user
    console.log(userInfo);
  render(HomePage, {userInfo}, res)
});

module.exports = router;
