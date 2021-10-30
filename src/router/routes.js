const express = require("express");
const router = express.Router();

const agent = require(`./models/agent`);
const customer = require(`./models/customer`);
const paid_prem = require(`./models/paid_prem`);
const policy = require(`./models/policy`);
const prem = require(`./models/prem`);
const unpaid_prem = require(`./models/unpaid_prem`);

/*---------Agent--------------------------------------------------------------------------------------- */

router.get("/agent", async (req, res)=>{
    try{
        let agentdisp = await agent.find({}, {_id:0, __v:0});
        res.status(200).send(agentdisp);
    }catch(e){
        res.status(400).send("Oops! Something went wrong");
    }
});

router.post("/agent", async (req, res) => {
    try{
        let agententry = agent(req.body);
        let agententstat = await agententry.save();
        res.status(201).send("Agent Data is stored successfully");
    }catch(e){
        res.status(400).send("Agent data could not be stored, please try Again.");
    }
});

router.put("/agent", async (req, res) => {
    try{
        let {Agent_code, Agent_name, DOB, Address, Pincode, Branch, Contact_Num} = req.body
	    let agentupdstat = await agent.updateOne({"Agent_code": Agent_code}, {
		"$set": {
			Agent_name:Agent_name, 
            DOB:DOB, 
            Address:Address, 
            Pincode:Pincode, 
            Branch:Branch, 
            Contact_Num:Contact_Num
		        }
    	});
	    res.status(200).send("Agent data updated successfully");
    }catch(e){
        res.send("Agent data could not be updated");
    };
});

router.delete("/agent", async (req, res) => {
    try{
        let d_data = await agent.deleteOne({"Agent_code": req.body.Agent_code});
	    res.status(200).send("Agent deleted successfully");
    }catch(e){
        res.send("Agent could not be deleted, try again");
    }
});

/*---------Customer--------------------------------------------------------------------------------------- */

router.get("/customer", async (req, res)=>{
    try{
        let customerdisp = await customer.find({}, {_id:0, __v:0});
        res.status(200).send(customerdisp);
    }catch(e){
        res.status(400).send("Oops! Something went wrong");
    }
});

router.post("/customer", async (req, res) => {
    try{
        let customerentry = customer(req.body);
        let customerentstat = await customerentry.save();
        res.status(201).send("Customer data is stored successfully");
    }catch(e){
        res.status(400).send("Customer data could not be stored, please try Again.");
    }
});

router.put("/customer", async (req, res) => {
    try{
        let {Customer_Num, First_Name, Middle_Name, Last_Name, Gender, DOB, Address, Pincode, Contact_Number, Mother_Name, Mother_Status, Father_Name, Father_Status, Marital_Status, Spouse} = req.body
	    let customerupdstat = await customer.updateOne({"Customer_Num":Customer_Num}, {
		"$set": {
            First_Name,
            Middle_Name,
            Last_Name,
            Gender,
            DOB,
            Address,
            Pincode,
            Contact_Number,
            Mother_Name,
            Mother_Status,
            Father_Name,
            Father_Status,
            Marital_Status,
            Spouse
		        }
    	});
	    res.status(200).send("Customer data updated successfully");
    }catch(e){
        res.send("Customer data could not be updated");
    };
});

router.delete("/customer", async (req, res) => {
    try{
        let d_data = await customer.deleteOne({"Customer_Num":req.body.Customer_Num});
	    res.status(200).send("Customer deleted successfully");
    }catch(e){
        res.send("Customer could not be deleted, try again");
    }
});

/*---------paid_prem--------------------------------------------------------------------------------------- */

router.get("/paid", async (req, res)=>{
    try{
        let disp = await paid_prem.find({}, {_id:0, __v:0});
        res.status(200).send(disp);
    }catch(e){
        res.status(400).send("Oops! Something went wrong");
    }
});

router.post("/paid", async (req, res) => {
    try{
        let entry = paid_prem(req.body);
        let entstat = await entry.save();
        res.status(201).send("Transaction successful");
    }catch(e){
        res.status(400).send("Transaction failed!, please try Again.");
    }
});

router.put("/paid", async (req, res) => {
    try{
        let {Receipt_Num, Receipt_Date, Policy_Num} = req.body
	    let updstat = await paid_prem.updateOne({"Policy_Num": Policy_Num}, {
		"$set": {
			Receipt_Num, 
            Receipt_Date, 
		        }
    	});
	    res.status(200).send("Transaction data updated successfully");
    }catch(e){
        res.send("Transaction data could not be updated");
    };
});

router.delete("/paid", async (req, res) => {
    try{
        let d_data = await paid_prem.deleteOne({"Policy_Num": req.body.Policy_Num});
	    res.status(200).send("Refund successful");
    }catch(e){
        res.send("Refund failed, try again");
    }
});

/*---------premium--------------------------------------------------------------------------------------- */

router.get("/premium", async (req, res)=>{
    try{
        let disp = await prem.find({}, {_id:0, __v:0});
        res.status(200).send(disp);
    }catch(e){
        res.status(400).send("Oops! Something went wrong");
    }
});

router.post("/premium", async (req, res) => {
    try{
        let entry = prem(req.body);
        let entstat = await entry.save();
        res.status(201).send("Premium Data saved successfully");
    }catch(e){
        res.status(400).send("Premium Data could not be saved!, please try Again.");
    }
});

router.put("/premium", async (req, res) => {
    try{
        let {Policy_Num, Premium, Mode, Last_date} = req.body
	    let updstat = await prem.updateOne({"Policy_Num": Policy_Num}, {
		"$set": {
            Premium, 
            Mode,
            Last_date
		        }
    	});
	    res.status(200).send("Premium data updated successfully");
    }catch(e){
        res.send("Premium data could not be updated");
    };
});

router.delete("/premium", async (req, res) => {
    try{
        let d_data = await prem.deleteOne({"Policy_Num": req.body.Policy_Num});
	    res.status(200).send("Premium details deleted successfully");
    }catch(e){
        res.send("Premium details could not be deleted, try again");
    }
});

/*---------policy--------------------------------------------------------------------------------------- */

router.get("/policy", async (req, res)=>{
    try{
        let disp = await policy.find({}, {_id:0, __v:0});
        res.status(200).send(disp);
    }catch(e){
        res.status(400).send("Oops! Something went wrong");
    }
});

router.post("/policy", async (req, res) => {
    try{
        let entry = policy(req.body);
        let entstat = await entry.save();
        res.status(201).send("Policy Data saved successfully");
    }catch(e){
        res.status(400).send("Policy Data could not be saved!, please try Again.");
    }
});

router.put("/policy", async (req, res) => {
    try{
        let {Policy_Num, Customer_Num, Agent_code, DOC, Product, Sum_Assured, Pay_Period, Ins_Period} = req.body
	    let updstat = await policy.updateOne({"Policy_Num": Policy_Num}, {
		"$set": { 
            Customer_Num, 
            Agent_code, 
            DOC, 
            Product, 
            Sum_Assured, 
            Pay_Period, 
            Ins_Period
		        }
    	});
	    res.status(200).send("Policy data updated successfully");
    }catch(e){
        res.send("Policy data could not be updated");
    };
});

router.delete("/policy", async (req, res) => {
    try{
        let d_data = await policy.deleteOne({"Policy_Num": req.body.Policy_Num});
	    res.status(200).send("Policy details deleted successfully");
    }catch(e){
        res.send("Policy details could not be deleted, try again");
    }
});

module.exports = router;