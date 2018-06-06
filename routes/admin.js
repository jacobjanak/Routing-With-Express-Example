const router = require('express').Router();

router.get('/', (req, res) => {
  res.send("Admin homepage")
})

router.get('/manage-users', (req, res) => {
  res.send("You are now managing users")
})

module.exports = router;
