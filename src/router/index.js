const Router = require("koa-router");
const router = new Router();
const cookieOptions = require("../config/cookieOptions");
const userRouter = require("./user");

router.use(userRouter.routes(), userRouter.allowedMethods());
router.get("/", async (ctx, next) => {
  ctx.response.body = "Hello Koa";
  await next();
});

module.exports = router;
