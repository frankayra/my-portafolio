document.addEventListener('DOMContentLoaded', () => {
    const contents_to_load = document.querySelectorAll(".dynamic-content");
    document.addEventListener('scroll', (e) => {
        contents_to_load.forEach(element => {
            if (isInViewport(element)) {
                // console.log(isInViewport(element));
                element.style.opacity = "1";
                element.style.transform = "translateX(0)";
            }
        });
    });

    ////////// Cargar los grid //////////
    var a = function () {
        var lista_griddy = document.querySelectorAll('.griddy');
        lista_griddy.forEach(griddy => {
            griddy.childNodes.forEach(child => {
                console.log(child.classList);
            })
        });

    };

})
function isInViewport(element) {
    const rectangle = element.getBoundingClientRect();
    console.log(rectangle.top);
    const rectangle_middle = (rectangle.top + rectangle.bottom) / 2;
    return (rectangle.top >= 0 && rectangle.top <= window.innerHeight) ||
        (rectangle_middle >= 0 && rectangle_middle <= window.innerHeight);
}
