const mong = require("mongoose");
const db = "<mongo server address>"

const conndb = async()=>{
try{
    await mong.connect(db, {
        useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false
    });
    console.log(`Connected to Database successfully`);
    } catch(e){
        console.log(`Could not connect to database`);
        }
};

conndb();