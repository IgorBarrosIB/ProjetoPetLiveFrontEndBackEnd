const express = require("express");
const routes = require("./routes");
const app = express();
global.connection = require("./src/database");
const cors = require('cors')

app.use(cors())

app.use(express.json());
app.use(routes);

app.listen(3000);