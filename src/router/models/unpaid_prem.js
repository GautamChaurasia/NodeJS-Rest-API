const mong = require("mongoose");
const un_premSchema = new mong.Schema({
    Policy_Num:{}, 
    Fine:{}, 
    Lateness:{}
});

const un_prem = mong.model("un_prem", un_premSchema);

module.exports = un_prem;