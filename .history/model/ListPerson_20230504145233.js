import { Person, Student, Employee, Customer } from "../model/model.js";


export class ListPerson {
 users = [];
add(user){
    this.users.push(user);
}
render() {
    let rowUser = "";
    for (let user of this.users) {
        
    }
}
}