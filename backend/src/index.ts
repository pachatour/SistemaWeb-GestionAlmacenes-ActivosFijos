import express from "express";
const app = express();
app.use(express.json());

//RUTAS
import usuarioRouter from "./routes/usuarioRouter";
app.use('/api/usuarios',usuarioRouter);

app.listen(3333,()=>{console.log("Servidor Rodando en http://localhost:3333")});