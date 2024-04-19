let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % totalSlides;
  slides[currentSlide].classList.add('active');
}

function startSlider() {
  setInterval(nextSlide, 5000); // Đổi slide mỗi 5 giây
}

startSlider();
const slide = document.getElementById('slider');
const tb = document.querySelector('.tb')
const searchInput = document.getElementById('inputSearch');
const searchButton = document.getElementById('SearchBtn');
const allProducts = document.querySelectorAll('.product');
const allProductSales = document.querySelectorAll('.product-sale');

searchButton.addEventListener('click', searchProducts);
searchInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchProducts();
    }
});

function searchProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    
    // Duyệt qua tất cả sản phẩm và ẩn hoặc hiển thị sản phẩm tương ứng
    allProducts.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = 'block';
            slide.style.display = 'none';
        } else {
            product.style.display = 'none';
            slide.style.display = 'none';
        }
    });

    allProductSales.forEach(productSale => {
        const productName = productSale.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            productSale.style.display = 'block';
            slide.style.display = 'none';
        } else {
            productSale.style.display = 'none';
            slide.style.display = 'none';
        }
    });

    // Ẩn hoặc hiển thị các danh mục sản phẩm tương ứng
    var input, filter, divs, h1s, i, j, txtValue;
    var hasMatch = false;
    input = document.getElementById('inputSearch');
    filter = input.value.toUpperCase();
    divs = document.querySelectorAll('#products > div');
    for (i = 0; i < divs.length; i++) {
        h1s = divs[i].getElementsByTagName('h1');
        for (j = 0; j < h1s.length; j++) {
            var h1 = h1s[j];
            var categoryHasMatch = false;
            txtValue = h1.textContent || h1.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                hasMatch = true;
                categoryHasMatch = true;
                break;
            }
        }
        divs[i].style.display = categoryHasMatch ? 'block' : 'none';
    }
    tb.style.display = hasMatch ? 'none' : 'block';
}




