//////////////////////////////////////////////////// now write for trains ///////////////////////////////
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@
@@@@@@@
@@@
@


db.passes.insert({ "_id" : ObjectId sex : "male", country : "INDIAN", name : "aw", age : 12, email : "", phone : 1234567890});





db.ticks.insert({status : "CONFIRMED", train_id : "5e8de9e053d11c8b3f5281f3", date : "2020-04-29", classs : "sleeper", PNR : "ui37WqL6wk49SAZ", price : 1183, pass : ObjectId("5e904aff92e92e27083c1bdc")})



db.bos.insert({tick : [ObjectId("5e904aff92e92e27083c1bdc") ],f:512});







db.trains.insert({ source : "PATNA", destination : "DELHI", train_details : [ { number : "4258", name : "GOMTI EXPRESS", fare : 2084, travel_time : "19H:30min:21sec", start_time : "10:00" } ], no_of_seats : { one_A : 54, two_A:68 , three_A : 15, sleeper : 71}, no_of_station : 31, distance : "3098 Km", seats_status : [ ObjectId("5e8d93372b984d6314d763d5")]});


db.trains.insert({ source : "MUMBAI", destination : "BANGALORE", train_details : [ { number : "5121", name : "GARIBH RATH EXPRESS", fare : 1111, travel_time : "12H:32min:01sec", start_time : "1:00" } ], no_of_seats : { one_A :44, two_A :68 , three_A :15, sleeper : 73 }, no_of_station : 10, distance : "1118 Km", seats_status : [ ObjectId("5e8d93372b984d6314d763d6")]});








db.trains.insert({ source :"CHENNAI" , destination :"PATNA" , train_details : [ { number : "1001", name : "RAJDHANI EXPRESS", fare : 1113, travel_time : "35H:05min:10sec", start_time : "15:00" } ], no_of_seats : { one_A : 24, two_A : 68, "three_A" : 15, sleeper : 73 }, no_of_station : 12, distance : "988 Km",seats_status : [ ObjectId("5e8d93372b984d6314d763d7")]});

db.trains.insert({ source : "PATNA", destination : "KOLKATA", train_details : [ { number : "0285", name : "SABARMATI EXPRESS", fare : 1143, travel_time : "20H:30min:21sec", start_time : "12:00" } ], no_of_seats : { one_A :94, two_A : 24 ,three_A :24, sleeper :51 }, no_of_station : 59, distance : "1975 Km", seats_status : [ ObjectId("5e8d93372b984d6314d763d8")]});




/////////////////////


db.trains.insert({ source :"BANGALORE" , destination : "CHENNAI", train_details : [ { number : "5000", name : "MANOVRI EXPRESS", fare : 2003, travel_time : "20H:30min:05sec", start_time : "3:00" } ], no_of_seats : { one_A : 44, two_A : 68, three_A : 15, sleeper : 12 }, no_of_station : 103, distance : "9941 Km", seats_status : [ ObjectId("5e8d93372b984d6314d763d9")]});


db.trains.insert({ source :"BANGALORE" , destination : "MUMBAI", train_details : [ { number : "2120", name : "AZAD HIND EXPRESS", fare : 1103, travel_time : "22H:50min:05sec", start_time : "3:30" } ], no_of_seats : { one_A : 24, two_A : 68, three_A : 15, sleeper : 88 }, no_of_station : 113, distance : "9941 Km", seats_status : [ ObjectId("5e8d93372b984d6314d763da")]});

//////////////////////




db.trains.insert({ source :"BANGALORE" , destination : "DELHI", train_details : [ { number : "5000", name : "KRISHNA EXPRESS", fare : 2003, travel_time : "20H:30min:05sec", start_time : "3:00" } ], no_of_seats : { one_A : 54, two_A : 68, three_A : 15, sleeper : 73 }, no_of_station : 103, distance : "9941 Km", seats_status : [ ObjectId("5e8d93372b984d6314d763db")]});


db.trains.insert({ source :"DELHI" , destination :"BANGALORE" , train_details : [ { number : "2120", name : "KOYNA EXPRESS", fare : 1103, travel_time : "22H:50min:05sec", start_time : "3:30" } ], no_of_seats : { one_A : 44, two_A : 68, three_A : 15, sleeper : 51 }, no_of_station : 113, distance : "9941 Km", seats_status : [ ObjectId("5e8d93372b984d6314d763dc")]});






db.trains.insert({ source :"DELHI" , destination : "PATNA", train_details : [ { number : "5000", name : "KRISHNA EXPRESS", fare : 2003, travel_time : "20H:30min:05sec", start_time : "3:00" } ], no_of_seats : { one_A : 94, two_A : 68, three_A : 15, sleeper : 12 }, no_of_station : 103, distance : "9941 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763de")]});


db.trains.insert({ source :"KOLKATA" , destination : "PATNA", train_details : [ { number : "2120", name : "AZAD HIND EXPRESS", fare : 1103, travel_time : "22H:50min:05sec", start_time : "3:30" } ], no_of_seats : { one_A : 44, two_A : 68, three_A : 24, sleeper : 88 }, no_of_station : 113, distance : "9941 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763df")]});











db.trains.insert({ source : "KOLKATA", destination : "DELHI", train_details : [ { number : "4258", name : "GANGA EXPRESS", fare : 2084, travel_time : "19H:30min:21sec", start_time : "10:00" } ], no_of_seats : { one_A : 24, two_A:24 , three_A : 15, sleeper : 19}, no_of_station : 31, distance : "3098 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763e0")]});


db.trains.insert({ source : "DELHI", destination : "KOLKATA", train_details : [ { number : "5171", name : "MAHANADI EXPRESS", fare : 1111, travel_time : "12H:32min:01sec", start_time : "1:00" } ], no_of_seats : { one_A :6, two_A :9 , three_A :15, sleeper : 73 }, no_of_station : 10, distance : "1118 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763e1")]});









db.trains.insert({ source : "MANGALORE", destination : "NAGPUR", train_details : [ { number : "4208", name : "KAVERI EXPRESS", fare : 2084, travel_time : "19H:30min:21sec", start_time : "10:00" } ], no_of_seats : { one_A : 64, two_A:68 , three_A : 15, sleeper : 51}, no_of_station : 31, distance : "3098 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763e2")]});


db.trains.insert({ source : "NAGPUR", destination : "MANGALORE", train_details : [ { number : "5221", name : "TAPTI EXPRESS", fare : 1111, travel_time : "19H:32min:01sec", start_time : "13:00" } ], no_of_seats : { one_A :24, two_A :68 , three_A :15, sleeper : 12 }, no_of_station : 10, distance : "1778 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763e3")]});








db.trains.insert({ source :"MANGALORE" , destination :"PATNA" , train_details : [ { number : "1005", name : "RAJDHANI EXPRESS", fare : 1113, travel_time : "35H:05min:10sec", start_time : "15:00" } ], no_of_seats : { one_A : 94, two_A : 68, "three_A" : 15, sleeper : 51 }, no_of_station : 12, distance : "988 Km",seats_status : [ ObjectId("5e8d93a82b984d6314d763e4")]});

db.trains.insert({ source : "MANGALORE", destination : "KOLKATA", train_details : [ { number : "7285", name : "KAVERI EXPRESS", fare : 1143, travel_time : "20H:30min:21sec", start_time : "12:00" } ], no_of_seats : { one_A :44, two_A : 68 ,three_A :15, sleeper :12 }, no_of_station : 59, distance : "1975 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763e5")]});




/////////////////////


db.trains.insert({ source :"MANGALORE" , destination : "CHENNAI", train_details : [ { number : "4000", name : "KUMAUN EXPRESS", fare : 2003, travel_time : "20H:30min:05sec", start_time : "3:00" } ], no_of_seats : { one_A : 44, two_A : 68, three_A : 15, sleeper : 12 }, no_of_station : 103, distance : "9941 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763e5")]});


db.trains.insert({ source :"MANGALORE" , destination : "MUMBAI", train_details : [ { number : "2520", name : "AZAD HIND EXPRESS", fare : 1103, travel_time : "22H:50min:05sec", start_time : "3:30" } ], no_of_seats : { one_A : 24, two_A : 68, three_A : 15, sleeper : 51 }, no_of_station : 113, distance : "9941 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763e6")]});

//////////////////////




db.trains.insert({ source :"MANGALORE" , destination : "DELHI", train_details : [ { number : "5500", name : "KUMAUN EXPRESS", fare : 2003, travel_time : "20H:30min:05sec", start_time : "3:00" } ], no_of_seats : { one_A : 9, two_A : 24, three_A : 15, sleeper : 99 }, no_of_station : 103, distance : "9941 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763e7")]});


db.trains.insert({ source :"MANGALORE" , destination :"BANGALORE" , train_details : [ { number : "2920", name : "KANCHANJUNGA EXPRESS", fare : 1103, travel_time : "22H:50min:05sec", start_time : "3:30" } ], no_of_seats : { one_A : 64, two_A : 6, three_A : 24, sleeper : 12 }, no_of_station : 113, distance : "9941 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763e8")]});






db.trains.insert({ source :"NAGPUR" , destination : "PATNA", train_details : [ { number : "5540", name : "GARWAL EXPRESS", fare : 2003, travel_time : "20H:30min:05sec", start_time : "3:00" } ], no_of_seats : { one_A : 24, two_A : 68, three_A : 15, sleeper : 73 }, no_of_station : 103, distance : "9941 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763e9")]});


db.trains.insert({ source :"NAGPUR" , destination : "MUMBAI", train_details : [ { number : "2020", name : "HIND EXPRESS", fare : 1103, travel_time : "22H:50min:05sec", start_time : "3:30" } ], no_of_seats : { one_A : 54, two_A : 68, three_A : 15, sleeper : 51 }, no_of_station : 113, distance : "9941 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763ea")]});











db.trains.insert({ source : "NAGPUR", destination : "DELHI", train_details : [ { number : "4208", name : "GANKUM EXPRESS", fare : 2084, travel_time : "19H:30min:21sec", start_time : "10:00" } ], no_of_seats : { one_A : 54, two_A:8 , three_A : 15, sleeper : 12}, no_of_station : 31, distance : "3098 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763eb")]});


db.trains.insert({ source : "NAGPUR", destination : "KOLKATA", train_details : [ { number : "5123", name : "DECCAN EXPRESS", fare : 1111, travel_time : "12H:32min:01sec", start_time : "1:00" } ], no_of_seats : { one_A :24, two_A :68, three_A :15, sleeper : 12 }, no_of_station : 10, distance : "1118 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763ec")]});







db.trains.insert({ source : "NAGPUR", destination : "CHENNAI", train_details : [ { number : "4208", name : "GANKUM EXPRESS", fare : 2084, travel_time : "19H:30min:21sec", start_time : "10:00" } ], no_of_seats : { one_A : 94, two_A:6 , three_A : 24, sleeper : 73}, no_of_station : 31, distance : "3098 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763ed")]});


db.trains.insert({ source : "NAGPUR", destination : "BANGALORE", train_details : [ { number : "5123", name : "DECCAN EXPRESS", fare : 1111, travel_time : "12H:32min:01sec", start_time : "1:00" } ], no_of_seats : { one_A :54, two_A :24 , three_A :15, sleeper : 51 }, no_of_station : 10, distance : "1118 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763ee")]});



@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




db.trains.insert({ source :"MANGALORE", destination :"NAGPUR", train_details : [ { number : "4268", name : "JAMMUNA EXPRESS", fare : 4484, travel_time : "9H:30min:11sec", start_time : "11:01" } ], no_of_seats : { one_A : 24, two_A:68 , three_A : 15, sleeper : 12}, no_of_station : 31, distance : "3098 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763ef")]});


db.trains.insert({ source : "NAGPUR", destination : "MANGALORE", train_details : [ { number : "5261", name : "KAVERI EXPRESS", fare : 1211, travel_time : "11H:32min:11sec", start_time : "13:10" } ], no_of_seats : { one_A :54, two_A :68 , three_A :15, sleeper : 73 }, no_of_station : 10, distance : "1778 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763f0")]});








db.trains.insert({ source :"PATNA" , destination :"MANGALORE" , train_details : [ { number : "1005", name : "RAJDHANI EXPRESS", fare : 1713, travel_time : "31H:05min:10sec", start_time : "15:10" } ], no_of_seats : { one_A : 54, two_A : 68, "three_A" : 45, sleeper : 51 }, no_of_station : 11, distance : "988 Km",seats_status : [ ObjectId("5e8d93a82b984d6314d763f1")]});

db.trains.insert({ source : "MANGALORE", destination : "KOLKATA", train_details : [ { number : "7685", name : "KAVERI EXPRESS", fare : 1143, travel_time : "20H:30min:21sec", start_time : "11:10" } ], no_of_seats : { one_A :54, two_A : 6 ,three_A :15, sleeper :99 }, no_of_station : 59, distance : "1975 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763f2")]});




/////////////////////


db.trains.insert({ source :"CHENNAI" , destination : "MANGALORE", train_details : [ { number : "7600", name : "KRISHNA EXPRESS", fare : 2013, travel_time : "21H:30min:05sec", start_time : "3:00" } ], no_of_seats : { one_A : 4, two_A : 68, three_A : 24, sleeper : 73 }, no_of_station : 103, distance : "9941 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763f3")]});


db.trains.insert({ source : "MUMBAI" , destination :"MANGALORE", train_details : [ { number : "6520", name : "HIND EXPRESS", fare : 1183, travel_time : "22H:50min:05sec", start_time : "1:10" } ], no_of_seats : { one_A : 24, two_A : 68, three_A : 65, sleeper : 99 }, no_of_station : 113, distance : "9941 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763f4")]});

//////////////////////




db.trains.insert({ source :"DELHI" , destination : "MANGALORE", train_details : [ { number : "5300", name : "PACIFIC EXPRESS", fare : 2433, travel_time : "21H:30min:05sec", start_time : "3:10" } ], no_of_seats : { one_A : 5, two_A : 68, three_A : 15, sleeper : 12 }, no_of_station : 103, distance : "9941 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763f5")]});


db.trains.insert({ source :"BANGALORE" , destination :"MANGALORE" , train_details : [ { number : "2920", name : "KAVERI EXPRESS", fare : 1903, travel_time : "21H:50min:05sec", start_time : "3:10" } ], no_of_seats : { one_A : 6, two_A : 68, three_A : 15, sleeper : 51 }, no_of_station : 113, distance : "9941 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763f6")]});






db.trains.insert({ source :"PATNA" , destination :"NAGPUR" , train_details : [ { number : "1940", name : "GARWAL EXPRESS", fare : 2323, travel_time : "21H:30min:05sec", start_time : "1:00" } ], no_of_seats : { one_A : 5, two_A : 48, three_A : 44, sleeper : 12 }, no_of_station : 103, distance : "9941 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763f7")]});


db.trains.insert({ source :  "MUMBAI", destination :"NAGPUR", train_details : [ { number : "6020", name : "HIMALAYAN EXPRESS", fare : 1323, travel_time : "22H:50min:05sec", start_time : "3:10" } ], no_of_seats : { one_A : 5, two_A : 24, three_A : 15, sleeper : 88 }, no_of_station : 113, distance : "9941 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763f8")]});











db.trains.insert({ source :"DELHI", destination : "NAGPUR", train_details : [ { number : "2268", name : "HIMALAYAN EXPRESS", fare : 9084, travel_time : "11H:30min:21sec", start_time : "11:00" } ], no_of_seats : { one_A : 5, two_A:6 , three_A : 95, sleeper : 73}, no_of_station : 31, distance : "3098 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763f9")]});


db.trains.insert({ source : "KOLKATA"  , destination :"NAGPUR", train_details : [ { number : "5623", name : "DECCAN EXPRESS", fare : 1111, travel_time : "11H:12min:11sec", start_time : "1:00" } ], no_of_seats : { one_A :4, two_A :64, three_A :45, sleeper : 51 }, no_of_station : 10, distance : "1118 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763fa")]});







db.trains.insert({ source : "CHENNAI" , destination :  "NAGPUR", train_details : [ { number : "5208", name : "QUEEN EXPRESS", fare : 2084, travel_time : "11H:10min:21sec", start_time : "11:00" } ], no_of_seats : { one_A : 9, two_A:68 , three_A : 24, sleeper : 12}, no_of_station : 31, distance : "3098 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763fb")]});


db.trains.insert({ source : "BANGALORE" , destination :  "NAGPUR", train_details : [ { number : "5663", name : "DECCAN EXPRESS", fare : 1111, travel_time : "11H:31min:01sec", start_time : "1:00" } ], no_of_seats : { one_A :2, two_A :68 , three_A :15, sleeper : 99 }, no_of_station : 10, distance : "1118 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763fc")]});







$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4



db.trains.insert({ source :"MANGALORE", destination :"NAGPUR", train_details : [ { number : "4228", name : "AHIMSA EXPRESS", fare : 4484, travel_time : "9H:39min:19sec", start_time : "19:09" } ], no_of_seats : { one_A : 6, two_A:66 , three_A : 65, sleeper : 88}, no_of_station : 31, distance : "3098 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763fd")]});


db.trains.insert({ source : "NAGPUR", destination : "MANGALORE", train_details : [ { number : "5261", name : "SATYAGRAHA EXPRESS", fare : 1211, travel_time : "19H:39min:91sec", start_time : "13:10" } ], no_of_seats : { one_A :44, two_A :68 , three_A :24, sleeper : 88 }, no_of_station : 19, distance : "1779 Km", seats_status : [ ObjectId("5e8d93a82b984d6314d763fe")]});








db.trains.insert({ source :"PATNA" , destination :"MANGALORE" , train_details : [ { number : "1225", name : "RAJDGI EXPRESS", fare : 1713, travel_time : "31H:05min:10sec", start_time : "19:10" } ], no_of_seats : { one_A : 11, two_A : 11, "three_A" : 11, sleeper : 11 }, no_of_station : 91, distance : "989 Km",seats_status : [ ObjectId("5e8dceea53d11c8b3f5281c0")]});

db.trains.insert({ source : "MANGALORE", destination : "KOLKATA", train_details : [ { number : "7225", name : "KAVGDI EXPRESS", fare : 1143, travel_time : "29H:30min:21sec", start_time : "19:10" } ], no_of_seats : { one_A :11, two_A : 11 ,three_A :11, sleeper :11 }, no_of_station : 59, distance : "1979 Km", seats_status : [ ObjectId("5e8dceea53d11c8b3f5281c1")]});




/////////////////////


db.trains.insert({ source :"CHENNAI" , destination : "MANGALORE", train_details : [ { number : "7920", name : "KRIGDI EXPRESS", fare : 2013, travel_time : "91H:30min:05sec", start_time : "9:00" } ], no_of_seats : { one_A : 11, two_A : 11, three_A : 11, sleeper : 11 }, no_of_station : 193, distance : "9991 Km", seats_status : [ ObjectId("5e8dceea53d11c8b3f5281c2")]});


db.trains.insert({ source : "MUMBAI" , destination :"MANGALORE", train_details : [ { number : "6920", name : "HINAN EXPRESS", fare : 1183, travel_time : "29H:50min:95sec", start_time : "1:90" } ], no_of_seats : { one_A : 11, two_A : 11, three_A : 11, sleeper : 11 }, no_of_station : 193, distance : "9941 Km", seats_status : [ ObjectId("5e8dceea53d11c8b3f5281c3")]});

//////////////////////




db.trains.insert({ source :"DELHI" , destination : "MANGALORE", train_details : [ { number : "5220", name : "PACGD EXPRESS", fare : 2433, travel_time : "91H:39min:95sec", start_time : "9:19" } ], no_of_seats : { one_A : 11, two_A : 11, three_A : 11, sleeper : 11 }, no_of_station : 103, distance : "9941 Km", seats_status : [ ObjectId("5e8dceea53d11c8b3f5281c4")]});


db.trains.insert({ source :"BANGALORE" , destination :"MANGALORE" , train_details : [ { number : "2220", name : "GODAN EXPRESS", fare : 1903, travel_time : "29H:50min:09sec", start_time : "3:90" } ], no_of_seats : { one_A : 11, two_A : 11, three_A : 11, sleeper : 11 }, no_of_station : 113, distance : "9941 Km", seats_status : [ ObjectId("5e8dceed53d11c8b3f5281c5")]});






db.trains.insert({ source :"PATNA" , destination :"NAGPUR" , train_details : [ { number : "1220", name : "DIAMOND EXPRESS", fare : 2323, travel_time : "29H:39min:05sec", start_time : "1:09" } ], no_of_seats : { one_A : 64, two_A : 6, three_A : 24, sleeper : 12 }, no_of_station : 103, distance : "9941 Km", seats_status : [ ObjectId("5e8dcef753d11c8b3f5281c6")]});


db.trains.insert({ source :  "MUMBAI", destination :"NAGPUR", train_details : [ { number : "6220", name : "HIMAL EXPRESS", fare : 1323, travel_time : "29H:50min:95sec", start_time : "3:19" } ], no_of_seats : { one_A : 24, two_A : 6, three_A : 15, sleeper : 73 }, no_of_station : 113, distance : "9941 Km", seats_status : [ ObjectId("5e8dcef753d11c8b3f5281c7")]});











db.trains.insert({ source :"DELHI", destination : "NAGPUR", train_details : [ { number : "2228", name : "STEEL EXPRESS", fare : 9084, travel_time : "22H:30min:21sec", start_time : "19:00" } ], no_of_seats : { one_A : 54, two_A:6 , three_A : 15, sleeper : 51}, no_of_station : 31, distance : "3098 Km", seats_status : [ ObjectId("5e8dcef753d11c8b3f5281c8")]});


db.trains.insert({ source : "KOLKATA"  , destination :"NAGPUR", train_details : [ { number : "5223", name : "DECC EXPRESS", fare : 1111, travel_time : "22H:12min:11sec", start_time : "1:00" } ], no_of_seats : { one_A :54, two_A :8, three_A :15, sleeper : 12 }, no_of_station : 10, distance : "1118 Km", seats_status : [ ObjectId("5e8dcef753d11c8b3f5281c9")]});







db.trains.insert({ source : "CHENNAI" , destination :  "NAGPUR", train_details : [ { number : "5228", name : "IRON  EXPRESS", fare : 2084, travel_time : "22H:10min:21sec", start_time : "11:00" } ], no_of_seats : { one_A : 24, two_A:68 , three_A : 15, sleeper : 12}, no_of_station : 31, distance : "3098 Km", seats_status : [ ObjectId("5e8dcef753d11c8b3f5281ca")]});


db.trains.insert({ source : "BANGALORE" , destination :  "NAGPUR", train_details : [ { number : "5223", name : "ACCAN EXPRESS", fare : 1111, travel_time : "22H:31min:01sec", start_time : "1:00" } ], no_of_seats : { one_A :94, two_A :6 , three_A :24, sleeper : 73 }, no_of_station : 10, distance : "1118 Km", seats_status : [ ObjectId("5e8dcef753d11c8b3f5281cb")]});




db.trains.insert({ source : "PATNA", destination : "DELHI", train_details : [ { number : "0358", name : "SUMATI EXPRESS", fare : 2003, travel_time : "11H:11min:21sec", start_time : "10:00" } ], no_of_seats : { one_A : 54, two_A:24 , three_A : 15, sleeper : 51}, no_of_station : 31, distance : "3098 Km", seats_status : [ ObjectId("5e8dcefd53d11c8b3f5281cc")]});


db.trains.insert({ source : "MUMBAI", destination : "BANGALORE", train_details : [ { number : "0321", name : "PRAYOGA  EXPRESS", fare : 1103, travel_time : "11H:32min:01sec", start_time : "1:00" } ], no_of_seats : { one_A :2, two_A :68 , three_A :15, sleeper : 1 }, no_of_station : 10, distance : "1118 Km", seats_status : [ ObjectId("5e8dcefd53d11c8b3f5281cd")]});








db.trains.insert({ source :"CHENNAI" , destination :"PATNA" , train_details : [ { number : "0301", name : "RAHDAKA EXPRESS", fare : 1033, travel_time : "11H:05min:10sec", start_time : "15:00" } ], no_of_seats : { one_A : 5, two_A : 68, "three_A" : 15, sleeper : 73 }, no_of_station : 12, distance : "988 Km",seats_status : [ ObjectId("5e8dcefd53d11c8b3f5281ce")]});

db.trains.insert({ source : "PATNA", destination : "KOLKATA", train_details : [ { number : "0385", name : "SABARMATI EXPRESS", fare : 0343, travel_time : "11H:30min:21sec", start_time : "12:00" } ], no_of_seats : { one_A :5, two_A : 6 ,three_A :45, sleeper :5 }, no_of_station : 59, distance : "1975 Km", seats_status : [ ObjectId("5e8dcefd53d11c8b3f5281cf")]});




/////////////////////


db.trains.insert({ source :"BANGALORE" , destination : "CHENNAI", train_details : [ { number : "0300", name : "MANOHARI EXPRESS", fare : 0303, travel_time : "33H:30min:33sec", start_time : "3:00" } ], no_of_seats : { one_A : 4, two_A : 6, three_A : 24, sleeper : 73 }, no_of_station : 103, distance : "9941 Km", seats_status : [ ObjectId("5e8dcefd53d11c8b3f5281d1")]});

1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
db.trains.insert({ source :"BANGALORE" , destination : "MUMBAI", train_details : [ { number : "2030", name : "RAJYA EXPRESS", fare : 1033, travel_time : "22H:33min:05sec", start_time : "3:30" } ], no_of_seats : { one_A : 24, two_A : 68, three_A : 65, sleeper : 9 }, no_of_station : 113, distance : "9941 Km", seats_status : [ ObjectId("5e8dcefd53d11c8b3f5281d2")]});

//////////////////////




db.trains.insert({ source :"BANGALORE" , destination : "DELHI", train_details : [ { number : "5030", name : "KUMANI EXPRESS", fare : 2033, travel_time : "33H:33min:05sec", start_time : "3:00" } ], no_of_seats : { one_A : 5, two_A : 6, three_A : 15, sleeper : 12 }, no_of_station : 103, distance : "9941 Km", seats_status : [ ObjectId("5e8dcefd53d11c8b3f5281d3")]});













111111111111111111111111111111111111111111111111111111111111111

db.trains.insert({ source :"NAGPUR" , destination :"BANGALORE" , train_details : [ { number : "0320", name : "KURLEA EXPRESS", fare : 1103, travel_time : "33H:50min:05sec", start_time : "3:30" } ], no_of_seats : { one_A :6, two_A : 68, three_A : 15, sleeper : 51 }, no_of_station : 113, distance : "9941 Km", seats_status : [ ObjectId("5e8dcefd53d11c8b3f5281d2")]});






db.trains.insert({ source :"NAGPUR" , destination : "PATNA", train_details : [ { number : "5003", name : "ISPAT EXPRESS", fare : 2003, travel_time : "20H:30min:33sec", start_time : "3:00" } ], no_of_seats : { one_A : 5, two_A : 4, three_A : 44, sleeper : 12 }, no_of_station : 103, distance : "9941 Km", seats_status : [ ObjectId("5e8dcefd53d11c8b3f5281d4")]});


db.trains.insert({ source :"KOLKATA" , destination : "NAGPUR", train_details : [ { number : "2103", name : "ISPAT EXPRESS", fare : 0303, travel_time : "22H:50min:33sec", start_time : "3:30" } ], no_of_seats : { one_A : 5, two_A : 24, three_A : 15, sleeper : 8 }, no_of_station : 113, distance : "9941 Km", seats_status : [ ObjectId("5e8dcefd53d11c8b3f5281d5")]});











db.trains.insert({ source : "NAGPUR", destination : "DELHI", train_details : [ { number : "0358", name : "SARASWATI EXPRESS", fare : 0384, travel_time : "19H:30min:33sec", start_time : "10:00" } ], no_of_seats : { one_A : 24, two_A:24 , three_A : 15, sleeper : 19}, no_of_station : 31, distance : "3098 Km", seats_status : [ ObjectId("5e8dcefd53d11c8b3f5281d6")]});


db.trains.insert({ source : "NAGPUR", destination : "KOLKATA", train_details : [ { number : "0371", name : "KUMAR EXPRESS", fare : 1031, travel_time : "12H:32min:33sec", start_time : "1:00" } ], no_of_seats : { one_A :5, two_A :6 , three_A :95, sleeper : 7 }, no_of_station : 10, distance : "1118 Km", seats_status : [ ObjectId("5e8dcefd53d11c8b3f5281d7")]});









db.trains.insert({ source : "MANGALORE", destination : "NAGPUR", train_details : [ { number : "0608", name : "COALFIED EXPRESS", fare : 2006, travel_time : "03H:03min:03sec", start_time : "10:00" } ], no_of_seats : { one_A : 4, two_A:64 , three_A : 45, sleeper : 51}, no_of_station : 31, distance : "3068 Km", seats_status : [ ObjectId("5e8dcefd53d11c8b3f5281d8")]});


db.trains.insert({ source : "NAGPUR", destination : "MANGALORE", train_details : [ { number : "5061", name : "POORVA EXPRESS", fare : 0611, travel_time : "19H:32min:01sec", start_time : "13:00" } ], no_of_seats : { one_A :9, two_A :6 , three_A :24, sleeper : 12 }, no_of_station : 06, distance : "1706 Km", seats_status : [ ObjectId("5e8dcefd53d11c8b3f5281d9")]});







db.trains.insert({ source :"MANGALORE" , destination :"PATNA" , train_details : [ { number : "1065", name : "RAJDHANI EXPRESS", fare : 1063, travel_time : "035H035min:03sec", start_time : "15:00" } ], no_of_seats : { one_A : 11, two_A : 11, "three_A" : 11, sleeper : 11 }, no_of_station : 06, distance : "068 Km",seats_status : [ ObjectId("5e8dcf7753d11c8b3f5281da")]});

db.trains.insert({ source : "MANGALORE", destination : "KOLKATA", train_details : [ { number : "7065", name : "KAVERI EXPRESS", fare : 0643, travel_time : "03H:30min031sec", start_time : "12:00" } ], no_of_seats : { one_A :11, two_A : 11 ,three_A :11, sleeper :11 }, no_of_station : 06, distance : "1065 Km", seats_status : [ ObjectId("5e8dcf7753d11c8b3f5281db")]});




/////////////////////


db.trains.insert({ source :"MANGALORE" , destination : "CHENNAI", train_details : [ { number : "4060", name : "POORVA EXPRESS", fare :063, travel_time : "03H030min:03sec", start_time : "3:00" } ], no_of_seats : { one_A : 11, two_A : 11, three_A : 11, sleeper : 11 }, no_of_station : 063, distance : "9941 Km", seats_status : [ ObjectId("5e8dcf7753d11c8b3f5281dc")]});


db.trains.insert({ source :"MANGALORE" , destination : "MUMBAI", train_details : [ { number : "2060", name : "AZAD HIND EXPRESS", fare : 1063, travel_time : "03H:50min:03sec", start_time : "3:30" } ], no_of_seats : { one_A : 11, two_A : 11, three_A : 11, sleeper : 11 }, no_of_station : 063, distance : "9061 Km", seats_status : [ ObjectId("5e8dcf7753d11c8b3f5281dd")]});





db.trains.insert({ source :"MANGALORE" , destination : "DELHI", train_details : [ { number : "0600", name : "POORVA  EXPRESS", fare : 0603, travel_time : "030H:30min:05sec", start_time : "3:00" } ], no_of_seats : { one_A :11, two_A : 11, three_A : 11, sleeper : 11 }, no_of_station : 063, distance : "9941 Km", seats_status : [ ObjectId("5e8dcf7753d11c8b3f5281de")]});


db.trains.insert({ source :"MANGALORE" , destination :"BANGALORE" , train_details : [ { number : "0620", name : "PASCHIM EXPRESS", fare : 0603, travel_time : "22H:50min035sec", start_time : "3:30" } ], no_of_seats : { one_A : 11, two_A :11, three_A : 11, sleeper : 11 }, no_of_station : 063, distance : "9941 Km", seats_status : [ ObjectId("5e8dcf7953d11c8b3f5281df")]});+
