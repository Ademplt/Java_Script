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

//*********MAP METHODU**** */

//!MAP METODU ORJINAL METHODU DEGISTIRMEZ



