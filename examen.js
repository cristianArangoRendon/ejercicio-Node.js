const express = require('express');
const app = express();

const host ='localhost';
const port = 3000;



app.listen(port,host, () => {
    console.log(`este es el servidor: http://${host}:${port}`);
})

//params

//app.get('/home/:Genero/:nombre/:edad', (req, res)=> {
  //  res.send(`tu genero es ${req.params.Genero},tu nombre ${req.params.nombre} y edad ${req.params.edad}`);
//})


//query
//http://localhost:3000/home?nombre=cristian&genero=masculino

//app.get('/home', (req, res)=> {
  //  res.send(`tu nombre es ${req.query.nombre} y genero ${req.query.genero}`);
//})

//body con json
//app.use(express.json())
//app.get('/home', (req, res)=>{

  //  res.send(`Estos son los datos almacenados en el body: ${req.body.animal} de raza ${req.body.raza}`);
    //console.log(req.body);
//})

//app.use(express.urlencoded({ extended: false }))
//app.get('/formulario', (req, res)=>{
  //  res.send((`${req.body.animal},${req.body.raza},${req.body.nombre}`));

    //const valor =(`${req.body.animal},${req.body.raza},${req.body.nombre}`)
    //console.log(valor);
//})




//este es el body mediante texto

//app.use(express.text());
//app.get("/home", (req, res)=> {
  //  res.send(`work`);
    //console.log(req.body);
//})