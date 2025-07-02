let rawBody = $response.body;

try {
  let obj = JSON.parse(rawBody);

  // Gửi sang Discord
  let discordPayload = {
    content: "📥 **UT API Response**\n```json\n" + JSON.stringify(obj, null, 2).slice(0, 1800) + "\n```"
  };

  $task.fetch({
    method: "POST",
    url: "https://discord.com/api/webhooks/1389972058481623101/JZtMWnCL83gzDml0TYF52H1xijJuQBU97TDl_e7MXOJxXf3YO-3m6eAsin0X8k8T8IpR", // 🔁 thay bằng link webhook của bạn
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(discordPayload)
  }).then(() => {
    $done({ body: JSON.stringify(obj) });
  });

} catch (err) {
  $notify("❌ Lỗi parse JSON", err.toString(), "");
  $done({ body: rawBody });
}
