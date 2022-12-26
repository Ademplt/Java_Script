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
    liste.removeChild(liste.lastElementChild);
    //listenin cocuklarindan listenin son cocugunu sildik
    
}
const parag=document.querySelector(".forH1");
parag.innerHTML=parag.innerHTML+`<h1>${"Programlama Dilleri"}</h1>`;

//--->=====Klavyeden textbox a basildiginda  buyusun kuculsun
document.querySelector(".textbox").onkeyup=function(){ //text box'a klavyeden giris yapilirsa
  const checkbox=document.querySelector(".checkbox");
  const textbox=document.querySelector(".textbox");
  if(checkbox.checked){
    textbox.value=textbox.value.toUpperCase();

  }else {
    textbox.value=textbox.value.toLowerCase();

  }
}
//mouse resmin ustune geldiginde aslan kukresin
resim.onmouseover=function(){
    resim.src="./img/aslan2.jpg";

}
//2. Yol(uzun) addEventListener() yolu
//resim.addEventListener("mouseout",function(){
   // resim.src="./img/aslan2.jpg";
//})


//mouse resmin ustunden cekildiginde
resim.onmouseout=function(){
    resim.src="./img/aslan1.jpg";

}
//enter=13 delete=46
//onkeydown=klavyedeki tusa basip elimizi cektigimizde
document.querySelector(".dil").onkeydown=function(klavye){
  if(klavye.keyCode==13){//Enteri cagirdik

document.querySelector(".ekle").onclick();
  }if(klavye.keyCode==46){//Enteri cagirdik
document.querySelector(".sil").onclick();
  }
}