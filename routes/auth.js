const router = require('express').Router();
const bcrypt = require('bcrypt');
const render = require('../lib/renderTemplate');
const Registration = require('../src/views/SignUpForm');
const { User } = require('../db/models');

//const soldRound = 10; 

const HomePage = require('../src/views/Home');
const LoginPage = require('../src/views/LoginForm');

router.get('/signup', (req, res) => {
  render(Registration, {}, res);
});

router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body, "Neeeeeeeeeeennnnnnnnn");
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name: name,
      password: hashedPassword,
      email: email,
    });

    req.session.user = { id: user.id, name: user.name };
    res.redirect('/');
    // res.send("hello")
  } catch (error) {
    res.send('Create User Error ', error.message);
  }
});

router.get('/login', (req, res) => {
  render(LoginPage, {}, res);
});

router.post('/login', async(req, res) => {
  const { name, password } = req.body;
 const user = await User.findOne({where: { name: name }});
    if(!user) return res.send('неверное имя или пароль!')
    
    const isValidPassword = await bcrypt.compare(password, user.password);
    if(!isValidPassword) return res.send('неверное имя или пароль!!!');
  
    req.session.user = { id: user.id, name: user.name };
    res.redirect('/');
  })

  router.get('/signout', (req, res) => {
    req.session.destroy((err) => {
          if (err) return res.send(err.message);
          res.clearCookie('sid');
          res.redirect('/')
  })
});
// const destroySession = (req, res, next) => {
//   console.log('hello');
//   req.session.destroy((err) => {
//     if (err) return res.send(err.message);
//     res.clearCookie('sid');
//     render(HomePage, {}, res);
//   });
// };

// router.get('/signout', destroySession);

module.exports = router;
