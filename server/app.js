var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var express = require('express');
var app     = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader("Access-Control-Allow-Headers",
        "Access-Control-Allow-Headers, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/contact', function (req, res, next) {
    if(typeof req.query.tName != 'undefined' && typeof req.query.eMail != 'undefined'){
        let transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        port: 25,
        auth: {
            user: 'slimic.tver@gmail.com',
            pass: 'slim7006206w'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let HelperOptions = {
        from:  '',
        to: 'slimic.tver@yandex.com',
        subject: 'it2m.ru',
        html: '<b>Имя:</b> ' + req.query.tName + '<br>' +
        '<b>eMail:</b> ' + req.query.eMail + '<br>' +
        '<b>Cообщение:</b> ' + req.query.message
    };


    transporter.sendMail(HelperOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log("The message was sent!");
            console.log(info);
        });
    }else{
        console.log('error');
    }
});


app.listen(3001, function() {
    console.log('Server running at http://it2m.ru:3001/');
});