import express from "express";
import path from "path";
import bodyParser from "body-parser";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(bodyParser.json());

// Serve the React static files after build
app.use(express.static(path.resolve(__dirname, "client", "build")));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
app.post('/api/data', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

// All other unmatched requests will return the React app
app.get("/", (req, res) => {
  console.log("hole inde.html")
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});