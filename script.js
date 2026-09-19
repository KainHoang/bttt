function upDate(previewPic) {
    // 1. In thông tin ra Console để kiểm tra sự kiện và dữ liệu
    console.log("Sự kiện rê chuột kích hoạt!");
    console.log("Thẻ alt của ảnh:", previewPic.alt);
    console.log("Đường dẫn ảnh (src):", previewPic.src);

    // 2. Lấy phần tử div hiển thị lớn
    var imageDiv = document.getElementById("image");

    // 3. Đổi văn bản thành nội dung thuộc tính alt
    imageDiv.innerHTML = previewPic.alt;

    // 4. Đổi hình nền thành đường dẫn ảnh preview
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    // 1. Lấy phần tử div hiển thị lớn
    var imageDiv = document.getElementById("image");

    // 2. Khôi phục hình nền về giá trị ban đầu (rỗng)
    imageDiv.style.backgroundImage = "url('')";

    // 3. Khôi phục lại đoạn văn bản gốc
    imageDiv.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}
