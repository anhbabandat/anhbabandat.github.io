document.addEventListener('DOMContentLoaded', function() {
    
    // Tìm đến form liên hệ bằng ID
    const contactForm = document.getElementById('contactForm');

    // Kiểm tra xem form có tồn tại không
    if (contactForm) {
        
        // Thêm một sự kiện "lắng nghe" khi người dùng bấm nút Gửi
        contactForm.addEventListener('submit', function(event) {
            
            // Ngăn chặn hành vi mặc định của form là tải lại trang
            event.preventDefault();

            // Lấy dữ liệu từ các ô input
            const name = contactForm.querySelector('input[name="name"]').value;
            const phone = contactForm.querySelector('input[name="phone"]').value;
            const email = contactForm.querySelector('input[name="email"]').value;

            // Kiểm tra xem số điện thoại có được nhập không
            if (phone.trim() === '') {
                alert('Vui lòng nhập số điện thoại của bạn.');
                return;
            }

            // In dữ liệu ra console để kiểm tra (bạn có thể xem bằng cách bấm F12 trong trình duyệt)
            console.log('--- Form Đã Gửi ---');
            console.log('Họ tên:', name);
            console.log('Số điện thoại:', phone);
            console.log('Email:', email);
            
            // Hiện một thông báo đơn giản cho người dùng
            alert('Cảm ơn bạn ' + name + '! Yêu cầu của bạn đã được gửi đi. Chúng tôi sẽ liên hệ lại sớm nhất có thể.');

            // Xóa nội dung đã nhập trong form
            contactForm.reset();
        });
    }
});