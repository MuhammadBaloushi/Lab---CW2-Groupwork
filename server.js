const express = require('express');
const path = require('path');


const app = express();
const port = 5000;


app.use(express.static(__dirname + '/client'));

var myData = [
    { Name: 'Ahmed', Age: '20', Role: 'Developer' },
    { Name: 'Bambo', Age: '15', Role: 'Tester' },
    { Name: 'RamoKaka', Age: '25', Role: 'Worker' }
];


const lessons = [
    {
        "id": 1001,
        "subject": "Robotics",
        "title": "Intro - AI in Robotics",
        "price": 299,
        "location": "Jeddah",
        "coverPage" : "/assets/imgs/course.png"
    },
    {
        "id": 1002,
        "subject": "Robotics",
        "title": "IO in Robotics",
        "price": 399,
        "location": "Jeddah",
        "coverPage" : "/assets/imgs/course.png"
    },
    {
        "id": 1003,
        "subject": "Programming",
        "title": "PLC Programming",
        "price": 199,
        "location": "Abha",
        "coverPage" : "/assets/imgs/course.png"
    },
    {
        "id": 1004,
        "subject": "Programming",
        "title": "C# Programming",
        "price": 250,
        "location": "Dammam",
        "coverPage" : "/assets/imgs/course.png"
    }

];

const users = [
    {
        'userid': 1,
        'firstName': 'Junaid',
        'lastName': 'Akram',
        'role': 'Developer',
        'profileImg' : '/assets/imgs/img_avatar.png'
    },
    {
        'userid': 2,
        'firstName': 'Taimoor',
        'lastName': 'Salaudin',
        'role': 'Tester',
        'profileImg' : '/assets/imgs/img_avatar.png'
    },
    {
        'userid': 3,
        'firstName': 'Irfan',
        'lastName': 'Junejo',
        'role': 'Designer',
        'profileImg' : '/assets/imgs/img_avatar.png'
    },

];

//Start of Routes


//Test

app.get('/client/:name', function (req, res, next) {
    var options = {
        root: path.join(__dirname, 'client'),
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }

    var fileName = req.params.name
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err)
        } else {
            console.log('Sent:', fileName)
        }
    })
});


//Test

//Home Route 
app.get('/', function (req, res) {
    // res.writeHead(200,{'Content-Type':'application\json'});

    res.send("General Home Page");

});

//Route to lessons 
app.get('/lessons', function (req, res) {
    //res.send("Hello General Home");
    res.send(JSON.stringify(lessons));
   // res.sendFile()

});

//Route to users 
app.get('/users', function (req, res) {
    res.send(JSON.stringify(users));

});

//End of Routes 


app.listen(port);