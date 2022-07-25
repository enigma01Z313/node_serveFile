const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

//setup public diractory
const publicDirectoryPath = path.join(__dirname, "./public");
app.use(express.static(publicDirectoryPath));

//open this on browser
//http://localhost:3000/filemanager/image.JPG

//method 2
//import dummy db
const images = require("./db");
app.get("/files/:id", (req, res) => {
  const { path: imagePath } = images.find((item) => item.id === +req.params.id);
  const imageAbsolutePath = path.resolve('./', './files', imagePath)
  return res.sendFile(imageAbsolutePath)
});

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
