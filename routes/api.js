const router = require('express').Router();

router.get('/', (req, res) => {
  res.send("API homepage")
})

router.get('/data', (req, res) => {
  res.json({
    whatIsThis: 'Just some dummy data',
    also: 'More dummy data'
  })
})

module.exports = router;
