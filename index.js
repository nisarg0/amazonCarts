const express = require("express");
const app = express();
const port = 3000;

app.post("/cart/addProduct", cartController.addProduct);

app.post("/cart/removeProduct", cartController.removeProduct);

app.listen(port, () => console.log(`Amazon is listening on port ${port}!`));
