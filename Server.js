const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const accessMiddleware = (req, res, next) => {
    const date = new Date();
    const day = date.getDay(); 
    const hour = date.getHours();
  
    if (day >= 1 && day < 6 && hour >= 9 && hour < 17) {
      next();
    } else {
      res.render('serviceClose');
    }
  };
    app.use(accessMiddleware);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/service', (req, res) => {
    res.render('service');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});
// app.get('/style', (req, res) => {
//     res.render('style');
// });

app.listen(port, () => {
    console.log('Server is listening on port ' + port);
});
