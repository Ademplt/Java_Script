//*********NESNELER****** */

//diziler sirali bellek bolgeleridir.Dolayisiyla erisim index ile olur.Eger diziler karisiksa indexle erisim
//guclugu ortaya cikar bu yuzden =>-........................

//!OBJECT(nesne)

//nesnelerde key-value (property yapisi) kullanilir
//nesnelerde aradigimiz veriye erismek icin key adini kullanmamiz gerekir

const insan={
    ad:"Kenan",
    soyad:"Kul",
    yas:30,
    meslek:"developer",
    diller:["Java","Js","SQL","HTML"]
};
console.log(insan);

//1) .dot notasyonu
console.log(insan.ad);
console.log(insan.diller);

//2) koseli parantez notasyonu
console.log(insan["ad"]);
console.log(insan["diller"]);

console.log(`Adim: ${insan.ad} ve yasim:${insan.yas}`);
//*****88*** */
//const bilgi=prompt("insan nesnesinden hangisini gormek istersin -ad soya,yas..-");

//console.log(insan[bilgi]);

// objeye key-value ler ekleme
insan.konum="Turkiye";
insan.email="insan@hotmail.com";
insan["dogumTarihi"]=1991;

console.log(insan);


//******Nesne Metodlri */
const kisi={
    ad:"Adem",
    soyad:"Polat",
    dogumTarihi:1988,
    meslek:"Software Tester",
    tool:"Selenium",
    ehliyet:true,
    yasHesapla:function(){//bugunun yilini al
   return new Date().getFullYear()-this.dogumTarihi;

    },
    ozet:function(){
    return `${this.ad} ${this.soyad} ${this.yasHesapla()} yasindadir`;

}
}
console.log(kisi);
console.log(kisi.yasHesapla());
console.log(kisi.ozet());


//Nesne (object) iterasyon ornekleri

const people=[
{
ad:"hakan",
soyad:"inal",
meslek:"developer",
yas:41,
},

{
ad:"sait",
soyad:"can",
meslek:"tester",
yas:37
    },

    {
ad:"kubilay",
soyad:"tuncel",
meslek:"team lead",
yas:33
     },

 {
 ad:"osman",
soyad:"Turker",
meslek:"grafiker",
yas:29
    },
 {
 ad:"huseyin",
soyad:"harran",
meslek:"developer",
yas:32
            }

];

console.log(people);

//ornek:1) people dizisinde ki kisilerin mesleklerini konsolda yazdiralim.

people.forEach((x)=>console.log(x.meslek));

//2) people dizisinde ki tum kisilerin 1 artirarak yazdiriniz

people.map((x)=>x.yas+1).forEach((x)=>console.log(x));


//ornek3) yasi 35 e esit veya kucuk olanlarin adlarini yazdir
people.filter((x)=>x.yas<=35).forEach((x)=>console.log(x.ad));


//ornek4) people dizisindeki kisilerin isimlerini buyuk harf 
//olarak alan ve yaslarini 5 artiran ve soyadinin ilk iki harfini 
//yazdiran fonksiyonu yazdiriniz.

const desisiklik=people.map((x)=>{
return{

ad:x.ad.toUpperCase(),
yas:x.yas+5,
soyad:x.soyad.slice(0,2)

};
}).forEach((x)=>console.log(x));

//ornek5) Meslegi developer olanlarin isimleri buyuk harf yapip ve yaslarini yazdiriniz
//isterseniz diziye atayip yazdiriniz

const yeni=people.filter((x)=>x.meslek=="developer").map((x)=>{
return{
ad:x.ad.toUpperCase(),
yas:x.yas,
    };
}
);
console.log(yeni);