"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert("Просмотренно довольно мало фильмов.");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы класический зритель.");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман.");
} else {
    alert("Произошла ошибка.");
}

for (let i = 0; i < 2; i++) {
    let movie,
        rating;
    do {
        movie = prompt("Один из последних просмотренных фильмов?","");
    }
    while ( movie === null || movie === '' || movie.length > 50);

    do {
        rating = prompt("На сколько оцените его?","")
    }
    while ( rating === null || rating === '' || rating > 10);

    personalMovieDB.movies[movie] = rating;
}


console.log(personalMovieDB);