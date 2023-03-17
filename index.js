const express = require("express");
const app = express();
const port = 3000;

app.post("/api/v1/cart/addProduct", cartController.addProduct);

app.post("/api/v1/cart/createOrder", cartController.convertCartToOrder);

app.listen(port, () => console.log(`Amazon is listening on port ${port}!`));
