document.addEventListener('DOMContentLoaded', ()=> {
    const scrollToTopBtn = document.getElementById('botaoSubir');
    
    window.addEventListener('scroll', ()=> {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    window.addEventListener('scroll', ()=> {
        if (window.scrollY > 300) { // Mostra o botão após rolar 300 pixels
            scrollToTopBtn.classList.add('show');
            
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

function menuShow(){
    let menuMobile = document.querySelector(".mobile-menu");
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    }else{
        menuMobile.classList.add('open');
    }
}