$(document).ready(function() {
    const $slider = $(".slider");
    const $images = $slider.find("img");
    const imageCount = $images.length;
    let current = 0; // Chỉ số bắt đầu là 0 (hình ảnh đầu tiên)

    // Thiết lập chiều cao cho slider dựa trên chiều cao của hình ảnh đầu tiên
    // Sẽ lấy chiều cao của hình ảnh đầu tiên và áp dụng cho slider
    $slider.height($images.first().height());

    // Hiển thị hình ảnh đầu tiên
    $images.eq(current).show();

    // Tạo hiệu ứng chuyển đổi giữa các hình ảnh
    setInterval(function() {
        $images.eq(current).fadeOut(1000, function() {
            // Ẩn hình ảnh hiện tại
            current = (current + 1) % imageCount; // Cập nhật chỉ số hình ảnh hiện tại
            $images.eq(current).fadeIn(1000); // Hiển thị hình ảnh tiếp theo
        });
    }, 3000);
});
