const mong = require("mongoose");
const customerSchema = new mong.Schema({
    Customer_Num:{}, 
    First_Name:{}, 
    Middle_Name:{}, 
    Last_Name:{}, 
    Gender:{}, 
    DOB:{}, 
    Address:{}, 
    Pincode:{}, 
    Contact_Number:{}, 
    Mother_Name:{}, 
    Mother_Status:{}, 
    Father_Name:{}, 
    Father_Status:{}, 
    Marital_status:{}, 
    Spouse:{},
});

const customer = mong.model("customer", customerSchema);

module.exports = customer;