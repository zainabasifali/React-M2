const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const OPENROUTER_API_KEY = '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'; 

const SYSTEM_INSTRUCTION = `
You are a helpful assistant that only answers vehicle-related questions.
If a user asks something unrelated, respond:
"I'm designed to help only with vehicle-related questions."
`;

app.post('/ask', async (req, res) => {
    console.log('Received request:', req.body);
  const { prompt } = req.body;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'mistralai/mistral-7b-instruct:free', 
        messages: [
          { role: 'system', content: SYSTEM_INSTRUCTION },
          { role: 'user', content: prompt }
        ]
      }),
    });

    const data = await response.json();

    if (!data.choices || !data.choices[0]) {
      return res.status(500).json({ error: 'No response from AI' });
    }

    const answer = data.choices?.[0]?.message?.content || '⚠️ No answer from AI';
    console.log('AI response:', answer);
    res.json({ answer });

  } catch (err) {
    console.error('OpenRouter API error:', err);
    res.status(500).json({ error: 'Something went wrong with OpenRouter' });
  }
});

app.listen(3000, () => {
  console.log('✅ Backend running at http://localhost:3000');
});
