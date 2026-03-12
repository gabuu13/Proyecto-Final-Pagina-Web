window.onscroll = function() {
    var nav = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
        nav.style.backgroundColor = "rgba(255, 182, 223, 0.95)"; 
        nav.style.padding = "10px 0"; 
        nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    } else {
        nav.style.backgroundColor = "transparent";
        nav.style.padding = "20px 0";
        nav.style.boxShadow = "none";
    }
};