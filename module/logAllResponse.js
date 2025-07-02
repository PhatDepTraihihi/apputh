let webhook = "https://discord.com/api/webhooks/1389972058481623101/JZtMWnCL83gzDml0TYF52H1xijJuQBU97TDl_e7MXOJxXf3YO-3m6eAsin0X8k8T8IpR"; // 🔁 Thay bằng webhook của bạn

let rawBody = $response.body;
let parsedJson = null;
let isError = false;
let content = "";

try {
  parsedJson = JSON.parse(rawBody);
  content = "📥 **UTH API Response (✅ OK)**\n```json\n" + JSON.stringify(parsedJson, null, 2).slice(0, 1800) + "\n```";
} catch (e) {
  isError = true;
  content = "⚠️ **UTH API Response (❌ Parse lỗi)**\n```txt\n" + rawBody.slice(0, 1800) + "\n```";
}

let payload = {
  content: content
};

$task.fetch({
  method: "POST",
  url: webhook,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload)
}).finally(() => {
  $done({});
});
