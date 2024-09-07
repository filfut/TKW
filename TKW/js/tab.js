$(document).ready(function() {
    // Hiển thị tab đầu tiên
    $(".tab-content > div:first-child").addClass("active");

    $(".tab a").click(function(event) {
        event.preventDefault();

        // Xóa lớp active khỏi tất cả các tab và tab-content
        $(".tab > li").removeClass("active");
        $(".tab-content > div").removeClass("active");

        // Thêm lớp active cho tab hiện tại và tab-content tương ứng
        $(this).parent().addClass("active");
        let href = $(this).attr("href"); // Sửa từ 'herf' thành 'href'
        $(href).addClass("active");
    });
});
