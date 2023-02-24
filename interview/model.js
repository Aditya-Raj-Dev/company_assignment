const mongoose=require("mongoose")

const CompSchema=mongoose.Schema({
    data:{type:Array,required:true}
})

const Compmodel=mongoose.model("comp",CompSchema)

module.exports={Compmodel}