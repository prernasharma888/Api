const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded());

app.use(require("./Router/route"))
app.listen(PORT,()=>{
    console.log('port is running on ' +PORT)
})

