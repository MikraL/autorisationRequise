while (isNaN(sonAge) == true){
    var sonAge = prompt("Entre ton age");
}

if (sonAge > 130 || sonAge <= 0) {
 alert("Jviens de croiser un menteur là");
 document.location.href="https://c.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif"; 
}
else {
alert('Tu dois avoir dans les '+ sonAge+' ans enfoiré !');
}
if (sonAge >= 18 && sonAge <= 130 && sonAge >= 0) {
    alert('Tu peux passer, bien joué Joe');

}
else if (sonAge < 18 && sonAge != 0 && sonAge > 0){
    alert('Tiens tiens tiens, vagabon mineur, fuis !!!!'); 
    document.location.href="https://c.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif"; 
}

else {
    alert("ciao bella !")
    document.location.href="https://c.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif"; 
}