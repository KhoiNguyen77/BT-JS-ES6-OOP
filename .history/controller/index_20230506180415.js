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
    let rowInput = document.querySelectorAll(".personInputContainer input,.personInputContainer select ");
    let rowSinhVienInput = document.querySelectorAll(".sinhVienInputContainer input");
    let rowNhanVienInput = document.querySelectorAll(".nhanVienInputContainer input");
    let rowKhachHangInput = document.querySelectorAll(".khachHangInputContainer input");
    if (userEnum == 0) {
        window.alert("Vui lòng chọn loại người dùng !");
    } else if (userEnum == 1) {
        let user = new Student();
        for (let input of rowInput) {
            let { id, value } = input;
            user[id] = value;
        }
        for (let input of rowSinhVienInput) {
            let { id, value } = input;
            user[id] = +value;
        }
        document.querySelector("#tbUser").innerHTML = "";
        userList.add(user, userEnum, ".modal-body #form");
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
        document.querySelector("#tbUser").innerHTML = "";
        userList.add(user, userEnum, ".modal-body #form");
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
        document.querySelector("#tbUser").innerHTML = "";
        userList.add(user, userEnum, ".modal-body #form");
    }
    userList.save();
    document.querySelector("#tableDanhSach").innerHTML = userList.render();


})

document.querySelector("#btnDong").addEventListener("click", function () {
    document.querySelector(".modal-body #form").reset();
    document.querySelector(".sinhVienInputContainer").style.display = "none";
    document.querySelector(".nhanVienInputContainer").style.display = "none";
    document.querySelector(".khachHangInputContainer").style.display = "none";
    document.querySelectorAll(".sp-thongbao").forEach(error => error.innerHTML = "");
})
window.deleteUser = (id) => {
    if (userList.delete(id)) {
        userList.save();
        document.querySelector("#tableDanhSach").innerHTML = userList.render();
    }
}
window.updateUser = id => {
    let userUpdate = userList.getUser(id);
    console.log(userUpdate);
    let arrayInput = document.querySelectorAll(".personInputContainer input, .personInputContainer select, .sinhVienInputContainer input, .nhanVienInputContainer input, .khachHangInputContainer input");
    arrayInput.forEach(input => console.log(input))
    if (userUpdate.user == 1) {
        document.querySelector(".sinhVienInputContainer").style.display = "block";
    } else if(userUpdate.user == 2) {
        document.querySelector(".nhanVienInputContainer").style.display = "block";
    }else if(userUpdate.user == 3) {
        document.querySelector(".khachHangInputContainer").style.display = "block";
    }
    for (let input of arrayInput) {
        let {id} = input;
        input.value = userUpdate[id];
    }
}

document.querySelector("#btnUpdateUser").addEventListener("click", function () {
    let userEnum = document.querySelector("#user").value;
    let rowInput = document.querySelectorAll(".personInputContainer input,.personInputContainer select ");
    let rowSinhVienInput = document.querySelectorAll(".sinhVienInputContainer input");
    let rowNhanVienInput = document.querySelectorAll(".nhanVienInputContainer input");
    let rowKhachHangInput = document.querySelectorAll(".khachHangInputContainer input");
    if (userEnum == 0) {
        window.alert("Vui lòng chọn loại người dùng !");
    } else if (userEnum == 1) {
        let user = new Student();
        for (let input of rowInput) {
            let { id, value } = input;
            user[id] = value;
        }
        for (let input of rowSinhVienInput) {
            let { id, value } = input;
            user[id] = +value;
        }
        document.querySelector("#tbUser").innerHTML = "";
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
        document.querySelector("#tbUser").innerHTML = "";
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
        document.querySelector("#tbUser").innerHTML = "";
    }
    console.log(user.name);
    userList.updateUser(user.id, user);
    userList.save();
    document.querySelector("#tableDanhSach").innerHTML = userList.render();
})

userList.get();
document.querySelector("#tableDanhSach").innerHTML = userList.render();



