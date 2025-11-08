const programContent = document.querySelectorAll(".program-line__content");

programContent.forEach((programLine)=> {
    const title = programLine.querySelector(".program-line__title");
    const descr = programLine.querySelector(".program-line__descr");
    const descrAll = document.querySelectorAll(".program-line__descr");
    title.addEventListener("click", () => {
        descrAll.forEach((element) => {
            element.classList.remove("active");
        })
        descr.classList.add("active");
    })
})