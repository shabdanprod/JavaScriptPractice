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

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('DONE');
    } else {
        console.log('error');
        i--;
    }

    
}

if (personalMovieDB.Count < 10) {
    console.log("довольно мало фильмов");
} else if (personalMovieDB.Count >= 10 && personalMovieDB.Count <30) {
    console.log("Вы класический зритель!");
} else if (personalMovieDB.Count >= 30) {
    console.log("вы киноман");
} else {
    console.log("Произошла ошибка")
}

console.log(personalMovieDB);