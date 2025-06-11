const express = require('express');
const auth = require('../middleware/auth');
const axios = require('axios');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(process.env.AI_API_URL, { message });
    res.json({ reply: response.data.reply });
  } catch (err) {
    res.status(500).json({ error: 'AI service error' });
  }
});

module.exports = router;
