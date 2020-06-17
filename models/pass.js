 var mongoose=require("mongoose");
 var passportLocalMongoose=require("passport-local-mongoose");

 var Passenger = new mongoose.Schema({
   name:String,
   age:Number,
   sex:{ type:String , default:"Male"},
   email:String,
   phone: Number,
country:{ type:String , default:"INDIAN"}
  
 });

 Passenger.plugin(passportLocalMongoose);

 module.exports=mongoose.model("Pass",Passenger);
