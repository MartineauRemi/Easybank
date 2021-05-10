/*___Intersection Observer to lazy load images___*/

const images = document.querySelectorAll("[data-src]");
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 300px 0px"
};

function preloadImage(img){
    const src = img.dataset.src;
    if(!src)
        return;
    img.src = src;
}

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting)
            return;
        else{
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    });
}, imgOptions);

images.forEach(img => {
    imgObserver.observe(img);
});

/*___Intersection Observer to fade in the content in the viewport___*/

const elts = document.querySelectorAll('.fadein');
const eltsOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
};

const eltObserver = new IntersectionObserver((entries, eltObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting)
            return;
        if(entry.intersectionRatio > 0){
            entry.target.style.animation = "fadeIn 0.6s ease-out";
            entry.target.style.opacity = 1;
        }
        else
            entry.target.style.animation = "none";
    });
}, eltsOptions);

elts.forEach(elt => eltObserver.observe(elt));