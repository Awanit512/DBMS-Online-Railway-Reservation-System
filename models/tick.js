var mongoose=require("mongoose");
var passportLocalMongoose=require("passport-local-mongoose");

var Tick = new mongoose.Schema({
  status:String,
  train_id:String,
date:String,
classs:String,
price:Number,
PNR:String,
pass:{
type: mongoose.Schema.Types.ObjectId,
            ref: "Pass"
}
  
});

Tick.plugin(passportLocalMongoose);

module.exports=mongoose.model("Tick",Tick);
