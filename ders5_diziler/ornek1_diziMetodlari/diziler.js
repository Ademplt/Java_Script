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
baslik.textContent=meyveler;
console.log(meyveler);
