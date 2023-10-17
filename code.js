const faqTitleArrowContainers = document.querySelectorAll(".div__title-arrow-container");

faqTitleArrowContainers.forEach(container => {
    const arrow = container.querySelector('[alt="Arrow img"]');
    const title = container.querySelector("h2");
    const paragraph = container.nextElementSibling;

    container.addEventListener('click', () => {

        if (paragraph.style.display === 'none') 
        {
            title.style.fontWeight = "700";
            paragraph.style.display = 'block';
            arrow.style.transform = 'rotate(180deg)';
        } 
        else 
        {
            title.style.fontWeight = "400";
            paragraph.style.display = 'none';
            arrow.style.transform = 'rotate(0deg)';
        }
    })
})