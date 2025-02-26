window.addEventListener("scroll", function() {
    let scroll = window.scrollY;
    document.getElementById("layer1").style.transform = `translateY(${scroll * 0.5}px)`;
    document.getElementById("layer0").style.transform = `translateY(${scroll * 0.4}px)`;
    document.getElementById("layer2").style.transform = `translateY(${scroll * 0.3}px)`;
    document.getElementById("layer3").style.transform = `translateY(${scroll * 0.1}px)`;
});
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
