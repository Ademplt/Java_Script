/*===================
     FONKSIYONLAR
=====================*/

//! 1.Yontem:Function Declaration
// Declaration yontemi ile fonksiyonun tanimlanmasi cagrilmasindan once veya sonra olabilir

// Fonksiyonun tanimlanmasi
function yazdirAd(){
    console.log("Adem");
}

// fonksiyonun cagrilmasi
yazdirAd();

//?Ornek :Klavyeden girilen sayinin tek mi cift mi oldugunu gosteren bir fonk yaziniz

const sayiniz=prompt("Lutfen sayinizi giriniz");

console.log(tekCift(sayiniz));



function tekCift(sayi){
return sayi%2==0?`${sayi}cifttir `:`${sayi}tektir`
}



//!2.Yontem:Function Expression(Bu yontem daha yaygin)

const tekCift1=function(sayi){
    return sayi%2==0 ? "CIFT" : "TEK";
}
console.log(tekCift1(5));

//?Ornek2 Verilen 3 sayidan  en buyuk sayiyi bulma

let buyukBul=function(a,b,c){
let enBuyuk;
if(a>b && a>c){
    enBuyuk=a;
}
else if(b>c && b>a){
    enBuyuk=b;
}else 
{enBuyuk=c;}
return enBuyuk;
}
console.log(buyukBul(4,5,6));

//! 3.YONTEM: FUNCTION ARROW (ok)

const ciftMi=(sayi)=>(sayi%2==0?"cift":"tek");
console.log(ciftMi(7));

//?Ornek us alma
const taban=prompt("taban git");
const us=prompt("us giriniz");

const ustAl=(taban,us)=>taban**us;

console.log(ustAl(taban,us));
