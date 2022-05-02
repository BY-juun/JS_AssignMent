import { AboutBtn, HomeBtn } from "./btn.js";
import { makeCard, makeCards } from "./card.js";
import { data } from "./index.js";

const render = () => {
	const cardWrapper = document.querySelector('.cardWrapper');
	const pathName = window.location.pathname;
	if (pathName === "/MiniMovie") {
		cardWrapper.innerHTML = "";
		HomeBtn.className = "selected";
		AboutBtn.className = "";
		makeCards(data);
	} else if (pathName === "/MiniMovie/about") {
		HomeBtn.className = "";
		AboutBtn.className = "selected";
		cardWrapper.innerHTML = "about";
	} else if (pathName.includes('/movie')) {
		HomeBtn.className = "";
		AboutBtn.className = "";
		cardWrapper.innerHTML = "";
		makeCard(Number(pathName.split("/")[3]));
	}
};

export default render;