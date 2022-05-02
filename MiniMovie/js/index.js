import { makeCards } from "./card.js";
import render from "./render.js";

export let data = null;

const fetchMovieData = async () => {
	data = (await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=38447fbd2f00156efebbd1edbb57835f`)).json()).results;
	data = data.map((value) => {
		return {
			...value,
			like: false,
		}
	})
	makeCards(data);
};
window.addEventListener('popstate', () => {
	render()
})

fetchMovieData();