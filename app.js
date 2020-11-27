const express = require('express');
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express();
const router = express.Router();

app.use('/', router)
app.use("/public", express.static(path.join(__dirname, '/public')));

router.get("/",function(req,res){
    res.sendFile(__dirname + "/views/" + "index.html");
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))