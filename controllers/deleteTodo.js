// import the model 
const Todo = require("../models/Todos");

// define route handler 
exports.deleteTodo = async (req, res) => {
  try {
 
  const {id} = req.params;

  await Todo.findByIdAndDelete(id);

  res.json({
    success:true,
    message:"Todo Deleted"
  })
    
  } catch (error) {
    
    console.error(error);
    res.status(500)
    .json({
      success:false,
      error:error.message,
      message:"server error"
    })
    
  
  }
};
