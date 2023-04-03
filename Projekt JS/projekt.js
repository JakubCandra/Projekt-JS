function count()
{let plocha=document.getElementById("plocha").value;
let teplota=document.getElementById("teplota").value;
let čas=document.getElementById("čas").value;
let tloušťka=document.getElementById("tloušťka").value;
let vodivost=document.getElementById("vodivost").value;
let vysledek=(vodivost*(plocha*teplota*čas))/tloušťka;
document.getElementById("vysledek").innerText=vysledek;}

function check()
{let plocha=document.getElementById("plocha").value;
let teplota=document.getElementById("teplota").value;
let čas=document.getElementById("čas").value;
let tloušťka=document.getElementById("tloušťka").value;
let vodivost=document.getElementById("vodivost").value;
let přenos=document.getElementById("přenos").value; 
if (přenos==(vodivost*(plocha*teplota*čas))/tloušťka) 
{document.getElementById("vysledek_kontroly").innerText="Správně" }
else {document.getElementById("vysledek_kontroly").innerText="ŠPATNĚ"} }