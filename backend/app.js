// backend/app.js
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';

import { chatWithOpenAI } from './services/openaiService.js';



const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  try {
    const reply = await chatWithOpenAI(message);
    res.json({ reply });
  } catch (error) {
    res.status(500).json({ reply: 'Sorry, something went wrong while contacting the AI.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
