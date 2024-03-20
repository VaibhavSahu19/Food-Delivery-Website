// server.js
const express = require('express');
const fetch = import('node-fetch');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/recommendations', async (req, res) => {
  const { query } = req.body;

  try {
    const response = await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=22.6457503&lng=75.8157847&str=${query}&trackingId=3b387495-8d4d-c6c1-5b56-58401f2e8fbd&submitAction=ENTER&queryUniqueId=14f2455e-6d4b-4cd0-4fd8-0341f272f10b`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    res.status(500).json({ error: 'An error occurred while fetching restaurants' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
