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