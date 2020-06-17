var mongoose=require("mongoose");
var passportLocalMongoose=require("passport-local-mongoose");

var Cancelschemaqwe = new mongoose.Schema({
  ticket :[{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Ticket"
  }]

});

Cancelschemaqwe.plugin(passportLocalMongoose);

module.exports=mongoose.model("Cancelcel",Cancelschemaqwe);
