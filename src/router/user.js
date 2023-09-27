const Router = require("koa-router");
const router = new Router();

router.post("/login", async (ctx, next) => {
  const value = ctx.request.body;
  ctx.body = "cookie is set";
  console.log(value.username, value.password);
});

module.exports = router;
