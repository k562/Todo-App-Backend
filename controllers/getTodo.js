// import the model 
const Todo = require("../models/Todos");



exports.getTodo = async (req, res) => {
  try {

   // fetching all todo items from database
   const todos = await Todo.find({});

   //response
   res.status(200)
   .json({
    success:true,
    data:todos,
    message:"Entire Todo Data is fetched",

   });

  } catch (error) {
    
    console.error(error);
    res.status(500)
    .json({
      success:false,
      error:err.message,
      message:'Server Error'
    });
    
  }
};


exports.getTodoById = async(req,res)=>{
  try{
    //Extract todo item basis on id
    const id  = req.params.id;
    const todo = await Todo.findById( {_id:id})

    // data forgiven id not found
    if(!todo) {
      return res.status(404).json({
        success:false,
        message:`No Data Found with the given id ${id}`

      })
    }

    //Data for given id Found
    res.status(200).json({
      success:true,
      data:todo,
      message:`Todo ${id} data get successfully fetched `
    })
  } catch(error) {
 
    console.error(error);
    res.status(500)
    .json({
      success:false,
      error:err.message,
      message:'Server Error'
    });

  }
}