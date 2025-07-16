// Global variables for slideshow
let slideIndex = 0;

// Functions for slideshow control (made global so HTML can call them)
window.plusSlides = function(n) {
    showSlides(slideIndex += n);
}

window.currentSlide = function(n) {
    showSlides(n); // Note: Here n is the direct index, not an increment
}

// Main function to display slides
function showSlides(n) {
    const slides = document.querySelectorAll('#image-slider .slide');
    const dots = document.querySelectorAll('#dots-container .dot');

    if (slides.length === 0) return; // Handle case with no slides

    // Calculate the correct slide index to loop
    if (n >= slides.length) { slideIndex = 0; }
    else if (n < 0) { slideIndex = slides.length - 1; }
    else { slideIndex = n; } // Update slideIndex based on 'n'

    // Hide all slides and deactivate all dots
    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('active'));

    // Display the current slide and activate its dot
    if (slides[slideIndex]) { // Check if slide exists
        slides[slideIndex].style.display = 'block';
        dots[slideIndex].classList.add('active');
    }
}


document.addEventListener('DOMContentLoaded', function() {
    // --- Form Submission Logic ---
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = contactForm.querySelector('input[name="name"]').value;
            const phone = contactForm.querySelector('input[name="phone"]').value;
            const email = contactForm.querySelector('input[name="email"]').value;

            if (phone.trim() === '') {
                alert('Vui lòng nhập số điện thoại của bạn.');
                return;
            }

            console.log('--- Form Đã Gửi ---');
            console.log('Họ tên:', name);
            console.log('Số điện thoại:', phone);
            console.log('Email:', email);

            // Chuyển hướng sang trang s2.html
            window.location.href = 's2.html';
        });
    }

    // --- Slideshow Initialization Logic ---
    const imageSlider = document.getElementById('image-slider');
    const dotsContainer = document.getElementById('dots-container');

    // IMPORTANT: Hardcoded image names. Update this array if you add/remove images.
    // Đã cập nhật để bao gồm ảnh từ 1.jpg đến 13.jpg theo hình ảnh bạn cung cấp
    const imageNames = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg'];

    if (imageSlider && dotsContainer && imageNames.length > 0) {
        imageNames.forEach((imageName, index) => {
            // Create slide div
            const slide = document.createElement('div');
            slide.classList.add('slide');
            const img = document.createElement('img');
            img.src = `img/${imageName}`; // Adjust path if necessary
            img.alt = `Ảnh Villa ${index + 1}`;
            slide.appendChild(img);
            imageSlider.appendChild(slide);

            // Create dot indicator
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => window.currentSlide(index));
            dotsContainer.appendChild(dot);
        });

        showSlides(0); // Show the first slide initially

        // Optional: Auto-play slideshow
        setInterval(() => {
            window.plusSlides(1);
        }, 5000); // Change image every 5 seconds
    }
});