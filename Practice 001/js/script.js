"user strict";

 const NumberOfFilms = +prompt('Сколько Фильмов вы уже посмотрели?', '');
//  console.log(typeof(NumberOfFilms);

const personalMovieDB = {
    Count: NumberOfFilms,
    movies: {},
    actors: {},
    Genres: [],
    privat: false
};

// const a = prompt('Один из помледних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;  
// personalMovieDB.movies[c] = d;

for (let i = 0; i < 2; i++ ) {
    const a = prompt('Один из помледних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);