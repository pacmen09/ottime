function updateTime()
{



function zero_first_format(value)
{
    if (value < 10)
    {
        value='0'+value;
    }
    return value;
}

var ter = document.getElementById("ter");
var tter = document.getElementById("tter");

var houu = document.getElementById("houu");
var minn = document.getElementById("minn");
var secc = document.getElementById("secc");
// объявляем наши даты
var current = new Date(); // сегодня
var old = new Date("2022-09-03"); // !!! год-месяц-день !!!



    // сначала находим количество дней между датами
    var daysall = Math.abs(old.getTime() - current.getTime()) / (1000 * 3600 * 24);  //дни с погрешностью
    var days = Math.ceil(Math.abs(old.getTime() - current.getTime()) / (1000 * 3600 * 24)); //   дни
    
    var hourall = Math.abs(old.getTime() - current.getTime()) / (1000 * 3600); //часы с погрешностью
    // var hour = Math.ceil(Math.abs((days * 24) - hourall) + 3);
    let hou = current.getHours(); //  часы
    
    let min = current.getMinutes(); // минуты
    
    let sec = current.getSeconds(); //секунды 
    
    
    var year = Math.floor(days / 365); // вычисляем кол-во лет. Math.floor убирает остаток.
    var months = Math.floor((days - (year * 365)) / 30); // отняв года, вычисляем месяцы
    let dayss = current.getDate(); // отняв года, вычисляем месяцы
    
    // осталось вывести полученную информацию в контейнер:
    ter.innerHTML = ' <span class="text-w">Day: </span>' + '<br>' + days ;
    tter.innerHTML = '<span class="text-w">We together for: </span>' + '<br>' + zero_first_format(year) + ' year ' + zero_first_format(months) + ' months ' + zero_first_format(dayss) + ' days ';




    houu.innerHTML = zero_first_format(hou) + ':';
    minn.innerHTML = zero_first_format(min) + ':';
    secc.innerHTML = zero_first_format(sec);
    
   
}

setInterval(updateTime, 1000);
