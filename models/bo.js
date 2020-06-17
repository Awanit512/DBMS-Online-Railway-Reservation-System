var mongoose=require("mongoose");
var passportLocalMongoose=require("passport-local-mongoose");

var Bo = new mongoose.Schema({
  tick :[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Tick"
  }],
f:{type:Number,default:512}

});

Bo.plugin(passportLocalMongoose);

module.exports=mongoose.model("Bo",Bo);
