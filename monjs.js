
 function getVal(){
    var today = new Date();

    var yyyy = today.getFullYear(); 
    var mm = today.getMonth() +1 ;
    var dd = today.getDate();

    const form  = document.getElementById('signup');

    form.addEventListener('submit', (event) => {
        const name = form.elements['in'];
        /* prendre l'année */
        let test11 = name.value[0];
        let test12 = name.value[1];
        let test13 = name.value[2];
        let test14 = name.value[3];
        /*annee de naissance */
        var anneefull = test11 + test12 + test13 + test14;

        /* prendre le mois */
        let test21 = name.value[5];
        let test22 = name.value[6];
        /* mois de naissance */
        var moisfull = test21 + test22;

        /* prendre le jour */
        let test31 = name.value[8];
        let test32 = name.value[9];
        /* jour de naissance */
        var jourfull = test31 + test32;

        /* comparaison */
        var diff= yyyy - anneefull;
        var diff2 = mm - moisfull;
        var diff3 = dd - jourfull;


        if (diff3 <= 0) {
            diff2 = diff2 - 1;
            if (diff2 <= 0){
                diff = diff - 1;
               
            }
        }

        else if (diff2 <= 0){
            diff = diff - 1;
        }

        if (diff <= 0 || diff > 122) {
            alert("Jviens de croiser un menteur là");
            openInNewTab("https://c.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif");
        }

        else if (diff < 18){
            alert('Tu as ' + diff + ' ans');
            alert('Tiens tiens tiens, vagabon mineur, fuis !!!!'); 

            openInNewTab("https://c.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif");
        }

        else {
            alert('Tu as ' + diff + ' ans');
            alert('Tu peux passer, bien joué Joe');
            openInNewTab("./index2.html");
        }   
        
    });
 };
 function openInNewTab(url) {
    window.open(url, '_blank').focus();
   }
