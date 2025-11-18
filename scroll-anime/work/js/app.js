const objects =document.querySelectorAll('.scroll-in');

const animateOnScroll = function(entries,observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
        entry.target.classList.add('displayed');
        } else {
      entry.target.classList.remove('displayed');
        }
    });
}

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1
}

const observer = new IntersectionObserver(animateOnScroll,options);

objects.forEach(object => {
    observer.observe(object);
});



