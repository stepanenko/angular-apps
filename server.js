
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const itemRoutes = require('./routes/api/items');

const app = express();

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;
mongoose.connect(db, {
  useCreateIndex: true,      // to avoid (node:1601) DeprecationWarning
  useNewUrlParser: true,     // to avoid (node:9768) DeprecationWarning
  useUnifiedTopology: true   // to avoid (node:9323) DeprecationWarning
})
  .then(() => console.log('Connected to mLab...'))
  .catch(err => console.log(`Couldn't connect to mLab: ${err}`));

// Use Routes
app.use('/api/items', itemRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/auth', authRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server is on, port:', port));
