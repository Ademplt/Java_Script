//ara butonuna tiklandiginda calan telefon ciksin ve zil calsin
let resim=document.querySelector(".resim"); //resime ulastim
let ring=document.querySelector(".ses"); //audio ya ulastim
document.querySelector(".on").onclick=function(){
    resim.src="./img/tel2.jpg"; //resim degistirldi
    ring.play(); //sesi calistirdim play yaptim
}
// baglat butonuna basinca gif gelsin und sesi kesilsin
document.querySelector(".of").onclick=function(){
    resim.src="./img/Smiling Leo Perfect GIF.gif";
    ring.pause(); //  tel ses susturuldu

}
// konus butonuna basinca yeni gif gelsin
document.querySelector(".speak").onclick=function(){
   resim.src="./img/aslan2.jpg"; 
}
const liste=  document.querySelector(".liste");
//Ekle butonuna basildiginda yeni bir =li ekle
document.querySelector(".ekle").onclick=function(){
 
  const satir=  document.querySelector(".dil");

  liste.innerHTML=liste.innerHTML+`<li>${satir.value}</li>`;
  satir.value="";
}
//sil butonuna tiklandiginda li elemani silinsin
document.querySelector(".sil").onclick=function(){
    liste.removeChild(liste.lastChild);
}