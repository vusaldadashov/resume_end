const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');
const bodyParser = require('body-parser');
const app = express();

const transporter = nodemailer.createTransport(sendGridTransport({
  auth: {
    api_key: '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'
  }
}));

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'css')));
app.use(express.static(path.join(__dirname,'img')));
app.use(express.static(path.join(__dirname,'js')));

app.set('view engine','ejs');
app.set('views','views');

app.use('/',(req,res,next) => {
    res.render('index');
})

app.use('/send',(req,res,next) => {
    const email = req.body.email;
    const name = req.body.name;
    const message = req.body.message;
    if(email && name && message){
      transporter.sendMail({
        from: email,
        to: 'vusaldadashov99@gmail.com',
        subject: name,
        text: message
      });        
      res.redirect('/main');
    }
})


app.get('/portfolio',(req,res,next)=>{
  res.render('portfolio');
})

app.listen(7000);