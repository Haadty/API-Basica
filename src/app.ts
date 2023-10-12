//ligar tudo nesse arquivo e iniciar o server

import express from "express";
import * as bodyParser from "body-parser";
import { orderRouter } from "./routes/orderRouter"; 

const app = express();
app.use(bodyParser.json());
app.use("/orders", orderRouter);

app.listen(5000, () => {
  console.log("Node server started running");
});
