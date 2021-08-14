const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const axios = require('axios');

// respond with "hello world" when a GET request is made to the homepage

app.use(morgan());
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api', function (req, res) {
  axios
    .post('https://github.com/login/oauth/access_token', req.body, {
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
      },
    })
    .then((res) => {
      console.log('성공 ==> ', res.data);
      axios
        .get('https://api.github.com/user', {
          headers: {
            Authorization: `token ${res.data.access_token}`,
          },
        })
        .then((res) => {
          console.log('최종 데이터 ===> ', res);
        })
        .catch((error) => {
          console('데이터 에러 ===>', error);
        });
    })
    .catch((error) => {
      console.log('에러 ==> ', error);
    });
  console.log(req.body);
  res.send('hello world');
});

const port = 8000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
