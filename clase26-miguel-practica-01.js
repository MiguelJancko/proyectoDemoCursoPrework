// Clase padre
class Account {
    constructor (id, firstName, surname, mobileNumber, birthday, email, ciNumber, password, recordedDate) {
        this.id = id
        this.firstName = firstName
        this.surname = surname
        this.mobileNumber = mobileNumber
        this.birthday = birthday
        this.email = email
        this.ciNumber = ciNumber
        this.password = password
        this.recordedDate = recordedDate
    }

    registerClient () {
        //
    }
}

// Clase hijos
class Manager extends Account {
    constructor  (id, firstName, surname, mobileNumber, birthday, email, ciNumber, password, recordedDate) {
        super (id, firstName, surname, mobileNumber, birthday, email, ciNumber, password, recordedDate)
    }

    mostrarDatosBasico () {
        let {firstName, surname, mobileNumber, birthday, recordedDate} = this
        console.log(`Tus datos como administrador son:
        Nombre(s): ${firstName}
        Apellido(s): ${surname}
        Celular: ${mobileNumber}
        Fecha de nacimiento: ${birthday}
        Se registró el: ${recordedDate}
        `);
    }

    registerEmployee () {
        //
    }
}

class Client extends Account {
    constructor (id, firstName, surname, mobileNumber, birthday, email, recordedDate, treatmentHistory, productHistory, serviceHistory) {
        super (id, firstName, surname, mobileNumber, birthday, email, recordedDate)
        this.treatmentHistory = treatmentHistory
        this.productHistory = productHistory
        this.serviceHistory = serviceHistory
    }

    mostrarDatosBasico () {
        let {firstName, surname, mobileNumber, birthday, email, recordedDate, treatmentHistory} = this
        console.log(`Tus datos como cliente son:
        Nombre(s): ${firstName}
        Apellido(s): ${surname}
        Celular: ${mobileNumber}
        Fecha de nacimiento: ${birthday}
        Su email es: ${email}
        Se registró el: ${recordedDate}
        Tratamiento: ${treatmentHistory}
        `);
    }

    purchasedService () {
        //
    }

    purchasedProduct () {
        //
    }
    purchasedTreatment () {
        //
    }
}

// registramos las personas
let glenny = new Manager (1546, 'Glenny', 'Rodriguez Martinez', 75489836, '23/05/1978', 'glennysalon@gmail.com', '4598742', 'Glenny1978', '25/05/2021')
let margarita = new Manager (1546, 'Margarita', 'Rodriguez Martinez', 75489836, '23/05/1988', 'glennysalon@gmail.com', '4598742', 'Glenny1978', '25/05/2021')
let miguel = new Client (6664, 'Miguel Ángel', 'Jancko Gutiérrez', 75432122, '17/12/1987', 'miguelangel@gmail.com', '18/05/2021', ['ácne', 'caída del cabello'], [], [])
let ana = new Client (7898, 'Ana María', 'Salvatierra Quiroga', 65847925, '05/05/1989', 'anasalvatierra@gmail.com', '26/05/2021', ['manchas', 'ácne'], [], [])

glenny.mostrarDatosBasico()
miguel.mostrarDatosBasico()
margarita.mostrarDatosBasico()
ana.mostrarDatosBasico()