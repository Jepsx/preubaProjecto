const express = require("express");
const cors = require("cors");
const mongoose=require("mongoose");
const app = express();
const UsersRoute = require("./routes/users.route");
const PocketsRoute = require("./routes/pockets.route");
const TransactionRoute= require("./routes/transaction.rout");

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());


// conexión a la DB
mongoose.connect(
  "mongodb+srv://admin:MjGTXss8vqhQmqqS@cluster0.1feml.mongodb.net/IntelliDB?retryWrites=true&w=majority",
  {useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: false,
     useCreateIndex: true
    }



  ).then(()=>{
    console.log("Conexión exitosa a DB")

  }).catch(()=>{

    console.log("Error en conexion a DB")
  });


//USO DE LAS RUTAS

app.use("/api", UsersRoute);
app.use("/api/pockets", PocketsRoute);



module.exports = app;
