const express=require("express");
const app=express();
const cors=require("cors")
const bodyParser = require("body-parser");
const mysql=require("mysql2");
const pool=mysql.createPool({
    host:"localhost",
    user:"root",
    database:"app_tarefas",
    password:"lucas312@Lucas",
    port:3306
})
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.post("/criando",(req,res)=>{
    pool.getConnection((err,connection)=>{
        if(err){
            console.log(err);
            return;
        }
        connection.query(`INSERT INTO tarefas(titulo,description) VALUES(?,?)`,[req.body?.nome,req.body?.description],(err,valor)=>{
            if(err){
                console.log(err);
                return;
            }
            res.send(true)
        })
    })
})
app.get("/api",(req,res)=>{
    pool.getConnection(()=>{
        pool.query("SELECT * FROM tarefas",(err,valor)=>{
            if(err){
                console.log(err);
                return;
            }
            res.send(valor)
        })
    })
})
app.listen(5000,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Rodando...")
})