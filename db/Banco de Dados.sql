create database funcionario;
use funcionario;

Create Table funcionario (
fun_id int primary key not null auto_increment,
fun_nome varchar(100),
fun_data_nasc date, 
fun_cpf varchar(100), 
fun_email varchar(100), 
fun_tel varchar(100)
);