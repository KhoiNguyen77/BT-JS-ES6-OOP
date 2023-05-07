export class Person {
    id = "";
    name = "";
    address = "";
    email = "";

}


export class Student extends Person {
    diemToan = 0;
    diemLy = 0;
    diemHoa = 0;
    tinhDiem() {
        return ((this.diemToan + this.diemHoa + this.diemLy) / 3).toFixed(2);
    }
}

export class Employee extends Person {
    soNgayLamViec = 0;
    luongTheoNgay = 0;
    luong = 0
    tinhLuong() {
        this.luong = this.soNgayLamViec * this.luongTheoNgay;
        return this.luong;
    }
}

export class Customer extends Person {
    tenCongTy = "";
    hoaDon = "";
    danhGia = "";
}