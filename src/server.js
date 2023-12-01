const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

app.get('/api/flight-search', async (req, res) => {
    const { from, to, departureDate, returnDate, adults, children, infants, classType, currency } = req.query;

    try {
        const response = await axios.get("https://api.flightapi.io/onewaytrip/656a690ad5183388b874c6a4/HEL/OUL/2024-05-20/1/0/0/Economy/USD");
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});
