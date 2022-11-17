//importar o express 
//tecnologia backend no javascript
const e = require("express");
const express = require("express")
const app = express();

app.listen(8080, ()=>{
    console.log("servidor iniciando")
});

app.get("/", (req, res)=>{
    res.send("SEJA BEM VINDO(A)")

});

app.get("/informacoes",(req, res)=>{
    let empresa = {nome: "21", idade:2}
    return res.json(empresa)


});

app.get("/buscar", (req, res)=>{
    const nome = req.query.nome;
    return res.json(
        {nome}
    );
});

let cliente1 = {nome: "maria", email:"k@gmail"}
let cliente2 = {nome: "maria", email:"l@gmail"}
let cliente3 = {nome: "toin", email:"j@gmail"}

let clientes = [cliente1, cliente2,cliente3]

app.get("/listarclientes",(req, res)=>{
    return res.json(clientes)
});


app.get("/buscar", (req,res)=>{
    const nome = req.query.nome;

    let filtro = clientes.filter(e=> e.nome
    =nome);

 return res.json(
     filtro
 );

});

app.post("/salvar", (req, res)=>{
    const nome = req.body.nome;
    const email = req.body.email;
    let clienterecebido = (nome,email);
    clientes.push(clienterecebido);

});


app.put("/editar/:id", (req, res)=>{
     const id = req.params.nome;
     const {email, nome} = req.body;
     let objeto = {nome, email}
     let posicao = clientes.findIndex(
         el=>el.nome == nome);
         clientes[posicao] = objeto;
         return res.json(clientes);
     
});
app.delete("/deletar/:nome", (req,res)=>{
   const parametro = req.params.nome;
   let posicao = clientes.findIndex(el => el.nome == nome);
   clientes.slice(i, posicao);
   res.send("apagando com sucesso");
});