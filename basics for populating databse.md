
show dbs
use railway_reservation
  
show collections





db.seats.insert({one_A : 111, two_A : 111, three_A : 111, sleeper : 111 });

db.seats.insert(one_A : 111, two_A : 111, three_A : 111, sleeper : 111 });

db.seats.insert({one_A : 111, two_A : 111, three_A : 111, sleeper : 111 });

db.seats.insert({one_A : 111, two_A :111, three_A : 111, sleeper :111 });









db.seats.find();



//now one one we have to put obeject id of seats collection into train collection as we can see below train collection object id i " " .
so put their object id of correesponding seats collection after putting seats collections in our database.As after that mongodb will genearte its object_id aitomatically thus we have to put that id into our train collection






db.trains.insert({ source :"PATNA" , destination :"MANGALORE" , train_details : [ { number : "1225", name : "RAJDGI EXPRESS", fare : 1713, travel_time : "31H:05min:10sec", start_time : "19:10" } ], no_of_seats : { one_A : 111 , two_A : 111 , "three_A" : 111, sleeper : 111 }, no_of_station : 91, distance : "989 Km",seats_status : [ ObjectId("  ")]});


                                          put the obeject id above  -------^^^





db.trains.insert({ source : "MANGALORE", destination : "KOLKATA", train_details : [ { number : "7225", name : "KAVGDI EXPRESS", fare : 1143, travel_time : "29H:30min:21sec", start_time : "19:10" } ], no_of_seats : { one_A :11, two_A : 11 ,three_A :11, sleeper :11 }, no_of_station : 59, distance : "1979 Km", seats_status : [ ObjectId("     ")]});






