/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/


"user strict";

 let NumberOfFilms;
//  console.log(typeof(NumberOfFilms);

function start() {
    NumberOfFilms = +prompt('Сколько Фильмов вы уже посмотрели?', '');

    while (NumberOfFilms == '' || NumberOfFilms == null || isNaN(NumberOfFilms)) {
        NumberOfFilms = +prompt('Сколько Фильмов вы уже посмотрели?', '');
    }
    
}

start();

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



function rememberMyFilms() {
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
}

rememberMyFilms();

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