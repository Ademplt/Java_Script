// == KARAR YAPILARI ===

// === IF-ELSE ====

const s1=Number(prompt("birinci sayi"))
const s2=+prompt("ikinci sayi")
const islem=prompt("islem giriniz")
let sonuc=0;
if(islem=="+"){
    sonuc=s1+s2;
}else if(islem=="-"){
    sonuc=s1-s2;

}else if(islem=="*"){

sonuc=s1*s2;
}else if(islem="/"){
    sonuc=s1/s2
}
console.log(sonuc);
