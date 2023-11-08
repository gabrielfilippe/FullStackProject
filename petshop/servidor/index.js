const express = require('express')
const app = express();
app.get('/', (request, response)=>{
    response.send("Olá João!")
});

app.get('/teste', (request, response)=>{
    response.send("endpoint de teste!")
});

app.listen(8080, ()=>{
    console.log("Servidor rodando na porta 8080!")

});

