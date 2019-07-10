const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const pino = require('express-pino-logger')();
const Alpaca = require('@alpacahq/alpaca-trade-api');

const alpaca = new Alpaca({
  keyId: 'PKK9VNCJXQ6ITXWHOREO',
  secretKey: 'OfBAdRH0mY2NdSMMihvnRWJgswu7YCfB95PHJMyC',
  paper: true
});

const app = express();
app.use(pino);

// Get ticker timeseries
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/api/getTicker', (req, res) => {
  const { ticker } = req.query;

  alpaca
    .getBars('day', `${ticker}`, {
      limit: 100
    })
    .then(barset => {
      const tickerBars = barset[ticker];
      // // converted data necessary for call to next API to get forecast
      // const convertedData = tickerBars.map(tickerBar => {
      //   return {
      //     timestamp: tickerBar.t,
      //     value: tickerBar.c
      //   };
      // });
      // For now just return in graph format

      const graphData = tickerBars.map((tickerBar, index) => {
        return {
          x: tickerBar.t,
          y: tickerBar.c
        };
      });

      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ graphData }));
      // getting back the forecast requires a webhook url being
      // exposed for local development
      //   const unpluggedPayload = {
      //     data: convertedData,
      //     callback: 'http://0cf9f2c1.ngrok.io/webhookConsumerEndpoint'
      //   };
      //   request(
      //     'https://api.unplu.gg/forecast',
      //     {
      //       method: 'POST',
      //       headers: {
      //         'x-access-token':
      //           '38b31b16ca61cfee83cef6a677ffe331023ff1d6dfbeff62f8d5c16dc4cad3cc',
      //         'content-type': 'application/json'
      //       },
      //       body: JSON.stringify(unpluggedPayload)
      //     },
      //     (err, response, body) => {
      //       if (err) {
      //         return console.log(err);
      //       }
      //       console.log(body);

      //       res.setHeader('Content-Type', 'application/json');
      //       res.send(JSON.stringify({ body }));
      //     }
      //   );
    });
});

// Unplugg API callback handling
// the forecast for the ticker's price timeseries
app.use(bodyParser.json());
app.post('/webhookConsumerEndpoint', (req, res) => {
  //   TO DO explore SSE
  // To return data to the client
  console.log(req.body);
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
