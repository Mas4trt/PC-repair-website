const modalButton = document.querySelector(".modal__button");
const modal = document.querySelector(".modal");

const courseButton = document.querySelector(".course__button");

modalButton.addEventListener("click", () => {
    modal.style.display = "flex";
})

modal.addEventListener("click", (event) => {
    const modalContent = event.target.closest(".modal__inner");
    if(!modalContent) {
        modal.style.display = "";
    }
})

courseButton.addEventListener("click", () => {
    modal.style.display = "flex";
})

