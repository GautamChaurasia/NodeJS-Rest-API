require("./db/conn")
const express = require("express");
const app = express();
const port = process.env.Port || 3000

app.use(express.json());
app.use(require("./router/routes"));

app.get("/", (req, res)=>{
    res.send("You are connected to the server");
});

app.listen(port, ()=>{
    console.log(`Server is listening on port: ${port}`);
});