"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let movieOne = prompt("Один из последних просмотренных фильмов?","");
let ratingOne = prompt("На сколько оцените его?","");
let movieTwo = prompt("Один из последних просмотренных фильмов?","");
let ratingTwo = prompt("На сколько оцените его?","");

personalMovieDB.movies[movieOne] = ratingOne;
personalMovieDB.movies[movieTwo] = ratingTwo;

console.log(personalMovieDB);