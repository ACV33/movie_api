const bodyParser = require('body-parser');

const express = require('express'),
    app = express();
    bodyParser = require('body-parser'),
    uuid = require('uuid');
    morgan = require('morgan');


app.use(bodyParser.json());

let users = [

]

let movies = [
    {
        title: 'Stand By Me',
        description: 'After the death of one of his friends, a writer recounts a childhood journey with his friends to find the body of a missing boy.'
    },
    {
        title: 'Goodfellas',
        description: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.'
    },
    {   
        title: 'Girls Just Want to Have Fun',
        description: 'Janey is new in town and soon meets Lynne, who shares her passion for dancing in general and "Dance TV" in particular.'
    },
     {
        title: 'Sex and the City',
        description: 'A New York City writer on sex and love is finally getting married to her Mr. Big. But her three best girlfriends must console her after one of them inadvertently leads Mr. Big to jilt her.'  
     },
      {
        title: 'Edward Scissorhands',
        description: 'An artificial man, who was incompletely constructed and has scissors for hands, leads a solitary life. Then one day, a suburban lady meets him and introduces him to her world.'
      }
];

// GET requests
app.get('/', (req, res) => {
  res.send('Here is a few of my top favorite movies');
});

app.get('/documentation', (req, res) => {                  
  res.sendFile('public/documentation.html', { root: __dirname });
});

app.get('/movies', (req, res) => {
  res.json(movies);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(404).send('Something went wrong!');
  });


// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});

