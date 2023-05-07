import { Person, Student, Employee, Customer } from "../model/model.js";


export class ListPerson {
 users = [];
add(user){
    this.users.push(user);
}
render() {
    let rowUser = "";
    for (let user of this.users) {
        let newUser = new Person();
        newUser = {...newUser, ...user};
        rowUser += `
            <tr>
            <td>${newUser.id}</td>
            <td>${newUser.name}</td>
            <td>${newUser.email}</td>
            <td>${newUser.address}</td>
            <td></td>
            </tr>
        
        
        
        
        `
    }
}
}