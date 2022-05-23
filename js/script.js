"use strict";
const nuberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
   count: nuberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};

// const a = prompt('Один из последних просмотреных фильмов?'),
//       b = prompt('На сколько оцените его?'),
//       c = prompt('Один из последних просмотреных фильмов?'),
//       d = prompt('На сколько оцените его?');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

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

if (personalMovieDB.count < 10) {
   console.log('Bober perdole');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
   console.log('boder');
} else if (personalMovieDB.count > 30) {
   console.log('Dobra dobra');
} else {
   console.log('o kurva');
}
console.log(personalMovieDB);