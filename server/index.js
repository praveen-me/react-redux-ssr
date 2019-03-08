import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('/');
});

app.listen(3001, (err) => {
  console.log(`Server is running on http://localhost:3001`);
})