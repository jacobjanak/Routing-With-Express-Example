let express = require('express');

let app = express();
let PORT = process.env.PORT || 8000;

let apiRoutes = require('./routes/api.js');
let adminRoutes = require('./routes/admin.js');
let mainRoutes = require('./routes/main.js');

app.use('/api', apiRoutes)
app.use('/admin', adminRoutes)
app.use('/', mainRoutes)

// catch-all for incorrect get requests
app.get('*', (req, res) => {
  res.send('404')
})

app.listen(PORT, () => {
  console.log('Server listening at http://localhost:' + PORT)
})
