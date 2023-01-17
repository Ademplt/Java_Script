//bilgisayara 1-20 arasdinda sayi tuttur

let rastgeleSayi=Math.floor(Math.random()*20+1);

let puanPc=10;
let rekorPc=0;

//Her kontrol et butonuna tiklandiginda calistridim
document.querySelector(".kontrol").onclick=function(){
    //tahminim dogruysa
    const tahmin=document.querySelector(".tahmin").value;
    if(tahmin==rastgeleSayi){
document.querySelector("body").style.backgroundColor="green";
document.querySelector(".question").textContent=rastgeleSayi;
document.querySelector(".mesaj").textContent="Tebrikler Bildiniz🌻";


//Rekoru guncelle

if(puanPc>rekorPc){
    rekorPc=puanPc;
    document.querySelector(".rekor-skor").textContent=puanPc;


}

    }



    //Tahmin yanlissa

    else{
        if(puanPc>1){
            puanPc--;
        let mesaj=document.querySelector(".mesaj");
        tahmin<rastgeleSayi ? (mesaj.textContent="Arttir🆙"):(mesaj.textContent="Azalt⬇");
        document.querySelector(".skor").textContent=puanPc;
        }else{
    document.querySelector(".mesaj").textContent="Oyunu kaybettiniz🤧";
     document.querySelector(".skor").textContent=0;
     document.querySelector("body").style.backgroundColor="red";
        }

    }
}

//Tekrar butonuna basildiginda baslangic degerleri yuklensin
document.querySelector(".tekrar").onclick=()=>{
 rastgeleSayi=Math.floor(Math.random()*20+1);
 document.querySelector("body").style.backgroundColor="#2d3436"
document.querySelector(".question").textContent="?";
document.querySelector(".mesaj").textContent="Tahmine Baslaniyor!!";
puanPc=10;
document.querySelector(".skor").textContent=puanPc;
document.querySelector(".tahmin").value="";
}

//Klavyeden bir tus ile calis

document.querySelector(".tahmin").onkeydown=function(olay){
if(olay.keyCode==13){
    document.querySelector(".kontrol").onclick();

}
if(olay.keyCode==82){
    document.querySelector(".tekrar").onclick();

}
}