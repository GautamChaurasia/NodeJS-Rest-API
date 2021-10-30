const mong = require("mongoose");
const premSchema = new mong.Schema(
    {
    Policy_Num:{}, 
    Premium:{}, 
    Mode:{}, 
    Last_date:{}
    }
);

const prem = mong.model("prem", premSchema);

module.exports = prem;