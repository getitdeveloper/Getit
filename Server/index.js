const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

app.use(morgan('dev'));
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/test/login', function (req, res) {
  console.log('데이터 ===> ', req.body);

  if (req.body.social === 'google') {
    res.status(200).json({
      nickname: 'Google',
    });
  } else if (req.body.social === 'github') {
    res.status(200).json({
      nickname: 'Github',
    });
  } else {
    res.status(200).json({
      nickname: 'Kakao',
    });
  }
});

const port = 8000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
