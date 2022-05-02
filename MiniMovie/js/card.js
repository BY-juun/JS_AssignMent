import { data } from "./index.js";
import render from "./render.js";

const renderCard = () => {
	const pathName = window.location.pathname;
	const cardWrapper = document.querySelector('.cardWrapper');
	cardWrapper.innerHTML = `<h2>${pathName.split("/")[3]}</h2>`;
}

const onClickCard = (movie) => () => {
	history.pushState(null, null, `/MiniMovie/movies/${movie.id}`);
	render(renderCard);
}

const onClickLike = (e, movie) => {
	e.stopPropagation();

	movie.like = !movie.like;
	const likeImg = document.getElementById(`likeImg${movie.id}`);
	likeImg.src = movie.like ? "http://127.0.0.1:5500/MiniMovie/public/like.png" : "http://127.0.0.1:5500/MiniMovie/public/unlike.png"

}

export const cardFactory = (movie) => {

	const cardWrapper = document.querySelector('.cardWrapper');
	const cardRoot = document.createElement("div");
	const cardImg = document.createElement("img");
	const cardTitle = document.createElement("h4");
	const likeBtn = document.createElement("button");
	const likeImg = document.createElement("img");

	cardRoot.className = "card";
	cardTitle.className = "cardTitle";
	cardImg.className = "ThumbNailImg";

	likeImg.id = `likeImg${movie.id}`;

	cardImg.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
	likeImg.src = movie.like ? "http://127.0.0.1:5500/MiniMovie/public/like.png" : "http://127.0.0.1:5500/MiniMovie/public/unlike.png"
	cardTitle.innerText = movie.original_title;

	likeBtn.appendChild(likeImg)
	cardTitle.appendChild(likeBtn);
	cardRoot.appendChild(cardImg);
	cardRoot.appendChild(cardTitle);
	likeBtn.addEventListener('click', (e) => onClickLike(e, movie));
	cardRoot.addEventListener('click', onClickCard(movie))
	cardWrapper.appendChild(cardRoot);
}

export const makeCards = (data) => {
	data.forEach((movie) => {
		cardFactory(movie);
	})
}

export const makeCard = (id) => {
	const movie = data.filter((value) => value.id === id);
	cardFactory(movie[0]);
}