//Ligação dos metodos do BD para uso do lado do Cliente 

import express, { Request, Response } from "express";
import * as orderModel from "../model/order";
import { Funcionario } from "../types/funcionario";
import { cpf } from "cpf-cnpj-validator";
const orderRouter = express.Router();

//comando usando get para listar todo os funcionarios
orderRouter.get("/", async (req: Request, res: Response) => {
  orderModel.Findall((err: Error, orders: Funcionario[]) => {
    if (err) {
      return res.status(500).json({ errorMessage: err.message });
    }
    res.status(200).json({ data: orders });
  });
});

//comando usando post para adicionar um funcionario
orderRouter.post("/", async (req: Request, res: Response) => {
  const newOrder: Funcionario = req.body;
  orderModel.Create(newOrder, (err: Error, orderId: number) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    if (newOrder.nome.length < 5) {
      return res.status(500).json({ message: "nome do funcionario menor que 5 letras" });
    }

    if (cpf.isValid(newOrder.cpf)) {
      return res.status(500).json({ message: "cpf invalido" });
    } else {
      newOrder.cpf = cpf.format(newOrder.cpf);
    }

    if (!require("validator").validator.isEmail(newOrder.email)) {
      return res.status(500).json({ message: "email invalido" });
    }

    res.status(200).json({ orderId: orderId });
  });
});

//comando usando put para atualizar um funcionario pelo id
orderRouter.put("/:id", async (req: Request, res: Response) => {
  const order: Funcionario = req.body;
  orderModel.Update(order, (err: Error) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.status(200).send();
  });
});

//comando usando delete para deletar um funcionario pelo nome
orderRouter.delete("/:nome", async (req: Request, res: Response) => {
  const order: Funcionario = req.body;
  orderModel.Delete(order, (err: Error) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.status(200).send();
  });
});

export { orderRouter };
