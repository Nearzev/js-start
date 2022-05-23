"use strict";
const nuberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
   count: nuberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};

const a = prompt('Один из последних просмотреных фильмов?'),
      b = prompt('На сколько оцените его?'),
      c = prompt('Один из последних просмотреных фильмов?'),
      d = prompt('На сколько оцените его?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
