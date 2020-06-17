var mongoose=require("mongoose");
var passportLocalMongoose=require("passport-local-mongoose");

var TrainDataschema = new mongoose.Schema({
  source:String,
  destination: String ,
  train_details:[{
  	number:String,
  	name:String,
	fare:Number,
    travel_time:String,
    start_time: String,
    
  }],
	no_of_seats:{one_A:Number,two_A:Number,three_A:Number,sleeper:Number},
seats_status:[{
type: mongoose.Schema.Types.ObjectId,
            ref: "Seats"
}],
  no_of_station:Number,
  distance:   String
});

TrainDataschema.plugin(passportLocalMongoose);

module.exports=mongoose.model("Train",TrainDataschema);
