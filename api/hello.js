export default function handler(req, res) {
  // 只允许 GET 请求
  if (req.method !== "GET") {
    return res.status(405).json({
      error: "Method not allowed",
      message: "Only GET requests are allowed",
    });
  }

  // 从查询参数中获取 name，默认值为 "World"
  const { name = "World" } = req.query;

  // 返回 JSON 响应
  return res.status(200).json({
    message: `Hello ${name}!`,
  });
}
