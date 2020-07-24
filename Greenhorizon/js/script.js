$(document).ready(function(){
    $('.navbar-toggler-icon').click(function(){
        $('.header-ul').toggleClass('active');
    })
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
