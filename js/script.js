"use strict";
let nuberOfFilms;

function start() {
   nuberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
   
   while (nuberOfFilms == '' || nuberOfFilms == null || isNaN(nuberOfFilms)) {
      nuberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
   }
}

start();


const personalMovieDB = {
   count: nuberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};

function showMyDB() {
   if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
   }

}

function rememberMyFilms(){
   for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотреных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
   
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         personalMovieDB.movies[a] = b;
         console.log('Dobra');
      } else {
         console.log('Bober perdole');
         i--;
      }
   }
}

rememberMyFilms();

function detectedPersonalLevel() {
   if (personalMovieDB.count < 10) {
      console.log('Bober perdole');
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('boder');
   } else if (personalMovieDB.count > 30) {
      console.log('Dobra dobra');
   } else {
      console.log('o kurva');
   }
}



detectedPersonalLevel();

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
   for (let i = 1; i < 4; i++) {
      const genre = prompt(`Ваш любимый жанр под номером ${i}`);
      personalMovieDB.genres[i - 1] = genre;
   }
}

writeYourGenres();

