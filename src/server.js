const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.get('/api/flight-search', async (req, res) => {
    const { from, to, departureDate } = req.query;
    // const apiKey = "656a690ad5183388b874c6a4";
    const apiKey = "656c3c03208bc488aa228adf";
    const adults = "1";
    const children = "0";
    const infants = "0";
    const classType = "Economy";
    const currency = "USD";
  
    try {
      const response = await axios.get(`https://api.flightapi.io/onewaytrip/${apiKey}/${from}/${to}/${departureDate}/${adults}/${children}/${infants}/${classType}/${currency}`);
      res.json(response.data);
    } catch (error) {
      res.status(500).send(error.toString());
    }
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
