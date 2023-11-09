var currentImageIndex = 0;
        var imageUrls = [
            "Assets/carousel1.jpg",
            "Assets/carousel2.jpg",
            "Assets/carousel3.jpg",
            "Assets/carousel4.jpg",
            "Assets/carousel5.jpg",
            "Assets/carousel6.jpg"
            
        ];
    
        function changeImage(direction) {
            var furImg = document.querySelector('.fur-img');
            furImg.style.opacity = 0;
            setTimeout(function () {
            if (direction === 'next') {
                currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
            } else if (direction === 'prev') {
                currentImageIndex = (currentImageIndex - 1 + imageUrls.length) % imageUrls.length;
            }

            furImg.src = imageUrls[currentImageIndex];
            furImg.style.opacity = 1;
        }, 300);
        }
