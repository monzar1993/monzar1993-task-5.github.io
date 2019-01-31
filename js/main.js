// Task №1
var browser = prompt('Какой у Вас браузер?', 'Chrome');

document.write("<h1>Task №1, №2 </h1><p>(представлены через &laquo;alert&raquo; в первую очередь)</p>");

if(browser == 'IE') {
  alert('О, да у вас IE!');
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
  alert('Да, и эти браузеры мы поддерживаем');
} else {
  alert('Мы надеемся, что и в вашем браузере все ок!');
}



// // Task №2
var a = +prompt('a?', '');

switch (a) {
  case 0:
    alert( 0 );
    break;

  case 1:
    alert( 1 );
    break;

  case 2:
  case 3:
    alert( '2,3' );
    break;
}

// // Task №3
document.write("<h1>Task №3</h1>");

var date = new Date();
var hour = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

if (minutes < 10)
{
minutes = "0" + minutes;
}

if (seconds < 10)
{
seconds = "0" + seconds;
}

document.write("Текущее время: " + hour + ":" + minutes + ":" + seconds)

// // Task №4

	document.write("<h1>Task №4</h1><p></p>");

var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница","Суббота"];
var day_now = new Date();
var milliNow = day_now.getTime();

function now_date(N)
	{
	var day_after_N = new Date(1000 * 60 * 60 * 24 * N);
	var milliN = day_after_N.getTime();

	var milliNowPlusN = new Date(milliNow + milliN);

	document.write("Через "+ N +" дней будет следующая ДАТА: <p>");
	document.write("Год: " + milliNowPlusN.getFullYear() + "<br>");
	document.write("Месяц: " + months[milliNowPlusN.getMonth()] + "<br>");
	document.write("День недели: " + days[milliNowPlusN.getDay()] + "<br>");
	document.write("Число: " + milliNowPlusN.getDate() + "<br>");
	}

	var user = prompt("Через какое количество дней от 1 до 1000 Вам интересно знать Дату?");
	var n = Math.round(user);

	if (n > 1 && n < 1000)
	{
	now_date(n);
	}
	else
	{
	document.write("Вы указали НЕ число, либо число за пределами диапазона от 1 до 1000")
	}

// Task №5
document.write("<h1>Task №5</h1>");

	var forTesting = "8 пингвинов и 9 карасей";

	function firstPosition()
	{
	var regular = /\d/;

	var result = forTesting.search(regular);

	if (result == 0)
	{
	document.write("Строка начинается с Цифры");
	}

	else
	{
	document.write("В начале строки НЕТ цифры");
	}
	}

	firstPosition(forTesting);

// // Task №6
document.write("<h1>Task №6</h1>");
var card = "Иван вчера потерял свою кредитку, ее номер 1178-9087-2384-8787. Поэтому он пошел в банк и описал ситуацию. Там пошли ему навстречу и выдали новую кредитку под номером: 1103-8899-0811-1722";

var regular_all = /[0-9-]{19}/g;
var regular_select = /[0-3]{4}[0-9-]{15}/g;

var result_all = card.match(regular_all);
var result_select = card.match(regular_select);

document.write(result_all + " - Это все номера кредитных карт в строке <br><br>");
document.write(result_select + " - Номер кредитной карты, где первые четыре цифры находятся в диапазоне от 0 до 3");

// // Task №7
document.write("<h1>Task №7</h1>");
var tel = "8/927/31/10/765";
var sign = "-";

function dash(tel,sign)
{
var regular = /\//g;

var result = tel.replace(regular,sign);

document.write(result);
}

dash(tel,sign);


// // Task №8

document.write("<h1>Task №8</h1>");
function line(s)
{

if (s.length > 10)
{
var result = "Вы ввели слово, число символов которого больше 10";
}
else
if(s.length < 10)
{
var result = "Вы ввели слово, число символов которого меньше 10";
}
else
{
var result = "Вы ввели слово, число символов которого РАВНО 10";
}
return result;
}

var any = prompt("Введите любое слово...");

var k = line(any);

document.write(k);

// // Task №9.1
document.write ("<h1>Task №9.1</h1>");

for (var i = 1; i < 8; i++)
{
	document.write ("Квадрат " + i + " = " + i*i + "<br>");
}


// // Task №9.2
document.write ("<h1>Task №9.2</h1>");

var firstNum = prompt ("Введите первое число");
var secondNum = prompt ("Введите второе число");

document.write ( "Результат ", Number(firstNum) + Number(secondNum) + '<br>');


var firstNum = prompt ("Введите первое число");
var secondNum = prompt ("Введите второе число");

document.write ( "Результат ", parseInt(firstNum, 10) + parseInt(secondNum, 10));



// 	// Task №10
document.write ("<h1>Task №10</h1> <p>(представлено последним через &laquo;alert&raquo;)</p>");

var i = 0;
while (i < 3) {
  alert( "номер " + i + "!" );
  i++;
}
