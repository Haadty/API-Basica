import express, { Request, Response } from "express";
import * as orderModel from "../model/order";
import { Funcionario } from "../types/funcionario";
import { cpf } from "cpf-cnpj-validator";
import validator from "validator"; // Importe a biblioteca validator explicitamente

const orderRouter = express.Router();

orderRouter.get("/", async (req: Request, res: Response) => {
  orderModel.Findall((err: Error, orders: Funcionario[]) => {
    if (err) {
      return res.status(500).json({ errorMessage: err.message });
    }
    res.status(200).json({ data: orders });
  });
});

orderRouter.post("/", async (req: Request, res: Response) => {
  const newOrder: Funcionario = req.body;
  orderModel.Create(newOrder, (err: Error, orderId: number) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    if (newOrder.nome.length < 5) {
      return res.status(500).json({ message: "Nome do funcionário menor que 5 letras" });
    }

    if (!cpf.isValid(newOrder.cpf)) { // Corrija a validação do CPF
      return res.status(500).json({ message: "CPF inválido" });
    } else {
      newOrder.cpf = cpf.format(newOrder.cpf);
    }

    if (!validator.isEmail(newOrder.email)) { // Corrija a validação do e-mail
      return res.status(500).json({ message: "E-mail inválido" });
    }

    res.status(200).json({ orderId: orderId });
  });
});

orderRouter.put("/:id", async (req: Request, res: Response) => {
  const order: Funcionario = req.body;
  orderModel.Update(order, (err: Error) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.status(200).send();
  });
});

orderRouter.delete("/", async (req: Request, res: Response) => {
  const order: Funcionario = req.body;
  orderModel.Delete(order, (err: Error) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.status(200).send();
  });
});

export { orderRouter };
