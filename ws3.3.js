class tresEnRaya{
    constructor(){
        this.turno = 1;
        this.casillas = [this.cas1 = 1,
        this.cas2 = 2,
        this.cas3 = 3,
        this.cas4 = 4,
        this.cas5 = 5,
        this.cas6 = 6,
        this.cas7 = 7,
        this.cas8 = 8,
        this.cas9 = 9];
        
        
    }
    
    cuentaTurno(){
        this.turno++
    }
    
    asignaCasilla(casilla){
        if (this.turno%2 ==1){
            this.casillas[casilla-1] = 1;
        } else{
            this.casillas[casilla-1] = 2;
        };
        this.cuentaTurno();
        this.compruebaResultado();
    }
    
    compruebaResultado(){
       this.di = document.getElementById("cosa");
       this.di.innerHTML += this.casillas+'<br/>';
       this.di.innerHTML += 'turno'+this.turno+'<br/>';
        
        if(this.casillas[0] == this.casillas[1] == this.casillas[2] || this.casillas[3] == this.casillas[4] == this.casillas[5] || this.casillas[6] == this.casillas[7] == this.casillas[8] || this.casillas[0] == this.casillas[4] == this.casillas[8] || this.casillas[6] == this.casillas[4] == this.casillas[2] || this.casillas[0] == this.casillas[3] == this.casillas[6] || this.casillas[1] == this.casillas[4] == this.casillas[7] || this.casillas[2] == this.casillas[5] == this.casillas[8]){
            alert('ganador 1')
            
        }
    }

}
tic = new tresEnRaya();
tic.compruebaResultado();

tic.asignaCasilla(5);
tic.asignaCasilla(1);
tic.asignaCasilla(4);
tic.asignaCasilla(8);
tic.asignaCasilla(6);
tic.compruebaResultado();