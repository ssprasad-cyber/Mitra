import { log } from 'console';
import express from 'express';

const app = express();

app.use(express.json());

app.delete("/user/:id",(req, res , next) => {
  console.log(req.params.id);
  return res.send("hello");
});


app.listen(5000, () => console.log("Server open"));

