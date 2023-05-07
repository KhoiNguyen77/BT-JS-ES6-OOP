import { ListPerson } from "../model/ListPerson.js";
import { Student, Employee, Customer } from "../model/model.js";

let userList = new ListPerson();


document.querySelector(".modal-body #form").onchange = () => {
    let rowSinhVienThongBao = document.querySelectorAll(".sinhVienInputContainer .sp-thongbao");
    let rowNhanVienThongBao = document.querySelectorAll(".nhanVienInputContainer .sp-thongbao");
    let rowKhachHangThongBao = document.querySelectorAll(".khachHangInputContainer .sp-thongbao");
    let userEnum = document.querySelector("#user").value;
    if (userEnum == 1) {
        document.querySelector(".sinhVienInputContainer").style.display = "block";
        document.querySelector(".khachHangInputContainer").style.display = "none";
        document.querySelector(".nhanVienInputContainer").style.display = "none";

    } else if (userEnum == 2) {
        document.querySelector(".sinhVienInputContainer").style.display = "none";
        document.querySelector(".nhanVienInputContainer").style.display = "block";
        document.querySelector(".khachHangInputContainer").style.display = "none";
    } else if (userEnum == 3) {
        document.querySelector(".sinhVienInputContainer").style.display = "none";
        document.querySelector(".nhanVienInputContainer").style.display = "none";
        document.querySelector(".khachHangInputContainer").style.display = "block";

    } else if (userEnum == 0) {
        document.querySelector(".sinhVienInputContainer").style.display = "none";
        document.querySelector(".nhanVienInputContainer").style.display = "none";
        document.querySelector(".khachHangInputContainer").style.display = "none";

    }
}

document.querySelector("#btnThemUser").addEventListener("click", function () {
    let userEnum = document.querySelector("#user").value;
    let rowInput = document.querySelectorAll(".personInputContainer input");
    let rowSinhVienInput = document.querySelectorAll(".sinhVienInputContainer input");
    let rowNhanVienInput = document.querySelectorAll(".nhanVienInputContainer input");
    let rowKhachHangInput = document.querySelectorAll(".khachHangInputContainer input");
    if (userEnum == 1) {
        let user = new Student();
        for (let input of rowInput) {
            let { id, value } = input;
            user[id] = value;
        }
        for (let input of rowSinhVienInput) {
            let { id, value } = input;
            user[id] = +value;
        }
        userList.add(user, userEnum);
    } else if (userEnum == 2) {
        let user = new Employee();
        for (let input of rowInput) {
            let { id, value } = input;
            user[id] = value;
        }
        for (let input of rowNhanVienInput) {
            let { id, value } = input;
            user[id] = +value;
        }
        userList.add(user, userEnum);
    } else if (userEnum == 3) {
        let user = new Customer();
        for (let input of rowInput) {
            let { id, value } = input;
            user[id] = value;
        }
        for (let input of rowKhachHangInput) {
            let { id, value } = input;
            user[id] = value;
        }
        userList.add(user, userEnum);
    }
    userList.save();
    document.querySelector("#tableDanhSach").innerHTML = userList.render();


})


userList.get();
document.querySelector("#tableDanhSach").innerHTML = userList.render();



