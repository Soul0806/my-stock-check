export default function handler(req, res) {
  res.status(200).json({
    message: "🚀 Vercel API 運作成功！",
    time: new Date().toISOString(),
  });
}
