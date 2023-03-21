//*******DIZILERDE ITERASYON */


//*******FOR DONGUSU */

const koordinatlar=[120,100,-100,220,330,-50];
let pozitif=0;
let negativ=0;
for(let i=0; i<koordinatlar.length; i++){
    koordinatlar[i]<0?  negativ=negativ+koordinatlar[i]:pozitif=pozitif+koordinatlar[i];
}
console.log("negativler toplami :${negativ} pozitifler toplami:${pozitif}");

//*********FOR IN DONGUSU */




for(let i in koordinatlar){
    koordinatlar[i]<0?  negativ=negativ+koordinatlar[i]:pozitif=pozitif+koordinatlar[i];
}
console.log(`negativler toplami :${negativ} pozitifler toplami:${pozitif}`);

//SORU:Bir hayvanat bahcesinde bulunan hayvan turlerinin bir dizide saklandigini varsayalim 
//Bu hayvan turune gore aramamizi saglayacak ve oturden kac adet bulundugunu ana programa
// dondurecek fonksiyonu yaziniz.Eger o turden bir hayvan yoksa bulunamadigini yazdirdin

const hayvanlar=["aslan","fil","kartal","kanarya","aslan","aslan","timsah"];

const ara=prompt("sayisini merak ettigin hayvanin adini yaz");
const bulDondur=function(ara){
let hayvanSayisi=0;
for(let i in hayvanlar){
    if(hayvanlar[i]==ara)
    hayvanSayisi++;
}
hayvanSayisi==0?alert("aradigin hayvandan bulunamadi"):
alert(`aradiginiz ${ara} hayvanindan ${hayvanSayisi} tane bulunmaktadir`);
}
bulDondur(ara);


//********FOR OF DONGUSU */

//For of dongusu, for in dongusnun bir cok veri yapisini kapsayacak sekilde guncellenmistir
//bu dongude dizi icerisinde ki veriye erisirken indisleme kullanmaya gerek yoktur.

let arabalar=["bmw","volwo","mini"];
for(let i of arabalar){

    console.log(i);
}
//*******FOREACH METODU */
//!foreach methodu orjnal diziyi bozmaz

let ogrenciler=["Onur","Hakan","Furkan"];
const dene=ogrenciler.forEach((x)=>console.log(x));
console.log(dene);//undefined
ogrenciler.forEach((deger,index)=>console.log(index+".kisi"+deger+"dir"));
//*********MAP METHODU**** */

//!MAP METODU ORJINAL METHODU DEGISTIRMEZ

//Ornek :Butun elemanlarin 3 katini aliniz

const rakamlar=[3,5,3,2,6,7,9];
console.log(rakamlar.map((x)=>x*3)); 
console.log(rakamlar.map((x,index)=>`${index}elemanin 3 kati ${x*3}`)); 

//ornek
 //isimler dizisinin icerisindeki her ismi buyuk harf olarak yeni diziye sakla
 const isimler=["Ahmet","mehmet","Saffet","Can","Canan","Cavidan"];

//map metodu bir dizi dondurur
const buyuk=isimler.map((isim)=>isim.toUpperCase());
console.log(buyuk);

const x=document.querySelector(".baslik").textContent=buyuk.join(" ->"); //virgulleri kaldirir
console.log(x);

//*******FILTER METODU*** */

//fiyatlar dizisindeki 250 den buyuk fiyatlari yazdir

const fiyatlar=[120,234,300,450,400,678,121];
console.log(fiyatlar.filter((t)=>t>250));


//----------ORNEK------------
//maasi 400 $`den dusuk olanlara %50 zam yapmak istiyoruz
//ve bunu ayri dizi olarak saklamak istiyoruz.

const maaslar=[3000,5000,4000,6000,6500];
console.log(maaslar.filter((a)=>a<4000).map((a)=>a*1.5));

//-------------ORNEK---------
const adlar=["Samet","Hakki","Duygu","Emrullah",
"Bilal","Ali","Ahmet","Hasan","Defne","Serdar"];

//ilk harfi A olanlarin konsolda yazdir
adlar.filter((x)=>x.startsWith("A")).forEach((x)=>console.log(x));


//*********REDUCE METODU */

//REDUCE cikis metodudur ,reduce dan sonra foreach calismaz

const maaslarim=[3000,5000,4000,2000,1000];
console.log(maaslarim.reduce((x,y)=>x+y,0));
