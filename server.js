const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/status', (req, res) => {
  res.json({
    buzzer: 'ON',
    led: 'ON',
    sosNumber: '9876543210',
    location: 'Agra, Uttar Pradesh',
    message: 'Accident detected! Help needed!'
  });
});

app.listen(PORT, () => {
  console.log('Smart Guard Helmet server running on http://localhost:' + PORT);
});