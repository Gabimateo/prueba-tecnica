class UsersApiResponseModel{

    name;
    surname;
    age;
    last_login;
    available;

    constructor({
    name,
    surname,
    age,
    last_login,
    available,
    }){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.last_login = this.transformDate(last_login);
        this.available = available === true ? 'Activo' : 'Inactivo';
    }

    transformDate(last_login){
        return new Date(last_login)
    }
}
export default UsersApiResponseModel