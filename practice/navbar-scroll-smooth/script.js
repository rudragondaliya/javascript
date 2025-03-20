document.querySelectorAll('nav a').forEach(Element => {
    Element.addEventListener('click',function(e){
        e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    targetElement.scrollIntoView({
        behaviour: 'smooth'
    });

    });
});

