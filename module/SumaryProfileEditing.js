let obj = JSON.parse($response.body);

// Chỉ sửa giá trị trong body
obj.body.hoDem = 'Phát';
obj.body.ten = 'Đẹp Trai';
obj.body.maSinhVien = "************"


// Gửi lại response đã sửa
$done({ body: JSON.stringify(obj) });
