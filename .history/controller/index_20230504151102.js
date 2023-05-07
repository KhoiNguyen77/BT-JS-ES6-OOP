import { ListPerson } from "../model/ListPerson.js";


let user = new ListPerson();
console.log(user);


document.querySelector(".modal-body #form").oninput = () => {
    let userEnum = document.querySelector("#user").value;
    let sinhVienInput = document.querySelectorAll(".sinhVien");
    let nhanVienInput = document.querySelectorAll(".nhanVien");
    let khachHangInput = document.querySelectorAll(".khachHang");
    if (userEnum == 1) {
        for (let input of nhanVienInput) {
            input.style.display = 'none';
        }
        for (let input of khachHangInput) {
            input.style.display = 'none';
        }
    } else if (userEnum == 2) {
        for (let input of sinhvienInput) {
            input.style.display = 'none';
        }
        for (let input of khachHangInput) {
            input.style.display = 'none';
        }
    } else if (userEnum == 3) {
        for (let input of sinhvienInput) {
            input.style.display = 'none';
        }
        for (let input of nhanVienInput) {
            input.style.display = 'none';
        }
    }
}