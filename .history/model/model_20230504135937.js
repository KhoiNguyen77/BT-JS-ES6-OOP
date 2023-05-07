class Person {
    id = "";
    name = "";
    address = "";
    email = "";

}


class Student extends Person {
    diemToan = 0;
    diemLy = 0;
    diemHoa = 0;
}

class Employee extends Person {
    soNgayLamViec = 0;
    luong = 0;
}

class Customer extends Person {
    tenCongTy = "";
    hoaDon = "";
    danhGia = "";
}