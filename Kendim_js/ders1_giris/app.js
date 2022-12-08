//================
//KONSOL

console.log("Hello javascript");
alert("Dikkat");  //alert yazisi 
console.warn("Bu bir uyaridir"); // hata uyarisi
console.error("Bu bir hatadir");
prompt("Adinizi giriniz");


//========== DEGISKEN TANIMLAMA=========
var isim="ipek";
isim=3,14;


//======CONST========

//const sonradan degistirilemez sadece kullanildigi yerde gecerlidir
const pisayisi=3.14;
//pisayisi=3; degistiremeyiz
//!TODO:const ve let modern java ile gelmis yeni degsiken tanimlama keyword'leridir
//!CONST : Sonradan degeri degistirlemez( non primitive'ler haric).Mumkunse const  yoksa let o da mumkun degilse
//var kullanilmali.Cunku js de raahat degisiklik yapiliyor,var,let sikinti cikarabilir

const isim1="Osman";
console.log(typeof isim1);  //string
//const number; hatali yazim
//number=4

//======LET======

let fiyat;
fiyat=10;
console.log(typeof fiyat);
//number
fiyat="erdem";
console.log(typeof fiyat); //string =erdem
//scope den ulasilir 
//var public
//let protected


//string tanimlamak icin 3 farkli karakter kullanilabilir
let name1="Alaatiin"
let name2='Faruk'
let name3=`Oguzhan`
console.log(name3);


// ======== Aritmetik operatorler ======
const kola=5;
const cips=6;
const ekmek=2;
console.log(kola + cips+ekmek)
console.log("toplam fiyat ",kola + cips + ekmek);
//! Template literal=====
const ad ="adem"
const s1=35;
console.log(`benim adim ${ad} benim yasim ${s1}`);

const taban =2;
const ust=3;
console.log(taban**ust); // 2*2*2 uslu sayilar

// mod alma %
const sayi=123;
const birler=123%10; //3 kalani verir


const s3=7
const s4="7"

console.log(s3==s4); //true
console.log(s3===s4); //false


// ==== Tip DEGISIMLERI ====
const para="100";
console.log(para+15);
console.log(Number(para)+15);


var isim="ipek"




