const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 3000);

//app.use('/module/main.js', express.static(path.join(__dirname, 'public')));

app.get('/module/test.js', (req, res) => { 
  res.sendFile(path.join(__dirname, '/module/test.js'));
});

app.get('/module/index.js', (req, res) => { 
  res.sendFile(path.join(__dirname, '/module/index.js'));
});

app.get('/module/main.js', (req, res) => { 
  res.sendFile(path.join(__dirname, '/module/main.js'));
});

app.get('/source/img/bg_dpimg.png', (req, res) => { 
  res.sendFile(path.join(__dirname, '/source/img/bg_dpimg.png'));
});

app.get('/source/vod/tekken8.mp4', (req, res) => { 
  res.sendFile(path.join(__dirname, '/source/vod/tekken8.mp4'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));  
});

app.get('/test', (req, res) => { 
  res.send(
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>In-The-M-ovie- Express!</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        main>div:nth-of-type(1)>div:hover {
          background-color: rgba(214, 214, 214, 1);
          color: black;
        }
    </style>
    </head>
    <body>
        <div id="app"></div>
        <script src="./module/main.js"></script>          
    </body>
    </html>`
  );
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), ' 번 포트에서 대기 중');
});