const  mongoose = require("mongoose");

const todosSchema = new mongoose.Schema(
  {
    title:{
      type:String,
      required:true,
      maxlength:50,
    },
    description: {
      type:String,
      required:true,
      maxLength:50,
    },
    createdAt:{
      type:Date,
      required:true,
      default:Date.now(),
    },
    updateAt:{
      type:Date,
      required:true,
      default:Date.now(),
    }
  }
)

module.exports = mongoose.model("Todo",todosSchema);