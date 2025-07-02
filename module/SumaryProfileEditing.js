let obj = JSON.parse($response.body);

// Chỉ sửa giá trị trong body
obj.body.hoDen = Phát;
obj.body.ten = Đẹp Trai;

// Gửi lại response đã sửa
$done({ body: JSON.stringify(obj) });
