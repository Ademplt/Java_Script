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


//======TERNARY============
const age=Number(prompt("yasinizi giriniz"));
const healt=prompt("Saglikli misiniz e/h");

age>=18;
//?console.log(`${name1}ehliyet alabilir`);
//:console.log(`${name1}ehliyet alamaz`);;

//const result=
//age >=18 && healt=="e"?`${name1}ehliyet alabilir`:`${name1}ehliyet alamaz`

//!emojisine eklentisi yukle==>emoji kisayol (mac te ustte file in yninda ki edit)


console.log(
    age>=18 && healt=="e"
    ?`${name2}ehliyet alabilir`
    :`${name2}ehliyet alamaz`
);