class Administrativo extends Persona{
    area = '';
    cargo = '';
    
    constructor(nombre, edad, area, cargo) {
        super(nombre, edad);
        this.area = area;
        this.cargo = cargo;
    }

    set setAdministrativo ({nombre, edad, area, cargo}){
        this.nombre = nombre;
        this.edad   = edad;
        this.area   = area;
        this.cargo  = cargo;
    }

    get getAdministrativo (){
        return {
            nombre: this.nombre,
            edad: this.edad,
            area: this.area, 
            cargo: this.cargo 
        };
    }
    saludaAdmin(){
        console.log(`Mi nombre es ${this.nombre} tengo ${this.edad} y trabajo como "${this.cargo}" en el area de ${this.area}`)
    };
}

const administrativo = new Administrativo();

administrativo.setAdministrativo = {
    nombre: 'Leonardo Loza',
    edad: '49',
    area: 'Contabilidad',
    cargo: 'Jefe de Area'
};

console.log(administrativo);

administrativo.saludaAdmin();