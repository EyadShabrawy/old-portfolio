var typed = new Typed(".auto-type", {
    strings: ["Student", "Frontend Developer", "Software Engineer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
})


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))

