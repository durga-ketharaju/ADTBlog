import mongoose from "mongoose";
const Schema=mongoose.Schema;
const blogSchema=new Schema({
    commentorName:{
        type:String,
        required:true,
    },
    commentortext:{
        type:String,
        required:true,
    },
    creationDate:{
        type:String,
        required:false,

    },
    Reference:{
        type:String,
        require:true,
    },


    
});
export default mongoose.model("Blog",blogSchema);
