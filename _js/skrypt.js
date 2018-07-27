// JavaScript Document
function createEvent(obj, eventName, functionToInvoke)
{
    if (document.addEventListener)
        obj.addEventListener(eventName, functionToInvoke);
    else
        obj.attachEvent("on"+eventName, functionToInvoke);
};
//--------Pobranie imienia --------//
var imie = prompt('Podaj swoje imie');
document.getElementById('name').innerHTML = imie;
document.getElementById('name2').innerHTML = imie;
document.getElementById('comp2').innerHTML = "Komputer";

//--------Przycisk, który pokazuje div z klasa gra --------//
var newgame = function(e) {
	var btn =  document.querySelector('#newGame');
	btn.onclick = function(e) {
		var wr = wygraneRundy();
		var noshow = document.querySelector('.noShow');
		noshow.classList.remove('noShow');
		var btnnoshow = document.querySelector('.btn');
		btnnoshow.classList.add('noShow');
		
	}
	
}

newgame();
//--------Wygrane rundy --------//

var wygraneRundy = function() {
	wygrane = prompt('Do ilu wybranych rund chcesz grać?');
	var wr = parseInt(wygrane);  
}


//--------Gra--------//	
function wyborGracza(wyborGracza) {
	
 document.getElementById('wybor').innerHTML = "Wybrałeś: "+wyborGracza ;
 document.getElementById('sumag').innerHTML=wyborGracza;
 	var wk = wyborKompa();
 rezultat(wk);
	wynik(wyborGracza, wk);
	
	document.getElementById('bbbb').innerHTML = "chcesz  "+wr;

   
}
//--------- Losowe wybranie przez komputer lisczby ------//
var wyborKompa = function () {
 return 1+Math.floor(Math.random()*3);
}
 //--------- Wyświetlenie na ekranie wyboru kompa ------// 
var rezultat = function (wk){
	
	document.getElementById('i1').innerHTML = wk;
	 if (wk==1) {
		 document.getElementById('komp').innerHTML = 'Komputer wybrał: nożyczki';
	 }
	 else  if (wk==2) {
		 document.getElementById('komp').innerHTML = 'Komputer wybrał: kamień';
	 }
	 else {
		  document.getElementById('komp').innerHTML = 'Komputer wybrał: papier';
	 }
}

var suma = 0,
    sumaRemis = 0;
    sumaGracz = 0,
	sumaKomp = 0;
//--------- Porównanie wyboru gracza i kompa ------//
function wynik(wyborGracza, rezultat) {	 

if (wyborGracza === 'nożyczki' && rezultat === 1 ||
	    wyborGracza === 'kamień' && rezultat === 2 ||
	    wyborGracza === 'papier' && rezultat === 3 ) {
		document.getElementById('info').innerHTML = 'REMIS';
		sumaRemis = sumaRemis+1;
		
	}
	else if
	(wyborGracza === 'nożyczki' && rezultat === 3 ||
	    wyborGracza === 'kamień' && rezultat === 1 ||
	    wyborGracza === 'papier' && rezultat === 2 )
	 {
		 document.getElementById('info').innerHTML = "WYGRAŁEŚ";
		 sumaGracz = sumaGracz+1;
		 document.getElementById("sumagracz").innerHTML = sumaGracz;
	}
	else if
	(wyborGracza === 'nożyczki' && rezultat === 2 ||
	    wyborGracza === 'kamień' && rezultat === 3 ||
	    wyborGracza === 'papier' && rezultat === 1 ){
		 document.getElementById('info').innerHTML = "PRZEGRAŁES";
		 sumaKomp = sumaKomp+1;
		 document.getElementById("sumakomp").innerHTML = sumaKomp;
	 }
	 suma = sumaRemis + sumaGracz + sumaKomp;
     document.getElementById('aaaa').innerHTML ="w sumie było "+suma+" rund";
	
	 
}


window.onload = function(){
	
//--------Pobranie przycisków --------	
var graNozyczki = document.getElementById('a1'),
    graKamien = document.getElementById('a2'),
	graPapier = document.getElementById('a3');
	
    graNozyczki.addEventListener('click', function() {
		wyborGracza('nożyczki');
	});
	 graKamien.addEventListener('click', function() {
		wyborGracza('kamień');
	});
	 graPapier.addEventListener('click', function() {
		wyborGracza('papier');
	});
	
;


}

	