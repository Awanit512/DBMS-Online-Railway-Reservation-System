
//==================================== package requirements ================================

const   express        =   require("express"),
        app            =   express(),
        mongoose       =   require("mongoose"),
        bodyParser     =   require("body-parser"),
        passport       =   require("passport"),
        LocalStrategy  =   require("passport-local"),
        flash          =   require("connect-flash"),
        methodOverride =   require("method-override");




// ######################## models requirements ########################################################

var     User           =   require("./models/user"),
        Seats          =   require("./models/seats"),
        Train          =   require("./models/train"),
        Tick           =   require("./models/tick"),
        Pass           =   require("./models/pass"),
        Cancelcel      = require("./models/cancel512"),
        Bo             =   require("./models/bo");

        


app.use(bodyParser.urlencoded({extended : true}));

//============== setup of configurations ===================================================

//mongoose setup
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

var url = process.env.DATABASEURL || "mongodb://localhost/railway_reservation" ;
mongoose.connect(url);


//other setups
//app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine","ejs");
var path = require('path');
app.use(express.static(__dirname + '/public'));
app.use(methodOverride("_method"));
app.use(flash());







//===== passport cofigurations setups ==========
app.use(require("express-session")({
    secret:"Indian loves Icecream and watching films",
    resave: false,
    saveUninitialized:false
    
}));

//need these line anytime we use passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//===============temporary Db ++++++++++++++++++++++++++++++===================================
// var trains={

//             source:"MUMBAI",
//   destination:"PATNA",
//   train_details:[{
//     number: 45621,
//     name: "Shatabdi Express",
//     fare:543,
//     travel_time:"42H:30min:21sec",
//     start_time:"15:00" ,
    
//   }],
//     no_of_seats:{one_A:84,two_A:98,three_A:28,sleeper:189},
//   no_of_station:23,
//   distance:"598 Km"
// }
// console.log("db:--->\n"+trains);

// Train.create(trains,function(err,train){if(!err){console.log("after creating: \n"+train);}});














// var seats={one_A:84,
//     two_A:98,
//     three_A:28,
//     sleeper:189}
//     console.log(seats);
// Seats.create(seats,function(err,seats){if(!err){console.log(seats);}});

// 
//seats creation 

// Seats.findOne({one_A:84,two_A:98,three_A:28,sleeper:189},function(err,seats){if(!err){console.log("seats are:\n"+seats);

// Train.findOne({source:"MUMBAI", destination:"PATNA"},function(err,trains){
//     if(!err){console.log("inside findone\n" +trains);
//         trains.seats_status.push(seats);
// trains.save(function(err,data){if(!err){console.log("after saving\n"+data);
// // trains.populate("seats_status").exec(function(err,data){if(!err){console.log("populating==>\n"+data);}})
// }});
//       }
//   }
//   )}});




//========================================= Routes  ===================================================



//homepage 
app.get("/",function(req,res){
    res.render("home");
});

app.get("/helpline",function(req,res){
    res.render("helpline");
});

app.post("/ticket_info/pnr",isLoggedIn,function(req,res){
    var pnr=req.body.pnr;
    Tick.findOne({PNR:pnr},function(err,ticket){
if(ticket==null){
                return res.redirect("/");
            }
        
        if(err){console.log(err);return res.redirect("back");}
        console.log(ticket);
        Train.findOne({_id:ticket.train_id},function(err,train){
            if(train==null){
                return res.redirect("/");
            }
        
var td={
 src:train.source,
 dest:train.destination,
jour:train.train_details[0].travel_time,
PNR:pnr,
start:train.train_details[0].start_time,
fare:train.train_details[0].fare,
name:train.train_details[0].name,
number:train.train_details[0].number,
price_actual:ticket.price,
date:ticket.date,
classs:ticket.classs
}
Pass.findOne({_id:ticket.pass},function(err,passenger){
     if(passenger==null){
                return res.redirect("/");
            }

var passg={
     name:passenger.name,
   age:passenger.age,
   sex:passenger.sex,
   email:passenger.email,
   phone:passenger.phone
}
Cancelcel.findOne({ticket:ticket._id},function(err,booked){
    

if(booked != undefined || booked != null){
return res.render("ticket_cancel",{ticket:ticket,pnr:pnr});/////////////////////////////////////////==>jst 1 sec
}
        res.render("ticketses",{td:td,passenger:passg,pnr:pnr});
                                                    });


                                                            });


                                                                    });
    });
});




//cancel the ticket
app.post("/ticket/cancel/:pnr",isLoggedIn,function(req,res){
    var pnr=req.params.pnr;
    Tick.findOne({PNR:pnr},function(err,ticket){

        if(err){console.log(err);return res.redirect("back");}
        var canc = new  Cancelcel({ticket:ticket._id});
        canc.save(canc,function(err,canc){
                    console.log("canceled ticket",canc);
                    Tick.findOne({ _id:ticket._id},function(err,ticket){
                res.render("ticket_cancel",{ticket:ticket,pnr:pnr});});
        });
        
    });
});







///train/:train._id/:date/:classs/:price/payment
//redirect to the payement form!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 


app.post("/train/payment",isLoggedIn,function(req,res){
   console.log("hiii");
   var feed={
    date:req.body.date,
    source:req.body.source,
    destination:req.body.destination,
    classs:req.body.classs,
    price:req.body.price,
    train_id:req.body.train_id,
    person:{
        name:req.body.person1.name,
        age:req.body.person1.age,
        sex:req.body.person1.sex,
        email:req.body.person1.email,
        phone:req.body.person1.phone
    }
   }
   console.log(req.body.date);
   console.log(req.body.source);
   console.log(req.body.destination);
   console.log(req.body.classs);
   console.log(req.body.train_id);
   console.log(req.body.price);

   console.log("\n\n",feed);
   res.render("payment",{feed:feed}); 


});










//show all  trains from src to destination
app.post("/train/show",function(req,res){
    // console.log(req.body.train.date +"piche");
    var date = req.body.train.date;
    // console.log(date+"pehla");

     var datetime = new Date();
    // console.log(datetime.toISOString().slice(0,10) + "now");
     if( date <= String(datetime.toISOString().slice(0,10)) || req.body.train.source === req.body.train.destination)
        { //give flash mesage here 
            if(req.body.train.source === req.body.train.destination){
            //give flash messge that date past ka daala gya h date m
            return res.redirect("/");}
            if(date <= String(datetime.toISOString().slice(0,10))){
                //give flash messg that src and dstn dono same h
            return res.redirect("/")}}

console.log(req.body.train.source);
    console.log(req.body.train.destination);
    
    Train.find({source:req.body.train.source, destination:req.body.train.destination},function(error,trains){

        if(error){
                console.log(error);
                return res.redirect("/");
                }
        else    {

            //console.log(trains);
            res.render("book",{trains:trains,source:req.body.train.source,destination:req.body.train.destination,date:req.body.train.date});

                }
    });
}
);









//ticket booking page 
//secret page form for booking ticket ... AFTER CLICK ON CLASS => SLEEPER 1A 2A 3A
app.get("/train/show/check_availability/:train_id/:date/:classs/:price/secret",isLoggedIn,function(req,res){
var date=req.params.date;
var classs=req.params.classs;
var price =  req.params.price;

Train.findOne({_id:req.params.train_id},function(err,train){
        if(!err)
            {
                var seats_id=train.seats_status[0];
                if(!err){
                             if(classs=="sleeper")
                             {console.log("sleeper");
                             // {var s ={one_A: two_A: three_A: sleeper:}
                                 // seats.sleeper-=1;
                                
                                    
                                res.render("secret",{train:train,date:date,classs:classs,price:price});
                                    

                                    

                                  
                             }
                             
                                else if (classs=="three_A")
                                {console.log("3A");

                                res.render("secret",{train:train,date:date,classs:classs,price:price});

                                }
                                      else if (classs=="two_A")
                                      {console.log("2A");
                                  res.render("secret",{train:train,date:date,classs:classs,price:price});
                                      }
                                         else       {console.log("1A");

                                                    res.render("secret",{train:train,date:date,classs:classs,price:price});
                                                    }
                                                }
                                                           


                           }
                            });

});



// #############################################################################################################################




//ticket showing page..!!!!!!!!!!!!!!!!!!!!!!!!!!!!!.2222222222222222222222222222222

app.post("/ticket/:ticket_id",isLoggedIn,function(req,res){

var id=req.params.ticket_id;

    var feed={
    date:req.body.date,
    classs:req.body.classs,
    price:req.body.price,
    train_id:req.params.ticket_id,
    person: {
        name:req.body.person.name,
        age:req.body.person.age,
        sex:req.body.person.sex,
        email:req.body.person.email,
        phone:req.body.person.phone
            }

            }

   //debug
   console.log("from /ticket mania feed=\n\n",feed);
   console.log(id);
   console.log(req.body.date);
   console.log(req.body.classs);
   console.log(req.body.price);






   Train.findOne({_id:id},function(err1,rail){

            if(err1){
                    console.log(err1);
                    return res.redirect("back");
                    }
                    //td is train details to be given to inside ticket page
            var td={
                    id_rail:id,
                    src:rail.source,
                    dst:rail.destination,
                    t_number:rail.train_details[0].number,
                    t_name:rail.train_details[0].name,
                    jour_time: rail.train_details[0].travel_time,
                    start_time:rail.train_details[0].start_time,
                    date:feed.date,
                    classs:feed.classs,
                    price:feed.price
                    }
                    console.log("var td =train details=",td);


            //passenger details
            var passenger=new Pass({
                        name:req.body.person.name,
                        age:req.body.person.age,
                        sex:req.body.person.sex,
                        email:req.body.person.email,
                        phone:req.body.person.phone,
                        country:"INDIAN"
                        });
                         console.log("var passeneger",passenger);



                         passenger.save(passenger,function(err2,passd){
                            if(err2){
                            console.log(err2);
                    return res.redirect("back");    
                            }
                            console.log("pass saved is =\n\n",passd);
                            var pas_id = passd._id;
                            console.log(pas_id);



               // Generating PNR

                        function makepnr(length) {
                             var result           = '';
                        var characters       = 'ABCDEFGHIJKLMNOP0123456789QRSTUVWXYZabcdefg092487hijklmnopqrstuvwxyz0123456789';
                        var charactersLength = characters.length;
                        for ( var i = 0; i < length; i++ ) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                             }
                        return result;
                            }

                                //generate random legth of PNR
                            function between(min, max) {  
                            return Math.floor(
                            Math.random() * (max - min + 1) + min
                                )
                                                        }   



                     var pnr_ticket = makepnr(between(between(9,12), between(22,32)));
                // var pnr_ticket= String(td.id_rail.slice(0,Math.floor(td.id_rail).length/2))+String(td.date)+String(td.id_rail.slice(Number(String(td.id_rail)).length/2));
                 console.log("PNR: "+pnr_ticket);

                //ticket making object 
                var ticket =new Tick({

                            status:"CONFIRMED",
                            train_id:td.id_rail,
                            passenger:passenger,
                            date:td.date,
                            classs:td.classs,
                            PNR:pnr_ticket,
                            price:feed.price,
                            pass:pas_id

                            });

                            console.log("var ticket",ticket);


                            ticket.save(ticket,function(err3,tick){

                                if(err3)
                                {
                                    console.log(err3);
                                    return res.redirect("back"); 
                                }

                                
                                console.log("ticket created\n",tick);  
                                var t_id=tick._id;
                                console.log("t_id\n",t_id);



                                var book=new Bo({
                                        tick :t_id
                                        });



                                            book.save(book,function(err4,book_ticket){
                                                if(err4)
                                                {
                                                   console.log(err3);
                                                    return res.redirect("back");  
                                                }


                                                console.log("ticket booked last is--->%%%%%#####\n\n##\n",book_ticket);



                                                //now we are decrementing the seat  a feture if any mistake the comment this **** PORTION
                                                // ****************************************************************







     Train.findOne({_id:td.id_rail},function(err,train){
        if(!err)
            {
                var seats_id=train.seats_status[0];
                if(!err){
                             if(ticket.classs=="sleeper")
                             {console.log("sleeper");
                             // {var s ={one_A: two_A: three_A: sleeper:}
                                 // seats.sleeper-=1;
                                  Seats.findOne({_id:seats_id},function(err,seats){console.log("before update\n"+seats);
                                   var s ={one_A:seats.one_A , two_A:seats.two_A , three_A:seats.three_A , sleeper:seats.sleeper-1} 
                                    Seats.findOneAndUpdate({_id:seats_id},s,function(err,seatss){
                                        if(!err){console.log("after update\n"+seatss);res.render("ticket",{td:td, pnr:pnr_ticket,price:feed.price ,passenger:passenger});}
                                        else{console.log(err);
                                            res.redirect("back");}

                                    })

                                  });
                             }
                             
                                else if (ticket.classs=="three_A")
                                {console.log("3A");

                                     Seats.findOne({_id:seats_id},function(err,seats){console.log("before update\n"+seats);
                                   var s ={one_A:seats.one_A , two_A:seats.two_A , three_A:seats.three_A-1 , sleeper:seats.sleeper} 
                                    Seats.findOneAndUpdate({_id:seats_id},s,function(err,seats){
                                        if(!err){console.log("after update\n"+seats);res.render("ticket",{td:td, pnr:pnr_ticket ,price:feed.price,passenger:passenger});}
                                        else{console.log(err);
                                            res.redirect("back");}

                                    })

                                  });


                                }
                                      else if (ticket.classs=="two_A")
                                      {console.log("2A");
                                         Seats.findOne({_id:seats_id},function(err,seats){console.log("befoe update\n"+seats);
                                   var s ={one_A:seats.one_A , two_A:seats.two_A-1 , three_A:seats.three_A , sleeper:seats.sleeper} 
                                    Seats.findOneAndUpdate({_id:seats_id},s,function(err,seats){
                                        if(!err){console.log("after update\n"+seats);res.render("ticket",{td:td, pnr:pnr_ticket ,price:feed.price ,passenger:passenger});}
                                        else{console.log(err);
                                            res.redirect("back");}

                                    })

                                  });
                                      }
                                         else       {console.log("1A")
                                                         Seats.findOne({_id:seats_id},function(err,seats){console.log("before update\n"+seats);
                                   var s ={one_A:seats.one_A-1 , two_A:seats.two_A , three_A:seats.three_A , sleeper:seats.sleeper} 
                                    Seats.findOneAndUpdate({_id:seats_id},s,function(err,seats){
                                        if(!err){console.log("after update\n"+seats);res.render("ticket",{td:td , pnr:pnr_ticket ,price:feed.price ,passenger:passenger});}
                                        else{console.log(err);
                                            res.redirect("back");}

                                    })

                                  });
                                                    }
                                                }
                                                           


                           }
                            });//Train.findOne SECOND tym














// **************************************************************************************************************************************
                                                                                        });//Books.create

                            


                                                                    });// Ticket.create





                                                                });






                                                });//Train.findOne



                                                    });

// ###############################################################################################################################










//check whether train is available or notQ!!(check AVAILABILITY) ter viweing all trains from src to destinatin
app.get("/train/show/check_availability/:id/:date",function(req,res){
    console.log(req.params.id);
    var train_id=req.params.id;
    var date=req.params.date;
    Train.findOne({_id:train_id},function(err,train){
        if(!err){
                console.log("seats stausts id\n");
                var seats_id=train.seats_status[0];
                console.log(seats_id);
                //check availability of seats
                Seats.findOne({_id:seats_id},function(err,seats){
                                                        if(!err){
                                                           res.render("available",{seats:seats,train:train,date:date}) 
                                                        }else
                                                                {
                                                                    console.log(err);
                                                                    res.redirect("back");
                                                                }



                                                                });
                }
        else
            {
console.log(err);
res.redirect("back");
            }

    });
    
    
                                                             });


//secret page form for bookin ticket ... AFTER CLICK ON CLASS => payment page


//this route is not functional anymore now.................;    :((((()))))

app.get("/train/show/check_availability/:train_id/:date/:classs/:price/payment",function(req,res){
var date=req.params.date;
var classs=req.params.classs;
var price =  req.params.price;
Train.findOne({_id:req.params.train_id},function(err,train){
        if(!err)
            {
                var seats_id=train.seats_status[0];
                if(!err){
                             if(classs=="sleeper")
                             {console.log("sleeper");
                             // {var s ={one_A: two_A: three_A: sleeper:}
                                 // seats.sleeper-=1;
                                  Seats.findOne({_id:seats_id},function(err,seats){console.log("before update\n"+seats);
                                   var s ={one_A:seats.one_A , two_A:seats.two_A , three_A:seats.three_A , sleeper:seats.sleeper-1} 
                                    Seats.findOneAndUpdate({_id:seats_id},s,function(err,seatss){
                                        if(!err){console.log("after update\n"+seatss);res.render("payment",{train:train,date:date,class:classs,price:price});}
                                        else{console.log(err);
                                            res.redirect("back");}

                                    })

                                  });
                             }
                             
                                else if (classs=="three_A")
                                {console.log("3A");

                                     Seats.findOne({_id:seats_id},function(err,seats){console.log("before update\n"+seats);
                                   var s ={one_A:seats.one_A , two_A:seats.two_A , three_A:seats.three_A-1 , sleeper:seats.sleeper} 
                                    Seats.findOneAndUpdate({_id:seats_id},s,function(err,seats){
                                        if(!err){console.log("after update\n"+seats);res.render("payment",{train:train,date:date,class:classs,price:price});}
                                        else{console.log(err);
                                            res.redirect("back");}

                                    })

                                  });


                                }
                                      else if (classs=="two_A")
                                      {console.log("2A");
                                         Seats.findOne({_id:seats_id},function(err,seats){console.log("befoe update\n"+seats);
                                   var s ={one_A:seats.one_A , two_A:seats.two_A-1 , three_A:seats.three_A , sleeper:seats.sleeper} 
                                    Seats.findOneAndUpdate({_id:seats_id},s,function(err,seats){
                                        if(!err){console.log("after update\n"+seats);res.render("payment",{train:train,date:date,class:classs,price:price});}
                                        else{console.log(err);
                                            res.redirect("back");}

                                    })

                                  });
                                      }
                                         else       {console.log("1A")
                                                         Seats.findOne({_id:seats_id},function(err,seats){console.log("before update\n"+seats);
                                   var s ={one_A:seats.one_A-1 , two_A:seats.two_A , three_A:seats.three_A , sleeper:seats.sleeper} 
                                    Seats.findOneAndUpdate({_id:seats_id},s,function(err,seats){
                                        if(!err){console.log("after update\n"+seats);res.render("payment",{train:train,date:date,class:classs,price:price});}
                                        else{console.log(err);
                                            res.redirect("back");}

                                    })

                                  });
                                                    }
                                                }
                                                           


                           }
                            });

});











//AUTHENTICATION---------------------------------------------------------------
//register page
app.get("/register",function(req,res){
    res.render("register");
});




//after registering updating page
app.post("/register",function(req,res){
    var username=new User({username: req.body.username});
    
    User.register(username, req.body.password, function(err,user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req,res,function(){
            res.redirect("/login");
            
        });
    });
});






//login page open
app.get("/login",function(req,res){
    res.render("login1");
});




//login update
app.post("/login",passport.authenticate("local",{
    successRedirect:"/",
    failureRedirect:"/login"
}),function(req,res){
    
});


//logout
app.get("/logout",function(req,res){
    req.logout();
    res.redirect("/");
});




//middleware
function isLoggedIn(req,res,next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}









//#################




//make to listen to port 





app.listen(3000,function()
{
    console.log("Server has Started");
});
