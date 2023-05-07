import { ListPerson } from "../model/ListPerson.js";


let user = new ListPerson();
console.log(user);


document.querySelector(".modal-body #form").oninput = () => {
    let userEnum = document.querySelector("#user").value;
    let sinhVienInput = document.querySelectorAll(".sinhVien");
    let nhanVienInput = document.querySelectorAll(".nhanVien");
    let khachHangInput = document.querySelectorAll(".khachHang");
    if (userEnum === 2 || userEnum === 3) {
        for (let input of sinhVienInput) {
            input.style.display = none;
        }
    }
}