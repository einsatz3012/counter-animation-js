    
function counter(id, start, end, duration) {
    const element = document.getElementById(id);
    const range = end - start;
    const step = duration / range;
    for(let i=0; i<range+1; i++) {
        setTimeout(function() {
            element.innerText = start + i + "+";
        }, i*step);
    }
}

const counterElements = document.querySelectorAll("[data-animation-name='counter']");
counterElements.forEach(element => {

    const start = element.getAttribute("data-start");
    const end = element.getAttribute("data-end");
    const duration = element.getAttribute("data-duration");

    const range = end - start;
    const step = duration / range;

    for(let i=0; i<range+1; i++) {
        setTimeout(function() {
            element.innerText = i + "+";
        }, i*step);
    }

});

