//Definição de metodos para ser usado pelo lado do cliente

import mysql from "mysql2";
import { Funcionario } from "../types/funcionario";
import { ResultSetHeader} from "mysql2";
import { dbConfig } from '../config/dbconfig';
const db = mysql.createConnection(dbConfig);

//inserir na tabela
export const Create = (order: Funcionario, callback: Function) => {
  const queryString =
    "INSERT INTO funcionario (fun_id, fun_name, fun_date, fun_cpf, fun_email, fun_tel) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(
    queryString,
    [order.id, order.nome, order.data_nasc, order.cpf, order.email, order.tel],
    (err, result) => {
      if (err) {
        callback(err);
      }
      const insertId = (<ResultSetHeader>result).insertId;
      callback(null, insertId);
    }
  );
};

//listar todos na tabela
export const Findall = (callback: Function) => {
  const queryString = `
      SELECT * from funcionario`;
  db.query(queryString, (err, result) => {
    if (err) {
      callback(err);
    }
    callback(result);
  });
};

//atualizar a tabela
export const Update = (order: Funcionario, callback: Function) => {
  const queryString = `UPDATE funcionario SET fun_nome=?, fun_date=?, fun_cpf=? fun_email=? fun_tel=? WHERE fun_id=?`;
  db.query(queryString, [order.id], (err, result) => {
    if (err) {
      callback(err);
    }
    callback(null);
  });
};

//deletar um funcionario da tabela
export const Delete = (order: Funcionario, callback: Function) => {
    const queryString = `DELETE funcionario WHERE fun_nome=?`;
    db.query(queryString, [order.id], (err, result) => {
      if (err) {
        callback(err);
      }
      callback(null);
    });
  };
