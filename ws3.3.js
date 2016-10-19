class tresEnRaya{
    constructor(){
        var cas1 == 0
        var cas2 == 0
        var cas3 == 0
        var cas4 == 0
        var cas5 == 0
        var cas6 == 0
        var cas7 == 0
        var cas8 == 0
        var cas9 == 0
        document.getElementById("cosa").innerHTML += ('<table border=”0” cellspacing=”2” bgcolor=”black”>');
        for (i=0;i<3;i++){
            document.getElementById("cosa").innerHTML += ('<tr bgcolor="white" height="20">')
         
            for(j=0;j<3;j++){
                document.getElementById("cosa").innerHTML += ('<td width="20 bgcolor="white"> &nbsp;</td>');        
            };
            document.getElementById("cosa").innerHTML += ('</tr>');            
        };

        document.getElementById("cosa").innerHTML += ('</table>')
    };
    
    
}

tic = new tresEnRaya();