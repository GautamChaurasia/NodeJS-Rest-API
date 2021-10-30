const mong = require("mongoose");
const agentSchema = new mong.Schema({
    Agent_code:{
        type:String,
        required:true,
        unique: true
    }, 
    Agent_name:{
        type:String,
        required:true,
    }, 
    DOB:{type:String}, 
    Address:{}, 
    Pincode:{type:Number}, 
    Branch:{}, 
    Contact_Num:{
        type:Number
    }
});

const agent = mong.model("agent", agentSchema);

module.exports = agent;