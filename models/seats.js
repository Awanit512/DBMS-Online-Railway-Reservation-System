var mongoose=require("mongoose");
var passportLocalMongoose=require("passport-local-mongoose");

var Seatsschema = new mongoose.Schema({
   one_A:Number,
  	two_A:Number,
  	three_A:Number,
  	sleeper:Number
  
});

Seatsschema.plugin(passportLocalMongoose);

module.exports=mongoose.model("Seats",Seatsschema);
