"use strict";

let numberOfFilms;

function askMoviesQuantity() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms === "" || numberOfFilms === null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

askMoviesQuantity();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function sayStatus() {
    if (personalMovieDB.count < 10) {
        alert("Просмотренно довольно мало фильмов.");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert("Вы класический зритель.");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман.");
    } else {
        alert("Произошла ошибка.");
    }
}

sayStatus();

function getPersonalData() {
    for (let i = 0; i < 2; i++) {
        let movie,
            rating;
        do {
            movie = prompt("Один из последних просмотренных фильмов?","");
        }
        while ( movie === null || 
            movie === '' || 
            movie.length > 50);
    
        do {
            rating = prompt("На сколько оцените его?","")
        }
        while ( rating === null || 
            rating === '' || 
            rating > 10 || 
            isNaN(rating));
    
        personalMovieDB.movies[movie] = rating;
    }
}

getPersonalData();

function showMyDB() {
    if (personalMovieDB.private === false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        let genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
        personalMovieDB.genres.push(genre);
    }
}

writeYourGenres();


console.log(personalMovieDB);