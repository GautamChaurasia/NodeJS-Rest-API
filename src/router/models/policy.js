const mong = require("mongoose");
const policySchema = new mong.Schema({
    Policy_Num:{}, 
    Customer_Num:{}, 
    Agent_code:{}, 
    DOC:{}, 
    Product:{}, 
    Sum_Assured:{}, 
    Pay_Period:{}, 
    Ins_Period:{}
});

const policy = mong.model("policy", policySchema);

module.exports = policy;