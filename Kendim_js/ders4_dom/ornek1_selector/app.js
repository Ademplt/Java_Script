//===============================
//     GETELEMENTBYID
const paragraf=document.getElementById("para").style;
paragraf.backgroundColor="black";
paragraf.color="white";
paragraf.fontSize="20px";


const buton=document.getElementById("btn");
buton.style.width="100";
buton.style.color="red";
buton.style.fontSize="18px";
buton.textContent="ARA"; //! Txt content tag'larin iceriginde ki yaziyi degistirmek istersek kullaniriz


//*******GETELEMENTBYTAGNAME **********/ Bu kullanim kullanilmiyor class adi=tag adi
const resim=document.getElementsByTagName("img");
resim[0].style.width="300px";
resim[0].style.height="300px";


resim[1].style.border="3px solid red";

//***************GETELEMENTBYCLASSNAME */
const baslik=document.getElementsByClassName("h1")
baslik[0].style.textAlign="center";

//************QUERYSELECTOR */
//! EN COK KULLANILAN CAGIRMA YOLU

document.querySelector(".ARAMA").textContent="DOM SELECTOR KAVRAMI🤢😎";
document.querySelector("#govde").style.backgroundImage="linear-gradient(green,blue,pink)";


//*************EVENT****** */

//!(onmouseover,onmouseout=fare ustune gelince)
const h=document.querySelector(".h1");
h.onmouseover=function(){
    h.style.color="red";
    h.style.backgroundColor="white";

}

h.onmouseout=function(){
    h.style.color="pink";
    h.style.backgroundColor="yellow";

    //1.resme tikladigimiz da img ler yer degistirsin
    document.querySelector(".bir").onclick=function(){
        document.querySelector(".bir").src="./img/js2.png";
        document.querySelector(".iki").src="./img/js1.png";
    }

}

