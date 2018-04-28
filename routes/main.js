let router = require('express').Router();

router.get('/', (req, res) => {
  res.send("Main homepage. Index.html, for example.")
})

router.get('/login', (req, res) => {
  res.send("You are now logged in")
})

router.get('/logout', (req, res) => {
  res.send("Bye")
})

module.exports = router;
