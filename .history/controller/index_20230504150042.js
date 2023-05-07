import { ListPerson } from "../model/ListPerson.js";


let user = new ListPerson();
console.log(user);


document.querySelector(".modal-body #form").oninput = () => {
    let userEnum = document.querySelector("#user").value;
    console.log(userEnum);
}