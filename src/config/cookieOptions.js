const cookieOptions = {
  httpOnly: false, // 是否允许客户端 JavaScript 访问 Cookie
  secure: false, // 是否只允许 HTTPS 连接发送 Cookie
  sameSite: "Lax", // 控制跨站请求伪造攻击保护级别
  maxAge: 24 * 60 * 60 * 1000, // Cookie 的有效期（毫秒）
};

module.exports = cookieOptions;
