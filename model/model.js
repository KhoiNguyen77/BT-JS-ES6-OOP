export class Person {
    id = "";
    name = "";
    address = "";
    email = "";
    user = 0;
    loaiUser = "";
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
    tinhLuong() {
        return this.soNgayLamViec * this.luongTheoNgay;
    }
}
export class Customer extends Person {
    tenCongTy = "";
    hoaDon = "";
    danhGia = "";
}