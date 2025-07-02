let obj = JSON.parse($response.body);

// Chỉ sửa giá trị trong body
obj.body.gpa = 4.00;
obj.body.studyProgress.current = 120.00

// Gửi lại response đã sửa
$done({ body: JSON.stringify(obj) });
