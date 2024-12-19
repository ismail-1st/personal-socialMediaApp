import express from "express";

const app = express();
const port = process.env.PORT || 4000;

// base
app.get("/", (req, res) => {
  console.log("Req received for base URL");
  res.json(
    { message: 'Hello from TypeScript Node.js server!' }
  );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
