let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom?  _______Omdat het een tekst is data type string dus tussen ""_______ vul je antwoord in op de lijn
let myInt = 3; //dit is een variabele van het datatype ____integer________ waarom? ____Het is een getal zonder decimalen________ vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? ________want er moet eerst een variabele gedeclareerd worden_en eventueel ook het datatype van het variabele dat vastgesteld staat in het geheugen van de computer ___ vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen _________17_____ vul je antwoord in op de lijn

    // vul in wat naam is: naam is de Parameter_______ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde _________GetName___ de waarde noemen we een Any__________ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een ____Pop up bericht___ op het scherm met de tekst _Vul je naam in hier,echt doen________ deze tekst staan op regel _17______ van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? ______ja_____ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? _______Als je op de afbeelding drukt komt er een andere tevoorschijn____________ en waar wordt deze in je HTML aangeroepen? ____regel 23________ vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML _regel 25 bij img id en onclick__________ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? _________Je kan daarmee javascript elementen selecteren en het kan ook alleen gebruikt worden bij id attributen__________ vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? _________als je weer op de afbeelding drukt komt er een andere afbeelding tevoorschijn__________ vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen ______32________ en wanneer wordt deze aangeroepen _als je drukt op de button__________ vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan ______regel 2 van js________ en waar komt de waarde van getal vandaan? _____regel 32 van html_______ vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? _______javascript elementen selecteren____________  Wat is antwoord hier? vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? ________de class ".som"___word veranderd naar het "antwoord"__________ vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? ____het getal word met een andere waarde opgeteld_________________ vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen _____44_________ vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan _______regel 44 "this"_______ en waar komt de waarde van kleur vandaan? __orange__________ vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van szie vandaan? _______30px_____ vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? ____________de uiterlijk van de _element_______ vul je antwoord in op de lijn
}

getName(myStr);
// wat gebeurd er hierboven ____een functie voor een naam type met de waarde str_______ en wanneer gebeurt dat __als je een string maakt________ (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? ___Dan komt de pop up niet meer aan het begin als je de site opent________________ vul je antwoord in op de lijn.