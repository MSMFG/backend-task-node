const express = require('express')
const {getHighestPrice} = require("./service/bitcoinExchangeService");
const app = express()
const port = 3000

app.get('/exchangeapp/highestprice/', async (req, res) => {
    let highestPriceResp = await getHighestPrice();
    res.send(highestPriceResp)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/exchangeapp/highestprice/`)
})
