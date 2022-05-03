const ModalOnBtn = document.querySelector(".Modal_On_Btn");
const ModalOffBtn = document.querySelector(".Modal_Off_Btn");
const Overlay = document.querySelector(".overlay");
const Modal = document.querySelector(".Modal");



Overlay.addEventListener("click", () => {
	Modal.classList.replace("Showing", "NotShowing");
})

ModalOnBtn.addEventListener("click", () => {
	Modal.classList.replace("NotShowing", "Showing");
	Outer.style.background = "rgba(0, 0, 0, 0.6)";
})

ModalOffBtn.addEventListener("click", () => {
	Modal.classList.replace("Showing", "NotShowing");
	Outer.style.background = "none";

})

