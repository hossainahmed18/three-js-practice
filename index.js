let express = require("express");
const path = require("path");
let app = express();

app.use('/static', express.static(path.join(__dirname, 'js')))


app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

const port = process.env.port || 3000;
app.listen(port, () => console.info(`server has started on port ${port}`));
