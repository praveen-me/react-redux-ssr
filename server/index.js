import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('server started');
});

app.listen(3001, (err) => {
  console.log(`Server is running on http://localhost:3001`);
})