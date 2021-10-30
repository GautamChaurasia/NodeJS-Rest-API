const mong = require("mongoose");
const paid_premSchema=new mong.Schema(
    {
       Receipt_Num:{}, 
       Receipt_Date:{}, 
       Policy_Num:{},
    }
);

const paid_prem = mong.model("paid_prem", paid_premSchema);

module.exports = paid_prem;