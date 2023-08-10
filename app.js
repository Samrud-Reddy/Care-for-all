const express = require('express')
const path = require("path")
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use("*/styles", express.static(path.join(__dirname, "styles")));
app.use("*/files", express.static(path.join(__dirname, "static")));
app.use("*/scripts", express.static(path.join(__dirname, "scripts")));

// !debug
// app.use((req, res, next) => {
// 	console.log(req.url);
// 	next();
// });

app.get('/', (req, res) => {
  res.render('index.ejs')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`http://localhost:${port}`)
})