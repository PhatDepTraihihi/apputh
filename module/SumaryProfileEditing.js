let obj = JSON.parse($response.body);

// Chỉ sửa 1 trường
obj.credits = 9999;

// Gửi lại response đã sửa
$done({ body: JSON.stringify(obj) });
