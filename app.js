let listaDestinacija=document.getElementById("lista-destinacija");
console.log(listaDestinacija);

let title=document.getElementsByClassName("title");
console.log(title);

let elementListe=document.getElementsByTagName("li");
console.log(elementListe);

let wrap=document.querySelector("#wrapper");
console.log(wrap);


let destinacije=document.querySelectorAll(".naziv");
console.log(destinacije);


let destinacija=document.querySelector("#lista-destinacija");
console.log("Roditelj mu je ",destinacija.parentNode);

console.log("Deca su mu ",destinacija.childNodes);
console.log("Deca su mu ",destinacija.children);

let sibling=document.querySelector("#lista-destinacija");
console.log("Next sibling is", sibling.nextElementSibling);
console.log("Previous sibling is", sibling.previousElementSibling);

let banner=document.querySelector("#page-banner");
console.log("Node name is ", banner.nodeName);
console.log("Node type is ", banner.nodeType);
console.log("Node value is ", banner.nodeValue);


let destinacija1=document.querySelector(".naziv");
// destinacija1.textContent="Beograd,Srbija";
destinacija1.innerHTML="<b>Beograd,Srbija<b>";


let dugmici=document.querySelectorAll(".obrisi");
console.log(dugmici);
Array.from(dugmici).forEach(function(dugme){
    dugme.addEventListener("click",function(e){
        const li=e.target.parentNode;
        ul=li.parentNode;
        ul.removeChild(li);
    })
})


let forma=document.forms["dodaj-destinaciju"];

forma.addEventListener("submit",function(e){
    e.preventDefault();
    let vrednost=document.forms["dodaj-destinaciju"]["polje"].value;
    console.log(vrednost);

});