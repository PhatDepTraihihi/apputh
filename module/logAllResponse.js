// Thay webhook này bằng webhook thật của bạn
let webhook = "https://discord.com/api/webhooks/1389972058481623101/JZtMWnCL83gzDml0TYF52H1xijJuQBU97TDl_e7MXOJxXf3YO-3m6eAsin0X8k8T8IpR";

let rawBody = $response.body;
let parsedJson = null;
let isError = false;
let content = "";

try {
  parsedJson = JSON.parse(rawBody);
  content = "**UTH API Response (OK)**\n```json\n" + JSON.stringify(parsedJson, null, 2).slice(0, 1800) + "\n```";
} catch (e) {
  isError = true;
  content = "**UTH API Response (Parse lỗi)**\n```txt\n" + rawBody.slice(0, 1800) + "\n```";
}

let payload = {
  content: content
};

// Gửi log về Discord
$task.fetch({
  method: "POST",
  url: webhook,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload)
}).then(() => {
  $done({ body: rawBody });  // Dù lỗi hay không vẫn trả về cho app
}).catch(err => {
  console.log("❌ Webhook lỗi:", err);
  $done({ body: rawBody });
});
