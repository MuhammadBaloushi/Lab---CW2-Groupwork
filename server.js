const express = require('express');
const path = require('path');

const app = express();
const port = 5000;

app.use(express.static(__dirname + '/client'));

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

//Home Route 
app.get('/', function (req, res) {
    //Sending Response over HTTP
    res.send("General Home Page");

});

//Route to lessons 
app.get('/lessons', function (req, res) {
    //Sending Response over HTTP
    res.send(JSON.stringify(lessons));
   // res.sendFile()

});

//Route to users 
app.get('/users', function (req, res) {
    //Sending Response over HTTP
    res.send(JSON.stringify(users));

});

//End of Routes 

//Starting App 
app.listen(port);