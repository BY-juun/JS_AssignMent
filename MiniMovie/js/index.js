import { makeCards } from "./card.js";
import render from "./render.js";

export let data = null;

// const fetchMovieData = async () => {
// 	data = (await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=38447fbd2f00156efebbd1edbb57835f`)).json()).results;
// 	data = data.map((value) => {
// 		return {
// 			...value,
// 			like: false,
// 		}
// 	})
// 	makeCards(data);
// };

const fetchMovieData = () => {
	return new Promise((resolve, reject) => {
		resolve(customFetch(`https://api.themoviedb.org/3/movie/popular?api_key=38447fbd2f00156efebbd1edbb57835f`));
	})
}

const customFetch = (url) => {
	return fetch(url)
		.then((res) => {
			if (res.ok === true)
				return res.json();
			else
				throw new Error("서버 에러");
		})
		.then((res) => {
			data = res.results;
			return (res.results);
		})
		.catch((error) => {
			alert(error);
		})

}

window.addEventListener('popstate', () => {
	render()
})

fetchMovieData().then((res) => {
	makeCards(res);
});