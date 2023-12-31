
const express = require('express');
const path = require('path');
const hbs = require('hbs'); 
const app = express();
const port = process.env.PORT || 3000;

// public static  path 
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");


app.set("view engine", "hbs");
app.set('views', template_path);
hbs.registerPartials(partials_path);


app.use(express.static(static_path));


// routing 
app.get("/", (req, res) => {
    // res.send("Welcome to Home Page");
    res.render('index');
});

app.get("/about", (req, res) => {
  // res.send("Welcome to About Page");
  res.render('about');
});

app.get("/weather", (req, res) => {
  // res.send("Welcome to Weather Page");
  res.render('weather');
});

app.get("*", (req, res) => {
  res.render('404error',{
    errorMsg: 'Opps Page Not Found'
  });
});

app.listen(port, () => {
    console.log(`listening to the port at ${port}`);
});