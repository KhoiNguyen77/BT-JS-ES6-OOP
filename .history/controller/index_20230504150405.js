import { log } from "console";
import { ListPerson } from "../model/ListPerson.js";


let user = new ListPerson();
console.log(user);


document.querySelector(".modal-body #form").oninput = () => {
    let userEnum = document.querySelector("#user").value;
    let sinhVienInput = document.querySelectorAll(".sinhVien");
    console.log(sinhVienInput);
    if (userEnum === 2 || userEnum === 3) {
        for (let input of sinhVienInput) {
            console.log(input);
            input.style.display = "none";
        }
    }
}