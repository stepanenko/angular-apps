
const express = require('express');
// const bodyParser = require('body-parser'); // express now has its bodyparser
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

// Routes
// const itemRoutes = require('./routes/api/items');

const app = express();

// app.use(bodyParser.json()); // express now has its bodyparser
app.use(express.json());

const db = config.get('mongoURI');
mongoose.connect(db, {
  useCreateIndex: true,      // to avoid (node:1601) DeprecationWarning
  useNewUrlParser: true,     // to avoid (node:9768) DeprecationWarning
  useUnifiedTopology: true   // to avoid (node:9323) DeprecationWarning
})
  .then(() => console.log('Connected to mLab...'))
  .catch(err => console.log(`Couldn't connect to mLab: ${err}`));

// Use Routes
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/users', userRoutes);
// app.use('/api/auth', authRoutes);

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server is on, port:', port));
