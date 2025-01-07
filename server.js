const expres = require('express')

const app = expres();

//used to parse req.body in express -> Put or Post 
const bodyParser = require('body-parser')

//speciffically parse json data  and add it to the request.body object 
app.use(bodyParser.json());


app.listen(3000,()=>{
  console.log("Server started at port no 3000");
  
});

app.get('/',(request,response)=> {
  response.send("Hello kks this side ")
})


app.post('/api/cars',(request,response)=> {
  const {name,brand} = request.body;
  console.log(name);
  console.log(brand);
  response.send("Car Submitted Successfully.")  
  
})  