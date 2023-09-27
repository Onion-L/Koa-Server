const Koa = require("koa");
const app = new Koa();
const logger = require("koa-logger");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");
const corsOption = require("./config/corsOptions");
// const db = require('./db/database');
const router = require("./router/index");

const port = process.env.PORT || 3000;

//Middleware
app
  .use(logger())
  .use(bodyParser())
  .use(cors(corsOption))
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});
