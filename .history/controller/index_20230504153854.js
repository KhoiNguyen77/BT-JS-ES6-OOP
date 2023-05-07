import { ListPerson } from "../model/ListPerson.js";


let user = new ListPerson();
console.log(user);


document.querySelector(".modal-body #form").onchange = () => {
    let userEnum = document.querySelector("#user").value;
    if (userEnum == 1) {
        document.querySelector(".sinhvienInputContainer").style.display = "inline-block";
    } else if (userEnum == 2) {
        document.querySelector(".sinhVienInputContainer").style.display = "none";
        document.querySelector(".nhanVienInputContainer").style.display = "inline-block";
        document.querySelector(".khachHangInputContainer").style.display = "none";
    } else if (userEnum == 3) {
        document.querySelector(".sinhVienInputContainer").style.display = "none";
        document.querySelector(".nhanVienInputContainer").style.display = "none";
        document.querySelector(".khachHangInputContainer").style.display = "inline-block";
    }
}