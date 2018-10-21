const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

const ORDERS = generateOrders(100);

function generateOrders(limit=20) {
  const result = [];

  for (let i = 1; i <= limit; i++) {
    result.push({
      "id": i,
      "status": Math.floor((Math.random() * 3) + 1),
      "sender": "sender-" + i,
      "receiver": "receiver-" + i,
      "name": "Заказ № " + i
    });
  }

  return result;
}

function getOrders(filters={}, page=0, limit=5) {
  const result = [];
  let filteredOrders;

  if (filters && filters.status > 0) {
    filteredOrders = ORDERS.filter(order => order.status == filters.status);
  } else {
    filteredOrders = ORDERS;
  }

  for (let i = 0; i < limit; i++) {
    var idx = page * limit + i;
    if (idx >= filteredOrders.length) {
      break;
    }
    result.push(filteredOrders[idx]);
  }

  return result;
}

app.post('/data/list', (req, res) => {
  res.json(getOrders(
    req.body.filters,
    req.body.pagination.page,
    req.body.pagination.rows
  ))
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));