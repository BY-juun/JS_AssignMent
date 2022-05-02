import render from "./render.js";

export const HomeBtn = document.getElementById("HomeBtn");
export const AboutBtn = document.getElementById("AboutBtn");

HomeBtn.addEventListener("click", () => {
	history.pushState(null, null, '/MiniMovie');
	render();
})

AboutBtn.addEventListener("click", () => {
	history.pushState(null, null, '/MiniMovie/about');
	render();
})