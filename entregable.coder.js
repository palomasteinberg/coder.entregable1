class TicketManager{
    eventos;
    #precioBase;

    constructor(){
        this.eventos = []
    }

    getEventos(){
        console.log(this.eventos)
    }

    getNewId(){
        return this.eventos.length + 1;
    }

    buscarEvento(id){
        let evento = this.eventos.find( elem => elem.id == id)
        return evento;
    }
    validarEvento(id, usuario){
        let resultado = false;
        let evento = this.buscarEvento(id)
        if(evento.participantes.includes(usuario)){
            console.log('Participante ya registrado')
        }else{
            resultado = true
            
        }
        return resultado;
    }
    agregarEvento(nombre, lugar, fecha, precio){
        let nuevoEvento = { 
            id: this.getNewId(),
            nombre,
            lugar,
            fecha,
            precio,
            participantes: []
        }

        this.eventos.push(nuevoEvento)
    }

    agregarUsuario(idEvento, idUsuario){
        let evento;
       if(this.validarEvento(idEvento, idUsuario)){
            evento = this.buscarEvento(idEvento)
            evento.participantes.push(idUsuario)
       }
        
    }

}

const manager = new TicketManager();
