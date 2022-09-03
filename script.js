const bars = document.querySelector('.icon');
const menu = document.querySelector('.menu');
bars.addEventListener("click", () => {
    const visibility = menu.getAttribute("data-visible");
    if(visibility=="false")
    menu.setAttribute('data-visible', true);
    else if (visibility == "true")
    menu.setAttribute('data-visible', false);
})
