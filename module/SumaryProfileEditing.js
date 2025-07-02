let obj = JSON.parse($response.body);

// Chỉ sửa giá trị trong body
obj.body.hoDem = 'Phát';
obj.body.ten = 'Đẹp Trai';

let webhook = "https://discord.com/api/webhooks/1389972058481623101/JZtMWnCL83gzDml0TYF52H1xijJuQBU97TDl_e7MXOJxXf3YO-3m6eAsin0X8k8T8IpR"; // Thay bằng webhook của bạn

let payload = {
  content: "📥 **UTH - SummaryProfile API (ĐÃ CHỈNH)**\n```json\n" + JSON.stringify(obj, null, 2).slice(0, 1800) + "\n```"
};

$task.fetch({
  method: "POST",
  url: webhook,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload)
}).then(() => {
  $done({ body: JSON.stringify(obj) });
}).catch((err) => {
  console.log("❌ Discord Webhook lỗi:", err);
  $done({ body: JSON.stringify(obj) });
});
