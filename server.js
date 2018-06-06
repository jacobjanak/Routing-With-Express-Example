const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;

// setting up routes
app.use('/api', require('./routes/api.js'))
app.use('/admin', require('./routes/admin.js'))
app.use('/', require('./routes/main.js'))

// catch-all for incorrect get requests
app.get('*', (req, res) => {
  res.send('404')
})

app.listen(PORT, () => {
  console.log('Server listening at http://localhost:' + PORT)
})
