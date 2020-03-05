function isElementInViewport (el) {

    var rect = el.getBoundingClientRect();

    return (
        (rect.top >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.bottom >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}

export default isElementInViewport;
