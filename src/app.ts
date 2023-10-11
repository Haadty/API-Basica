//Execução de toda API e a liberação de uso por parte do Cliente e a comunicação por json

import express from "express";
import * as bodyParser from "body-parser";
import {orderRouter} from "./routes/orderRouter";

const app = express();
app.use(bodyParser.json());
app.use("/orders", orderRouter);

app.listen(5000, () => {
console.log("Node server started running");
});