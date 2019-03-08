import express from 'express';
import { template } from '../helper/template';

const app = express();

// Set path for static files
app.use(express.static('dist'));

app.get('/', (req, res) => {
  // const jsx = renderToString()
  
  res.send(template())
});

app.listen(3001, (err) => {
  console.log(`Server is running on http://localhost:3001`);
})