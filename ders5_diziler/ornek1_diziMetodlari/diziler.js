const yaslar=[5,10,28,42];

const isimler=["Hakan","Alaaddin","Furkan","Dayanch",20,40,true,23.5,yaslar,"ayse"];
console.log(isimler);
console.log(isimler[3]);
isimler[3]=("sadi");
console.log(isimler);
//const degistirelemiyordu ama non-primitive lerde degistirilebiliyor.Dizi bir adres gosterir isimler
//gibi,o yuzden primitive den /farkli

isimler[isimler.length-2]=false;
console.log(isimler);

console.log(isimler[8][1]);


//Diziyi degistiren metodlar **********

let meyveler =["Elma","Armut","Muz","Kivi"]
const baslik=document.querySelector(".baslik");
baslik.textContent=meyveler;

//pop() en son elemani siler
//log icinde yazdirirsaniz sildigini gosterir


console.log(meyveler.pop());
baslik.textContent=meyveler;
console.log(meyveler);

//Shift() dizinin 0 indexli yani ilk elemanini siler,ve yazdirirsak sildigi elamni dondurur

console.log(meyveler.shift()); // [Armut,Muz]
baslik.textContent=meyveler;
console.log(meyveler);

//push() dizinin sonuna eleman ekler

meyveler.push("Cilek","Karpuz");
baslik.textContent=meyveler;
console.log(meyveler);

//unshift() dizinin  0 index ine eleman ekler

meyveler.unshift("Ayva");

//reverse() dizinin tamamini ters cevirir
meyveler.reverse();


//sort() diziyi natural order alfabetik siralar
meyveler.sort();


//Splice() methodu
meyveler.splice(1,0,"Erik"); //1. indexe erik yaz 0 kalsin hicbir eleman silinmesin
meyveler.splice(4,1,"uzum");//4. indexe uzum yaz ordaki elemani sil===1 ve 0 true ve false gibi 
//0 silme ve ekle 1 elemani sil ekle

//******DIZI ERISIM METODLARI (Bunlar diziyi degistirmezler) */

const sayilar=[3,4,5,2,"2","uc","bes",5,2,7];
 console.log(sayilar.includes("5")); //false
 console.log(sayilar.includes(5)); //true
 //includes() kapsiyor mu

 //indexOf() ilk eslesen index i dondurur
 console.log(sayilar.indexOf(2));
 console.log(sayilar.lastIndexOf(5));
 console.log(sayilar.indexOf(2,4)); //2 elemanini 4. indexten sonra ara

 //join() dizinin elemanlarini birlestirip string hale getirir
 console.log(sayilar.join(" "));
 console.log(sayilar.join("-"));
 //join default olraka virguller ile ayiratak diziden kurtarir.Ama istersek " " yazarak bosluklarla
 // "-" tirelerle ayirabiliriz


 //toString join gibidir ama sadece virgul ile ayirir

 console.log(sayilar.toString());

 //********** */

 //slice() dizinin 

const arabalar=["bmw","mercedes","Volvo","sahin","anadol"];
console.log(arabalar.slice(2)); // 2. indexli elemandan sonuna kadar

console.log(arabalar.slice(1,3)); //ilk index dahil ,2.sirada yazan index e kadar (2.dahil deil)

//*****CONCAT**** */
const birlesik=sayilar.concat(arabalar);
console.log(birlesik);


baslik.textContent=sayilar;
console.log(sayilar);
