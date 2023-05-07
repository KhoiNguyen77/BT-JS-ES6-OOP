import { ListPerson } from "../model/ListPerson.js";


let user = new ListPerson();
console.log(user);


document.querySelector(".modal-body #form").onchange = () => {
    let userEnum = document.querySelector("#user").value;
    if (userEnum == 1) {
        document.querySelector("sinhvienInputContainer").style.display = "inline-block";
    } else if (userEnum == 2) {

    } else if (userEnum == 3) {

    }
}