"use strict";


let  number0Films;

function start () {
    number0Films =+prompt('сколько фильмов вы уже просмотрели?', '');

    while (number0Films == '' || number0Films == null || isNaN(number0Films)) {
    number0Films =+prompt('сколько фильмов вы уже просмотрели?', '');
    }
}
start();


const personalMovieDB = {
    count: number0Films,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms () {
    for (let i = 0; i < 2; i++ ) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        personalMovieDB.movies[a]  = b;  
        
        if (a != null && b != null && a != '' && b != '' && a.length< 50  ) {
            personalMovieDB.movies[a]  = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();


function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();


function ShowMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);        
    }
}

ShowMyDB (personalMovieDB.privat);

function writeYourGenres () {
    for (let i=1; i<=3; i++) {
        const genre = prompt(`ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres() ;


