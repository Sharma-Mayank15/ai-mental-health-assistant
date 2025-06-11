// backend/services/openaiService.js
import dotenv from 'dotenv';
dotenv.config();
console.log('Loaded key:', process.env.OPENAI_API_KEY);

import OpenAI from 'openai';


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function chatWithOpenAI(message) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: 'user', content: message }],
    });

    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error('OpenAI Error:', error);
    return 'Sorry, something went wrong while contacting the AI.';
  }
}
