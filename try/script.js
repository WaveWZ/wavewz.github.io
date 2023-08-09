const container = document.querySelector('.container');
const page2 = document.querySelector('.page2');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const pageHeight = container.clientHeight; // Tek sayfanın yüksekliği
    
    if (scrollPosition >= pageHeight) {
        page2.style.visibility = 'visible';
    } else {
        page2.style.visibility = 'hidden';
    }
});
