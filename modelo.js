class tresEnRaya{
    constructor(){
        this.fin = false
        this.turno = 0;
        this.casillas = [0,0,0,0,0,0,0,0,0];
        
        
    }
    
    cuentaTurno(){
        this.turno++
        if(this.turno==9){
            this.empate()
        }
    }
    
    asignaCasilla(casilla, pos){
        if (this.casillas[pos-1] == 0 ){
            if (this.turno%2==0){
                this.casillas[pos-1] = 1;
                casilla.innerHTML = "<img id='borrable' src='x.jpg' width='180' height='180'>";
            
            } else{
                this.casillas[pos-1] = 2;
                casilla.innerHTML = "<img id='borrable' src='o.jpg' width='180' height='180'>";
            };
            this.compruebaResultado();
            this.cuentaTurno();
            
        }
    }
    resultados(){
        for(var i=0; i<=6; i+=3){
            if(this.casillas[i] != 0 && this.casillas[i] == this.casillas[i+1] && this.casillas[i+1] == this.casillas[i+2]){
                return true;
                break;
            }
        }
        for(var j=0; j<=2; j++){
            if(this.casillas[j] != 0 && this.casillas[j] == this.casillas[j+3] && this.casillas[j+3] == this.casillas[j+6]){
                return true;
                break;
            }
        }
        if(this.casillas[0] != 0 && this.casillas[0] == this.casillas[4] && this.casillas[4] == this.casillas[8]){
            return true;  
        }
        if(this.casillas[2] != 0 && this.casillas[2] == this.casillas[4] && this.casillas[4] == this.casillas[6]){
            return true;
        }
        return false
    }
    
    compruebaResultado(){
        if(this.resultados()){
            this.ganador();
            
        }
    }
    
    ganador(){
            this.jug = this.turno%2 +1
            document.getElementById("texto").innerHTML = 'Has ganado la partida jugador '+ this.jug
            this.fin = true;
    }
    empate(){
        document.getElementById("texto").innerHTML = "Empate, habeis ganado los dos"
    }
}

function iniciar(){
    tic = new tresEnRaya();
}
   
tic = new tresEnRaya();