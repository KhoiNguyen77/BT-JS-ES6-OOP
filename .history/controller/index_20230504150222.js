import { ListPerson } from "../model/ListPerson.js";


let user = new ListPerson();
console.log(user);


document.querySelector(".modal-body #form").oninput = () => {
    let userEnum = document.querySelector("#user").value;
    let sinhVienInput = document.querySelectorAll(".sinhVien");
    console.log(userEnum);
    if (userEnum === 1) {

    }
}