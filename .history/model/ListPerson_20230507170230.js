import { Person, Student, Employee, Customer } from "../model/model.js";


export class ListPerson {
    users = [];
    add(user, userEnum, form) {
        // Check valid dựa trên loại người dùng
        if (userEnum == 1) {
            if (!checkValid(user) || !checkValidForStudent(user)) return;
        }
        if (userEnum == 2) {
            if (!checkValid(user) || !checkValidForEmployee(user)) return;
        }
        if (userEnum == 3) {
            if (!checkValid(user) || !checkValidForCustomer(user)) return;
        }
        // Check mã trùng
        let indexId = this.users.findIndex(person => person.id == user.id);
        if (indexId != -1) {
            window.alert("Mã đã tồn tại!. Xin vui lòng nhập mã khác!");
            return;
        } else {
            window.alert("Thêm người dùng thành công !");
            this.users.push(user);
            document.querySelector(`${form}`).reset();
        }
        return true;
    }
    delete(id) {
        let idXoa = this.users.findIndex(user => user.id == id);
        console.log(idXoa);
        if (idXoa != -1) {
            this.users.splice(idXoa, 1);
            return true;
        }
        return false;
    }
    getUser(id) {
        let userUpdate = this.users.find(user => user.id == id);
        return userUpdate;
    }
    updateUser(idUpdate, updatedUser) {
        let user = this.getUser(idUpdate);
        if (user) {
            for (let key in user) {
                user[key] = updatedUser[key];
            }
            return true;
        }
        return false;
    }
    render() {
        let rowUser = "";
        for (let user of this.users) {
            let newUser = new Person();
            newUser = { ...newUser, ...user };
            rowUser += `
            <tr>
            <td>${newUser.id}</td>
            <td>${newUser.name}</td>
            <td>${newUser.email}</td>
            <td>${newUser.address}</td>
            <td>${newUser.loaiUser}</td>
            <td>
            <button class="btn btn-primary rounded" id="btnChiTiet" data-toggle="modal" data-target="#chiTietModal" onclick="renderChiTiet(${newUser.id})">Chi tiết</button>
            <button class="btn btn-danger rounded" id="btnXoa" onclick="deleteUser(${newUser.id})">Xóa</button>
            <button class="btn btn-success rounded" id="btnXoa" onclick="updateUser(${newUser.id})" data-toggle="modal" data-target="#Modal">Cập nhật</button>
            </td>
            </tr>
        `}
        return rowUser;
    }
    renderDesc(value, id) {
        if (value == 1) {
            let userSelected = this.getUser(id);
            let rowUser = "";
            rowUser += `
                <tr>
                <td>${userSelected.id}</td>
                <td>${userSelected.name}</td>
                <td>${userSelected.email}</td>
                <td>${userSelected.address}</td>
                <td>${userSelected.loaiUser}</td>
                <td>${userSelected.diemToan}</td>
                <td>${userSelected.diemLy}</td>
                <td>${userSelected.diemHoa}</td>
                <td></td>
                <td>
                <button class="btn btn-primary rounded" id="btnTinhDiem" onclick="tinhDiem()">Tính Điểm</button>
                </td>
                </tr>
            `
            return rowUser;
        } else if (value == 2) {
            let userSelected = this.getUser(id);
            let rowUser = "";
            rowUser += `
                <tr>
                <td>${userSelected.id}</td>
                <td>${userSelected.name}</td>
                <td>${userSelected.email}</td>
                <td>${userSelected.address}</td>
                <td>${userSelected.loaiUser}</td>
                <td>${userSelected.soNgayLamViec}</td>
                <td>${userSelected.luongTheoNgay}</td>
                <td></td>
                <td>
                <button class="btn btn-primary rounded" id="btnTinhDiem" onclick="tinhLuong()">Tính lương</button>
                </td>
                </tr>
            `
            return rowUser;
        } else if (value == 3) {
            let userSelected = this.getUser(id);
            let rowUser = "";
            rowUser += `
                <tr>
                <td>${userSelected.id}</td>
                <td>${userSelected.name}</td>
                <td>${userSelected.email}</td>
                <td>${userSelected.address}</td>
                <td>${userSelected.loaiUser}</td>
                <td>${userSelected.tenCongTy}</td>
                <td>${userSelected.hoaDon}</td>
                <td>${userSelected.danhGia}</td>
                <td>
                </td>
                </tr>
            `
            return rowUser;
        }
    }
    renderHeader(value) {
        if (value == 1) {
            let rowHeader = "";
            rowHeader += `
            <tr>
                <th class="nowrap">
                    <span class="mr-1">Mã</span>

                </th>
                <th>Họ và tên
                    <i class="fa fa-arrow-up" id="SapXepTang"></i>
                    <i class="fa fa-arrow-down" id="SapXepGiam"></i>
                </th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Loại người dùng</th>
                <th>Điểm Toán</th>
                <th>Điểm Lý</th>
                <th>Điểm Hóa</th>
                <th>Điểm Trung Bình</th>
                <th><em class="fa fa-cog"></em></th>
            </tr>
            `
            return rowHeader;
        } else if (value == 2) {
            let rowHeader = "";
            rowHeader += `
            <tr>
                <th class="nowrap">
                    <span class="mr-1">Mã</span>

                </th>
                <th>Họ và tên
                    <i class="fa fa-arrow-up" id="SapXepTang"></i>
                    <i class="fa fa-arrow-down" id="SapXepGiam"></i>
                </th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Loại người dùng</th>
                <th>Số Ngày Làm Việc</th>
                <th>Lương theo ngày</th>
                <th>Tổng lương</th>
                <th><em class="fa fa-cog"></em></th>
            </tr>
            `
            return rowHeader;
        } else if (value == 3) {
            let rowHeader = "";
            rowHeader += `
            <tr>
                <th class="nowrap">
                    <span class="mr-1">Mã</span>

                </th>
                <th>Họ và tên
                    <i class="fa fa-arrow-up" id="SapXepTang"></i>
                    <i class="fa fa-arrow-down" id="SapXepGiam"></i>
                </th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Loại người dùng</th>
                <th>Tên Công Ty</th>
                <th>Trị giá hóa đơn</th>
                <th>Đánh giá</th>
                <th><em class="fa fa-cog"></em></th>
            </tr>
            `
            return rowHeader;
        }
    }
    filter(value) {
        if (value != "all") {
            this.users = this.users.filter(user => user.user == value);
        }
        return this.users;
    }
    save() {
        let usersJson = JSON.stringify(this.users);
        localStorage.setItem("Mảng Người Dùng", usersJson);
    }
    get() {
        if (localStorage.getItem("Mảng Người Dùng")) {
            let users = JSON.parse(localStorage.getItem("Mảng Người Dùng"));
            this.users = users;
        }
    }
}