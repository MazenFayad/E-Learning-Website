const Routes = require('./routes/routes')
const express = require('express');
const stripe = require('stripe')('sk_test_51MJGoaDTXWnAI3NWpLFBohBcVqhx2zDZ2FdE3YDh8WfTPTzVAlOXxD35Xu40H54vdoSqDkD4RItLwMRQwsYcFNGD00ewd7nPeL')
const uuid = require("uuid").v4
var compression = require('compression')
require('express-async-errors');
const mongoose = require('mongoose')
const Admin = require('./models/Admin');
const Course = require('./models/Courses');
const Requestt = require('./models/Requestt');
var path = require('path');
var toArray = require("to-array");
const Corporate_trainee = require('./models/Corporate_trainee')
const Individual_trainee = require('./models/Individual_trainee')
const Instructor = require('./models/Instructor');
const Quiz = require('./models/Quiz');
const fetch = require("node-fetch");
var fx = require("money");
var request = require("request");
let alert = require('alert')
require('dotenv').config()
const cors = require("cors");
const app = express()
app.use(cors());
app.use(express.json())
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(compression({ filter: shouldCompress }))
function shouldCompress(req, res) {
    if (req.headers['x-no-compression']) {
        // don't compress responses with this request header
        return false
    }

    // fallback to standard filter function
    return compression.filter(req, res)
}

//connect to db
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Listening on port ", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
//mezo
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use('/', Routes)





//mezo

//Insert data into the database
app.get("/test", async (req, res) => {
    const data = await Admin.find({ Username: 'omar' });
    res.status(200).json(data);
    console.log(data);
});
//take the arguments to form an admin in database
// app.post('/Admin', async (req, res) => {
//     const {Username, Password, Email,Phonenumber} = req.body
//      try{
//          console.log('ajaja');
//          const Admin1= await Admin.create({Username, Password, Email,Phonenumber});
//         //  res.status(200).json(Admin1);
//      } catch (error) {
//          console.log('ajaja2');
//          res.status(400).json({error: error.message})
//          }
//      })


app.get('/Admin', (req, res) => {
    res.sendFile('./Views/Admin.html', { root: __dirname })
})

app.post('/Admin', (req, res) => {
    switch (req.body.addButton) {
        case 'form1':
            const AdminTest = new Admin(req.body);
            AdminTest.save()
                .then((result) => {
                    res.redirect('/Admin')
                    alert("Admin Added Successfully")
                })
                .catch((err) => {
                    console.log(err)
                    alert("Invalid Username or Password")
                })
            break;
        case 'form2':
            const InstructorTest = new Instructor(req.body);
            InstructorTest.save()
                .then((result) => {
                    res.redirect('/Admin')
                    alert("Instructor Added Successfully")
                })
                .catch((err) => {
                    console.log(err)
                    alert("Invalid Username or Password")
                })
            break;

        default:
            const Corporate_traineeTest = new Corporate_trainee(req.body);
            Corporate_traineeTest.save()
                .then((result) => {
                    res.redirect('/Admin')
                    alert("Trainee Added Successfully")
                })
                .catch((err) => {
                    console.log(err)
                    alert("Invalid Username or Password")
                })
            break;
    }
})

//app.get('/Instructor/:id', async(req, res) => {
//  const id=req.params.id;
//console.log(id);
//const edit = await Instructor.findById(id);
//res.status(200).json(edit)
//})

app.get('/Instructor', (req, res) => {
    res.sendFile('./Views/Instructor.html', { root: __dirname })
})

app.get('/corporateTrainee', (req, res) => {
    res.sendFile('./Views/corporateTrainee.html', { root: __dirname })
})


app.get('/individualTrainee', (req, res) => {
    res.sendFile('./Views/individualTrainee.html', { root: __dirname })
})
//select country
const wrap = function (request_body, application_id, call_back) {
    var options = {
        method: 'PATCH',
        url: 'http://localhost:4000/Instructor/' + application_id,
        body: request_body,
        json: true
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        return call_back(body);
    });
};
const wrap2 = function (request_body, application_id, call_back) {
    var options = {
        method: 'PATCH',
        url: 'http://localhost:4000/IndividualTrainee/' + application_id,
        body: request_body,
        json: true
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        return call_back(body);
    });
};
const wrap3 = function (request_body, application_id, call_back) {
    var options = {
        method: 'PATCH',
        url: 'http://localhost:4000/CorporateTrainee/' + application_id,
        body: request_body,
        json: true
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        return call_back(body);
    });
};
app.put('/Instructor/:id', (req, res) => {

    const id = req.params.id;
    console.log(id);
    console.log(req.body);


})
app.post('/IndividualTrainee', (req, res) => {
    const id = "635ff7a6c45d7eec9ab2eb49";
    console.log("fen")
    wrap2(req.body, id, function (result) {
        console.log("tmam");
    });

})
app.post('/CorporateTrainee', (req, res) => {
    const id = "6359823810bcb3705e7e112a";
    wrap3(req.body, id, function (result) {
        console.log("tmam");
    });

})
app.patch('/Instructor/:id', async (req, res) => {
    console.log("here");
    const id = req.params.id;
    console.log(id);
    // const blog1 = new blogModel(req.body);

    if (id) {
        console.log("fe eh");
        const edit = await Instructor.findByIdAndUpdate(id, { Country: req.body.dropdownitem }, { new: true });
        console.log('what', edit);
        res.status(200).json(edit)
    }
    else {
        res.status(400).json({ mssg: "haha" })
    }
}
)
app.patch('/CorporateTrainee/:id', async (req, res) => {
    console.log("here");
    const id = req.params.id;
    console.log(id);
    // const blog1 = new blogModel(req.body);

    if (id) {
        const edit = await Corporate_trainee.findByIdAndUpdate(id, { Country: req.body.dropdownitem }, { new: true });
        console.log('what', edit);
        res.status(200).json(edit)
    }
    else {
        res.status(400).json({ mssg: "haha" })
    }
}
)
app.patch('/IndividualTrainee/:id', async (req, res) => {
    console.log("here");
    const id = req.params.id;
    console.log(id);
    // const blog1 = new blogModel(req.body);

    if (id) {
        const edit = await Individual_trainee.findByIdAndUpdate(id, { Country: req.body.dropdownitem }, { new: true });
        console.log('what', edit);
        res.status(200).json(edit)
    }
    else {
        res.status(400).json({ mssg: "haha" })
    }
}
)

// app.post("/createCourse", async (req, res) => {
//     const CourseTest = new Course(req.body);
//     CourseTest.save()
//         .then((result) => {
//             res.status(200).json(CourseTest);
//         })
//         .catch((err) => {
//             console.log(err);
//         })

// });
//view course price
app.get("/getCoursePrice/:id", async (req, res) => {
    const id = req.params.id;
    const data = await Course.findById(id);
    res.status(200).json(data.Price);
    console.log(data.Price);
});
app.get("/getCourse/:id", async (req, res) => {
    const id = req.params.id;
    const data = await Course.findById(id);
    res.status(200).json(data);
    console.log(data);
});
//lessa
// app.get("/reqrefund", async (req, res) => {
//     const id = req.query.myid;
//     const courseid=req.query.id2;
//     const data = await Requestt.findById(id);
//     res.status(200).json(data);
//     console.log(data);
// });
//intial
app.post("/reqrefund", async (req, res) => {
    const { myid, id } = req.body

    const data = await Requestt.find({}, ' refund');
    console.log(data);
    var refundd = data[0].refund;
    const newrefund = [myid, id];
    refundd.push(newrefund);
    // console.log(refundd);
    await Requestt.findByIdAndUpdate('63a9606f52bb41fa398f1c65', { refund: refundd })
        .then(() => { return res.json({ message: "request sent successfully", send }) })
        .catch((e) => {
            console.log(e.message)
        });

})
app.post("/createquiz", async (req, res) => {
    const { list, courseName } = req.body
    console.log(courseName)
    const dataa=await Course.find({Title:courseName});
    console.log(dataa[0]._id);
    const courseid=dataa[0]._id;
    console.log(courseid);
    console.log(list);
    const data = await Quiz.create({ list, courseid })

        // console.log(refundd);
        .then(() => { return res.json({ message: "Quiz sent successfully", send }) })
        .catch((e) => {
            console.log(e.message)
        });
    console.log(data);
})
//view all the titles of the courses available including the total hours of the course and course rating
app.get('/getCourses', async (req, res) => {



    const Filter = req.query.filter + "";

    let k = req.query.k;
    const c = req.query.c;
    console.log(k);
    var result;
    switch (Filter) {
        case "Title":
            // result = await Course.find({ Title: { $regex: k } }, ' Title Hours Rating Major Price');
            result = await Course.find({ Title: { $regex: k } }, ' Title Hours Rating Major Price ').populate({
                path: 'Instructor_id',
                model: 'Instructor',
                select: 'Username'
            });
            const newRR = { Course: [] }
            const rr = result.map((item) => {
                let z = []
                const s1 = item.Instructor_id.map((s) => {
                    z.push(s.Username);
                })

                const newItem = {

                    _id: item._id,
                    Hours: item.Hours,
                    Rating: item.Rating,
                    Title: item.Title,
                    Major: item.Major,
                    Price: item.Price,
                    username: z
                }
                newRR.Course.push(newItem);




            }

            )
            result = [newRR];
            // result = await Course.aggregate([
            //     {$match:{ Title: { $regex: k } }},
            //     {
            //         $lookup:
            //         {

            //             from: "instructors",
            //             localField: "Instructor_id",
            //             foreignField: "_id",
            //             pipeline: [{
            //                 $project: {
            //                     Username: 1,
            //                     _id:0

            //                 }
            //             }],
            //             as: "userName"
            //         }
            //     }, {$project: {
            //         _id: 0,
            //         Course:["$Title","$Major","$Hours","$Rating","$userName"],
            //         UserName:"$userName"
            //      }
            //  }]);
            break;
        case "Major":

            result = await Course.find({ Major: { $regex: k } }, ' Title Hours Rating Major Price ').populate({
                path: 'Instructor_id',
                model: 'Instructor',
                select: 'Username'
            });
            const newR = { Course: [] }
            const newRes = result.map((item) => {
                let z = []
                const s1 = item.Instructor_id.map((s) => {
                    z.push(s.Username);
                })

                const newItem = {

                    _id: item._id,
                    Hours: item.Hours,
                    Rating: item.Rating,
                    Title: item.Title,
                    Major: item.Major,
                    Price: item.Price,
                    username: z
                }
                newR.Course.push(newItem);




            }

            )
            result = [newR];

            // result = await Course.aggregate([
            //     {$match:{Major: { $regex: k }}},
            //     {
            //         $lookup:
            //         {

            //             from: "instructors",
            //             localField: "Instructor_id",
            //             foreignField: "id",
            //             pipeline: [{
            //                 $project: {
            //                     Username: 1,
            //                     _id:0

            //                 }
            //             }],
            //             as: "userName"
            //         }
            //     }, {$project: {
            //         _id: 0,
            //         Course:["$Title","$Major","$Hours","$Rating","$userName"],
            //         UserName:"$userName"
            //      }
            //  }]);
            break;
        case "Price":
            if (!k)
                k = Number.MAX_VALUE
            else {
                async function fetchJson(url) {
                    let res = await fetch(url);

                    return await res.json();
                }
                let exchange = await fetchJson('https://openexchangerates.org/api/latest.json?app_id=7cc454a028cf40d28802f444280976ec');
                fx.base = exchange.base;
                fx.rates = exchange.rates;

                // if (products.Discount > 0) {
                //   products.Price = products.Price - (products.Price) * (products.Discount / 100);
                //}

                k = fx(k).from(c).to('USD').toFixed(2);
                console.log("the k is", k);
            }

            result = await Course.find({ Price: { $lte: k } }, ' Title Hours Rating Major Price ').populate({
                path: 'Instructor_id',
                model: 'Instructor',
                select: 'Username'
            });
            const ne = { Course: [] }
            const newRe = result.map((item) => {
                let z = []
                const s1 = item.Instructor_id.map((s) => {
                    z.push(s.Username);
                })

                const newItem = {

                    _id: item._id,
                    Hours: item.Hours,
                    Rating: item.Rating,
                    Title: item.Title,
                    Major: item.Major,
                    Price: item.Price,
                    username: z
                }
                ne.Course.push(newItem);




            }

            )
            result = [ne];
            // result = await Course.find({ Price: { $lte: k } }, ' Title Hours Rating Major Price ');
            break;
        case "Rating":
            if (!k)
                k = Number.MAX_VALUE
            // result = await Course.find({ Rating: { $lte: k } }, ' Title Hours Rating Major Price ');
            result = await Course.find({ Rating: { $lte: k } }, ' Title Hours Rating Major Price ').populate({
                path: 'Instructor_id',
                model: 'Instructor',
                select: 'Username'
            });
            const m = { Course: [] }
            const l = result.map((item) => {
                let z = []
                const s1 = item.Instructor_id.map((s) => {
                    z.push(s.Username);
                })

                const newItem = {

                    _id: item._id,
                    Hours: item.Hours,
                    Rating: item.Rating,
                    Title: item.Title,
                    Major: item.Major,
                    Price: item.Price,
                    username: z
                }
                m.Course.push(newItem);




            }

            )
            result = [m];
            break;
        default:
            console.log("hennnnn")
            // result = await Instructor.aggregate([
            //     {
            //         $lookup:
            //         {

            //             from: "courses",
            //             localField: "Course",
            //             foreignField: "_id",
            //             pipeline: [{
            //                 $project: {
            //                     Title: 1,
            //                     Major: 1,
            //                     Hours: 1,
            //                     Rating: 1

            //                 }
            //             }],
            //             as: "CourseList"
            //         }
            //     },
            //     {
            //         $project: {
            //             CourseList: 1,
            //             _id: 0,
            //             UserName: ["$Username"]
            //         }
            //     }
            // ]);
            //s
            // result = await Instructor.find({ Username: { $regex: k } }, 'Username Course  -_id').populate({
            //     path: 'Course',
            //     model: 'Courses',
            //     select: 'Title Hours Rating Major Price'
            // });
            //s
            result = await Course.find({}, ' Title Hours Rating Major Price ').populate({
                path: 'Instructor_id',
                model: 'Instructor',
                select: 'Username'
            });
            const nwR = { Course: [] }
            const r = result.map((item) => {
                let z = []
                const s1 = item.Instructor_id.map((s) => {
                    z.push(s.Username);
                })

                const newItem = {

                    _id: item._id,
                    Hours: item.Hours,
                    Rating: item.Rating,
                    Title: item.Title,
                    Major: item.Major,
                    Price: item.Price,
                    username: z
                }
                let f = false;

                for (var s of z) {

                    console.log(s);
                    if (s === k) {
                        f = true;
                        console.log("sa7");
                        break;
                    }
                }
                if (f == true)
                    nwR.Course.push(newItem);




            }

            )
            result = [nwR];
            console.log(result);
        // const r1 = result.map((item) => {
        //     let z=[]
        //     const s1=item.Instructor_id.map((s)=>{
        //         z.push(s.Username);
        //     })

        //     const newItem = {

        //             _id:item._id,
        //             Hours: item.Hours,
        //             Rating:item.Rating,
        //             Title:item.Title,
        //             Major:item.Major,
        //             Price:item.Price,
        //             username:z
        //         }
        //     newR.Course.push(newItem);    




        //     }

        // )
        // result=newR;

        //result = result.Course;

    }




    res.status(200).json(result);


})
app.get('/getCourses/Subject', async (req, res) => {
    console.log("asal");
    const result = await Course.find({}, ' Title Hours Rating ');

    res.status(200).json(result);
    //console.log(req.body);

})
app.get('/FilterCourses', async (req, res) => {
    //console.log(req.body);
    const result = await Course.find(req.body);

    res.status(200).json(result);


})

app.get("/search", (req, res) => {
    res.sendFile('./Views/search.html', { root: __dirname })
})
app.get('/Searchresults', (req, res) => {
    res.sendFile('./Views/Searchresults.html', { root: __dirname })
})
const prepareData = async function (req, res) {
    const id = req.query.topic;
    let products = await Course.findById(id);
    if (products.Price != "FREE") {
        async function fetchJson(url) {
            let res = await fetch(url);

            return await res.json();
        }


        let location = await fetchJson('https://api.ipdata.co?api-key=ec72d2a2d822f9832a689fbcacdb34e349a0aaeeac84487fb0fd6f80&fields=currency');
        let exchange = await fetchJson('https://openexchangerates.org/api/latest.json?app_id=7cc454a028cf40d28802f444280976ec');
        console.log("loc", location);
        console.log("exc", exchange);
        fx.base = exchange.base;
        fx.rates = exchange.rates;
        console.log("ana hena", products.Price);
        // if (products.Discount > 0) {
        //   products.Price = products.Price - (products.Price) * (products.Discount / 100);
        //}
        console.log(location.currency.symbol + '' +
            fx(products.Price).from('USD').to(location.currency.code).toFixed(2));
        products.Price = fx(products.Price).from('USD').to(location.currency.code).toFixed(2) + '' + location.currency.symbol;
        console.log(products.Price);

    }
    res.render('ShowCourse', { CourseData: products });

}
app.patch('/upd', async (req, res) => {


    const result = await Course.find({}, ' _id Price');
    for (let i = 0; i < result.length; i++) {
        await Course.findByIdAndUpdate(result[i].id, { Price: result[i].Price });
    }
    res.status(200).json(result);


})
app.get('/tennis', prepareData)
//<li> <a href="tennis?topic=<%= Product %>">Title:<%=Product.Title%> Major:<%=Product.Major%> </a></li>
//search for a course based on course title or subject or instructor
app.post("/search", async (req, res) => {
    var x = [];
    var z = false;
    const data1 = await Instructor.findOne({ Username: { $regex: req.body.Search } }, 'Course').populate({
        path: 'Course',
        model: 'Courses'
    }
    ).exec(function (err, user) {
        if (err) {
            console.log(err);
        } else {
            // console.log(user);
            let f = false;
            if (!x)
                f = true;
            for (let i = 0; i < user.Course.length; i++) {

                x.push(user.Course[i])
            }
            z = true;

        }
    });
    console.log(data1);

    //console.log("alooo",data1.Course);

    //
    const data = await Course.find({
        "$or": [
            { Title: { $regex: req.body.Search } },
            { Major: { $regex: req.body.Search } },

        ]
    })
    console.log("lookkkkk", data1);

    var alldata = [];
    if (data)
        for (let index = 0; index < data.length; index++) {
            alldata.push(data[index])
        }
    /*
        for (let index = 0 ; index < data.length; index++){
        for(let i=0;i<data[index].Course;i++){
            let x= await Course.findById(data[index].Course[i]);

        }
    }
    */
    if (data1)
        for (let index = 0; (index < data1.length); index++) {
            var x = 0
            for (let i = 0; i < data1[index].Course; i++) {
                let y = await Course.findById(data1[index].Course[i]);
                if (data) {
                    for (let j = 0; (j < alldata); j++) {
                        if (alldata[j].equals(y)) {
                            x = 1;
                            break;
                        }
                    }
                }
                if (x == 0)
                    alldata.push(y);
                x = 0;
            }

        }

    //
    //res.status(200).json(data);
    console.log("hena", data);
    console.log(alldata.length)
    if (alldata.length == 1) {
        console.log("fe eh")
        alldata = [{ _id: "No Matches Found", Title: "No Matches Found" }];

    }
    console.log("before", alldata)
    while (!z) {
        const data = await Course.find({
            "$or": [
                { Title: { $regex: req.body.Search } },
                { Major: { $regex: req.body.Search } },

            ]
        });
    }
    res.render('Searchresults', { Products: x });





})
app.post('\islam', async (req, res) => {

    const { rate, id } = req.body;
    console.log(rate);
    if (rate1) {
        await Course.findByIdAndUpdate(id, { Rating: rate }, { new: true });
        res.json({ message: "rating has changed successfully" });
    }
    else {
        res.json({ message: "please choose a rate" })
    }
}
)

app.get('/getindividualTraineeCourses/:id', async (req, res) => {
    const id = req.params.id;
    console.log(id)
    result = await Individual_trainee.findById(id, ' Title Hours Rating Major Price ').populate({
        path: 'Course',
        model: 'Courses',
        select: 'Title Hours Rating Major Price'
    });
    const newRR = { Course: [] }
    // const rr = result.map((item) => {
    //     let z = []
    //     const s1 = item.Instructor_id.map((s) => {
    //         z.push(s.Username);
    //     })

    //     const newItem = {

    //         _id: item._id,
    //         Hours: item.Hours,
    //         Rating: item.Rating,
    //         Title: item.Title,
    //         Major: item.Major,
    //         Price: item.Price,
    //         username: z
    //     }
    //     newRR.Course.push(newItem);




    // }

    // )
    //result = [newRR];
    res.status(200).json([result]);
})


app.get('/getcorporateTraineeCourses/:id', async (req, res) => {
    const id = req.params.id;

    result = await Corporate_trainee.findById(id, ' Title Hours Rating Major Price ').populate({
        path: 'Course',
        model: 'Courses',
        select: 'Title Hours Rating Major Price'
    });
    const newRR = { Course: [] }
    // const rr = result.map((item) => {
    //     let z = []
    //     const s1 = item.Instructor_id.map((s) => {
    //         z.push(s.Username);
    //     })

    //     const newItem = {

    //         _id: item._id,
    //         Hours: item.Hours,
    //         Rating: item.Rating,
    //         Title: item.Title,
    //         Major: item.Major,
    //         Price: item.Price,
    //         username: z
    //     }
    //     newRR.Course.push(newItem);




    // }

    // )
    //result = [newRR];
    res.status(200).json([result]);
})


// app.put('/getindividualTraineeCourses',async(req,res)=>{
//     //const id = req.params.id;
//     const data = await Individual_trainee.find({},{ Course: [] }, { new: true });
//     res.status(200).json(data);
//     console.log(data);
// })
app.post('/api/query', async (req, res) => {


    const { username, oldPassword, newPassword } = req.body


    const data = await Instructor.findOne({ Email: username })



    if (data) {


        if (data.Password === oldPassword) {

            // email and pass is correct
            const valid = await Instructor.updateOne({ Email: username }, { Password: newPassword })

            res.send({ message: 'it is changed correctly' })

        }
        else {
            // password user name.

            res.send({ message: 'the password is incorrect' })

        }

    }
    else {

        res.send({ message: 'no such user' })

    }




})




app.get('/api/test', async (req, res) => {
    const data = await Instructor.find({ Email: 'mahmoud.com' })
    res.send(data)
})
app.post('/api/query2', async (req, res) => {


    const { username, oldPassword, newPassword } = req.body


    const data = await Corporate_trainee.findOne({ Email: username })



    if (data) {


        if (data.Password === oldPassword) {

            // email and pass is correct
            const valid = await Corporate_trainee.updateOne({ Email: username }, { Password: newPassword })

            res.send({ message: 'it is changed correctly' })

        }
        else {
            // password user name.

            res.send({ message: 'the password is incorrect' })

        }

    }
    else {

        res.send({ message: 'no such user' })

    }




})

app.post('/api/query1', async (req, res) => {


    const { username, oldPassword, newPassword } = req.body


    const data = await Individual_trainee.findOne({ Email: username })



    if (data) {


        if (data.Password === oldPassword) {

            // email and pass is correct
            const valid = await Individual_trainee.updateOne({ Email: username }, { Password: newPassword })

            res.send({ message: 'it is changed correctly' })

        }
        else {
            // password user name.

            res.send({ message: 'the password is incorrect' })

        }

    }
    else {

        res.send({ message: 'no such user' })

    }




})
app.post('/api/query', async (req, res) => {


    const { username, oldPassword, newPassword } = req.body


    const data = await Instructor.findOne({ Email: username })



    if (data) {


        if (data.Password === oldPassword) {

            // email and pass is correct
            const valid = await Instructor.updateOne({ Email: username }, { Password: newPassword })

            res.send({ message: 'it is changed correctly' })

        }
        else {
            // password user name.

            res.send({ message: 'the password is incorrect' })

        }

    }
    else {

        res.send({ message: 'no such user' })

    }




})
// const questions = [
//     {

//           // when option picked grade does not change
//         isClicked: false,
//         text: "What is Computer Science?",
//         options: [
//             { id: 0, text: "The study of algorithms", isCorrect: true, isRed: false, isGreen: false, isGrey: true},
//             { id: 1, text: "The study of loops", isCorrect: false, isRed: false, isGreen: false, isGrey: true},
//             { id: 2, text: "The study of equations", isCorrect: false, isRed: false, isGreen: false, isGrey: true},
//             { id: 3, text: "The study of vectors", isCorrect: false, isRed: false, isGreen: false, isGrey: true},
//     ],
//     },
//     {

//         isClicked: false,
//         text: "What is the GCD of 132 and 168?",
//         options: [
//             { id: 4, text: "17", isCorrect: false, isRed: false, isGreen: false, isGrey: true},
//             { id: 5, text: "12", isCorrect: true, isRed: false, isGreen: false, isGrey: true},
//             { id: 6, text: "15", isCorrect: false, isRed: false, isGreen: false, isGrey: true},
//             { id: 7, text: "13", isCorrect: false, isRed: false, isGreen: false, isGrey: true},
//     ],
//     },
//     {

//         isClicked: false,
//         text: "What is the length of this List A={1,2,3,4}?",
//         options: [
//             { id: 8, text: "4", isCorrect: true, isRed: false, isGreen: false, isGrey: true},
//             { id: 9, text: "3", isCorrect: false, isRed: false, isGreen: false, isGrey: true},
//             { id: 10, text: "2", isCorrect: false, isRed: false, isGreen: false, isGrey: true},
//             { id: 11, text: "5", isCorrect: false, isRed: false, isGreen: false, isGrey: true},
//     ],
//     },
//     {

//         isClicked: false,
//         text: "What is the element at position 2 of the this List A=[0,1,9,3]?",
//         options: [
//             { id: 12, text: "1", isCorrect: false, isRed: false, isGreen: false, isGrey: true},
//             { id: 13, text: "9", isCorrect: true, isRed: false, isGreen: false, isGrey: true},
//             { id: 14, text: "3", isCorrect: false, isRed: false, isGreen: false, isGrey: true},
//             { id: 15, text: "0", isCorrect: false, isRed: false, isGreen: false, isGrey: true},
//     ],
//     },
// ];
// app.get('/quiz', async (req, res) => {
//     const { courseid } = req.body;
//     console.log(courseid)
//     var data = await Quiz.find({ courseid: });

//    // console.log(data);

//     const result = [

//     ]
//     let count = 0;


//     for(let i = 0; i <data.length; i++)
//     {
        
//         let correct1 = false;
//         let correct2 = false;
//         let correct3 = false;
//         let correct4 = false;
       
        
//         if (item.list.firstChoice === item.list.answer) {
//             correct1 = true;
//         }
//         if (item.list.secondChoice === item.list.answer) {
//             correct2 = true;
//         }
//         if (item.list.thirdChoice === item.list.answer) {
//             correct3 = true;
//         }
//         if (item.list.fourthChoice === item.list.answer) {
//             correct4 = true;
//         }
//         // console.log("item");
//         console.log(item.list)
//         const options = [
//             {
//                 id: count, text: item.list.firstChoice, isCorrect: correct1, isRed: false, isGreen: false, isGrey: true,
//                 id: (count + 1), text: item.list.secondChoice, isCorrect: correct2, isRed: false, isGreen: false, isGrey: true,
//                 id: (count + 2), text: item.list.thirdChoice, isCorrect: correct3, isRed: false, isGreen: false, isGrey: true,
//                 id: (count + 3), text: item.list.fourthChoice, isCorrect: correct4, isRed: false, isGreen: false, isGrey: true,
//             }
//         ]

//         count += 4;
//         const obj = {
//             isClicked: false,
//             text: item.list.question,
//             options: options

//         }
//         result.push(obj);
//     }
// }
    

   




app.get('/currency', async (req, res) => {
    const price = req.query.price;
    const countryCode = req.query.countryCode;
    let result = 0;
    if (price != "FREE") {
        let location = countryCode;
        async function fetchJson(url) {
            let res = await fetch(url);

            return await res.json();
        }
        let exchange = await fetchJson('https://openexchangerates.org/api/latest.json?app_id=7cc454a028cf40d28802f444280976ec');
        fx.base = exchange.base;
        fx.rates = exchange.rates;

        // if (products.Discount > 0) {
        //   products.Price = products.Price - (products.Price) * (products.Discount / 100);
        //}

        result = fx(price).from('USD').to(location).toFixed(2) + '' + location;


    }
    res.status(200).json(result);
})
const jwt = require("jsonwebtoken")

// npm i jsonwebtoken



app.post("/login", async (req, res) => {
    const { email, password } = req.body


    const isInstructor = await Instructor.findOne({ Email: email })
    const isAdmin = await Admin.findOne({ Email: email })
    const isCorporate = await Corporate_trainee.findOne({ Email: email })
    const isIndividual = await Individual_trainee.findOne({ Email: email })



    if (isInstructor) {
        if (isInstructor.Password === password) {
            const token = jwt.sign({ id: isInstructor.id }, "secret key", { expiresIn: "10h", })
            const send = { instructor: isInstructor, token: token }

            return res.json({ message: "login is completed successfully", type: "instructor", send })

        }
        else {
            return res.json({ message: "password is incorrect" })

        }
    }

    if (isAdmin) {
        if (isAdmin.Password === password) {
            const token = jwt.sign({ id: isAdmin.id }, "secret key", { expiresIn: "10h", })
            const send = { admin: isAdmin, token: token }

            return res.json({ message: "login is completed successfully", type: "admin", send })
        }
        else {
            return res.json({ message: "password is incorrect" })

        }
    }

    if (isCorporate) {
        if (isCorporate.Password === password) {

            const token = jwt.sign({ id: isCorporate.id }, "secret key", { expiresIn: "10h", })
            const send = { Corporate: isCorporate, token: token }

            return res.json({ message: "login is completed successfully", type: "corporate", send })


        }
        else {
            return res.json({ message: "password is incorrect" })

        }
    }

    if (isIndividual) {
        if (isIndividual.Password === password) {
            const token = jwt.sign({ id: isIndividual.id }, "secret key", { expiresIn: "10h", })
            const send = { individual: isIndividual, token: token }

            return res.json({ message: "login is completed successfully", type: "individual", send })
        }
        else {
            return res.json({ message: "password is incorrect" })

        }
    }
    res.json({ message: "email is incorrect" })

})

app.post('/signup', async (req, res) => {

    const { Email, Username, Password, type } = req.body
    const isInstructor = await Instructor.findOne({ Email: Email })

    const isCorporate = await Corporate_trainee.findOne({ Email: Email })
    const isIndividual = await Individual_trainee.findOne({ Email: Email })
    const isAdmin= await Admin.findOne({Email: Email})
    if (isInstructor != null || isCorporate != null || isIndividual != null||isAdmin!=null) {
        return res.json({ message: "this email is already used" })
    }

    switch (type) {
        case "instructor":
            await Instructor.create({ Email, Username, Password, });
            break;
        case "corporate":
            await Corporate_trainee.create({ Email, Username, Password, });
            break;
        case "individual":
            await Individual_trainee.create({ Email, Username, Password, });
            break;
        case "admin":
            await Admin.create({ Email, Username, Password, });
            break;
        default:

    }

    return res.json({ message: "you have signed up successfully" });


})



app.post('/individualNotes', async (req, res) => {
    const id = req.body.id

    const individual = await Individual_trainee.findById(id)

    res.json({ message: individual.notes })
})


app.post('/corporateNotes', async (req, res) => {
    const id = req.body.id

    const corporate = await Corporate_trainee.findById(id)

    res.json({ message: corporate.notes })
})
app.get('/money/:id', async (req, res) => {
    const id = req.params.id

    const data = await Individual_trainee.findById(id, '-_id Wallet')
    console.log(data);
    res.status(200).json(data.Wallet);
})

const nodemailer = require('nodemailer')

let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "eslamhany12233@gmail.com",
        pass: process.env.EMAIL_TEST_APP_PSWO
    }
})



app.post('/api/email', async (req, res) => {
    const { email } = req.body
    const data1 = await Instructor.findOne({ Email: email })
    const data2 = await Individual_trainee.findOne({ Email: email })
    const data3 = await Corporate_trainee.findOne({ Email: email })
    if (data1 || data2 || data3) {

        let pass = null
        if (data1 !== null) {
            pass = data1.Password
        }
        else if (data2 !== null) {
            pass = data2.Password
        }
        else {
            pass = data3.Password
        }
        const message = 'your password is ' + pass + '.follow the link to change your password ' + 'http://localhost:3000/P'
        let details = {
            from: "eslamhany12233@gmail.com",
            to: email,
            subject: "password reset",
            text: message
        }

        mailTransporter.sendMail(details, (err) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log("email is sent")
            }

        })
    }
    else {
        res.send({ message: 'no such user exists' })
    }
})



app.post('/api/congrats', async (req, res) => {
    const { email } = req.body



    let details = {
        from: "eslamhany12233@gmail.com",
        to: email,
        //we need to add course name in subject
        subject: "completing the course",
        cc: "ahmedeiislmai1222@gmail.com",
        bcc: "ahmedeiislmai1222@gmail.com",
        text: "congrats...... here is an attachment of the certificate matgesh tany b2a ya mo2refffff",
        attachments: [
            { filename: 'picture.jpg', path: './picture.jpg' }
        ]
    }

    mailTransporter.sendMail(details, (err) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("email is sent")
        }

    })
    res.json({ message: "email is sent" })
})
app.post('/payment', async(req, res) => {
    const { id1, id,token,product } = req.body;
    console.log("ind");
    console.log(id1);
    const indvidid=id1;
    const courseid=id;
    //to avoid charging twice

    const data= await Individual_trainee.findById(indvidid,'-_id Course ')
    console.log(data);
    const c=data.Course;
   var fl=false;
    for(let i=0;i<c.length;i++){
       if(c[i]==courseid){
           fl=true;
       }
    }
    if(fl==false){
    const idempontencyKey = uuid();
    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then(customer => {
        stripe.charges.create({
            amount: product.Price * 100,
            currency: 'usd',
            customer: customer.id,
            //receipt_email:token.email,
            //shipping:{
            //  name:token.card.name
            //}
        }, { idempotencyKey: idempontencyKey });
    })
        .then(async() => {
            console.log(res.status);
            console.log('esht8al y sy3')

         c.push(courseid);
         const data2=await Individual_trainee.findByIdAndUpdate(indvidid,{Course:c})
        })
        .catch((err) => {
            console.log(err)
        })
    }
        
})

let fs = require("fs")
// Intitializing the readFileLines with the file
const readFileLines = filename => fs.readFileSync(filename).toString('UTF8');
// Calling the readFiles function with file name
let Certificate = readFileLines('../Course_Certificate.txt');

// Printing the response array

app.get('/', (req, res) => {
    //res.download("test.txt");
    res.send(Certificate)
    console.log(Certificate);
})

app.get('/requests', async (req, res) => {

    var data = await Requestt.find()
    data = data[0].refund

    var result = []


    for (let i = 0; i < data.length; i++) {
        const individual = await Individual_trainee.findById(data[i][0])
        const course = await Course.findById(data[i][1])
        console.log(individual.Email);
        const item = { email: individual.Email, title: course.Title, price: course.Price, individualId: data[i][0], courseId: data[i][1] }

        result.push(item)
    }



    res.send(result);

})


app.post('/acceptRequest', async (req, res) => {
    const { email, price, individualId, courseId } = req.body
    var data = await Requestt.find();
    const id = data[0]._id
    data = data[0].refund;
    var data2 = [];


    for (let i = 0; i < data.length; i++) {


        if (!(data[i][0].toString() === individualId && data[i][1].toString() === courseId)) {
            data2.push(data[i]);

        }
    }

    await Requestt.findByIdAndUpdate(id, { refund: data2 })

    const individual = await Individual_trainee.findOne({ Email: email })

    const newAmount = individual.Wallet + parseInt(price)
    await Individual_trainee.updateOne({ Email: email }, { Wallet: newAmount })
    res.json({ message: "el user el znan galoh flosoh ya rab ttsr2" })

})

app.post('/rejectRequest', async (req, res) => {
    const { individualId, courseId } = req.body
    var data = await Requestt.find();
    const id = data[0]._id
    data = data[0].refund;
    var data2 = [];


    for (let i = 0; i < data.length; i++) {


        if (!(data[i][0].toString() === individualId && data[i][1].toString() === courseId)) {
            data2.push(data[i]);

        }
    }

    await Requestt.findByIdAndUpdate(id, { refund: data2 })

    res.json({ message: "el user el znan mgalosh flosoh a7sn testahel" })
})