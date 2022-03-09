const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(expres.json());
app.use(express.urlencoded({extended:true}))
app.use(expres.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/challenge-18-NoSQL', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('debug', true);

app.use(require('./routes'));

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));