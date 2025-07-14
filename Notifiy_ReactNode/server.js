require("dotenv").config();
const express = require("express");
const cors = require('cors');
const { sendNotification } = require("./src/services/fcmService");
const app = express();

app.use(express.json());
app.use(cors());

let deviceToken = '';

app.post('/api/save-token', (req, res) => {
  const { token } = req.body;
  deviceToken = token;
  console.log('Device token saved:', deviceToken);
  res.json({ message: 'Device token saved ' });
});

app.post('/api/guess', async (req, res) => {
  const { guess } = req.body;
  console.log(`User guessed: ${guess}`);

  if (parseInt(guess) === 63) {
    try {
      await sendNotification(deviceToken, ' Correct Guess!', `You guessed ${guess} right!`);
      res.json({ message: 'Correct guess! Notification sent ' });
    } catch (error) {
      console.error('FCM Error:', error);
      res.status(500).json({ message: 'Notification sending failed ' });
    }
  } else {
    res.json({ message: 'Wrong guess Try again' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
