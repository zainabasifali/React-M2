const e = require("express");
const app = e();
app.use(e.urlencoded({ extended:true }))
app.use(e.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });
  
app.get('/', function(req, res) {
  res.send("Listening")
})
app.post('/form',(req,res)=>{
    res.send(req.body)
    console.log(req.body)
})

app.listen(9000)