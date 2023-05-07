function stringToSlug(title) {
    //Đổi chữ hoa thành chữ thường
    slug = title.toLowerCase();

    //Đổi ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, "a");
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, "e");
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, "i");
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, "o");
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, "u");
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, "y");
    slug = slug.replace(/đ/gi, "d");
    //Xóa các ký tự đặt biệt
    slug = slug.replace(
        /\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,
        ""
    );
    //Đổi khoảng trắng thành ký tự gạch ngang
    slug = slug.replace(/ /gi, "-");
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    slug = slug.replace(/\-\-\-\-\-/gi, "-");
    slug = slug.replace(/\-\-\-\-/gi, "-");
    slug = slug.replace(/\-\-\-/gi, "-");
    slug = slug.replace(/\-\-/gi, "-");
    //Xóa các ký tự gạch ngang ở đầu và cuối
    slug = "@" + slug + "@";
    slug = slug.replace(/\@\-|\-\@|\@/gi, "");

    return slug;
}

// Check để trống cho ký tự
required = (value, id, error) => {
    if (value.trim() === "") {
        let tenInput = document.querySelector(`#${id}`).getAttribute("name");
        document.querySelector(
            `#${error}`
        ).innerHTML = `${tenInput} không được để trống`;
        document.querySelector(`#${error}`).setAttribute("class", "text-danger");
        return false;
    } else {
        document.querySelector(`#${error}`).innerHTML = "";
        return true;
    }
};
// Check để trống cho số

numberRequired = (value, id, error) => {
    if (value === 0) {
        let tenInput = document.querySelector(`#${id}`).getAttribute("name");
        document.querySelector(
            `#${error}`
        ).innerHTML = `${tenInput} không được để trống`;
        document.querySelector(`#${error}`).setAttribute("class", "text-danger");
        return false;
    } else {
        document.querySelector(`#${error}`).innerHTML = "";
        return true;
    }
};
// Check độ dài
lengthCheck = (value, id, error, minLength, maxLength) => {
    if (value.trim().length < minLength || value.trim().length > maxLength) {
        let tenInput = document.querySelector(`#${id}`).getAttribute("name");
        document.querySelector(`#${error}`).innerHTML = `${tenInput} phải từ ${minLength} đến ${maxLength} ký tự`;
        document.querySelector(`#${error}`).setAttribute("class","text-danger");
        return false;
    } else {
        document.querySelector(`#${error}`).innerHTML = "";
        return true;
    }
};

// Check tên nhân viên

nameCheck = (value, id, error) => {
    let name =
        /^([a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+)$/i;
    if (name.test(value.trim())) {
        document.querySelector(`#${error}`).innerHTML = "";
        return true;
    } else {
        let tenInput = document.querySelector(`#${id}`).getAttribute("name");
        document.querySelector(`#${error}`).innerHTML = `${tenInput} phải là ký tự`;
        document.querySelector(`#${error}`).setAttribute("class", "text-danger");
        return false;
    }
};

// Check email

checkEmail = (value, id, error) => {
    let mailformat =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (mailformat.test(value)) {
        document.querySelector(`#${error}`).innerHTML = "";
        return true;
    } else {
        let tenInput = document.querySelector(`#${id}`).getAttribute("name");
        document.querySelector(`#${error}`).innerHTML = `${tenInput} không hợp lệ`;
        document.querySelector(`#${error}`).setAttribute("class", "text-danger");
        return false;
    }
};


// Check lương

checkLuong = (value, id, error) => {
    let numbers = /^[0-9]+$/;
    if (numbers.test(value)) {
        if (value >= 100000 && value <= 1000000) {
            document.querySelector(`#${error}`).innerHTML = "";
            return true;
        } else {
            let tenInput = document.querySelector(`#${id}`).getAttribute("name");
            document.querySelector(
                `#${error}`
            ).innerHTML = `${tenInput} phải từ 100.000 VNĐ đến 1.000.000 VNĐ`;
            document.querySelector(`#${error}`).setAttribute("class", "text-danger");
            return false;
        }
    } else {
        document;
        let tenInput = document.querySelector(`#${id}`).getAttribute("name");
        document.querySelector(`#${error}`).innerHTML = `${tenInput} không hợp lệ`;
        document.querySelector(`#${error}`).setAttribute("class", "text-danger");
        return false;
    }
};

// Check chức vụ

checkLoaiUser = (value, id, error) => {
    if (value === 1) {
        let tenInput = document.querySelector(`#${id}`).getAttribute("name");
        document.querySelector(
            `#${error}`
        ).innerHTML = `Phải chọn ${tenInput} hợp lệ`;
        document.querySelector(`#${error}`).setAttribute("class", "text-danger");
        return false;
    } else if (value === 2 || value === 3 || value === 4) {
        document.querySelector(`#${error}`).innerHTML = "";
        return true;
    }
};

//   Check id
checkId = (value, id, error) => {
    let numbers = /^[0-9]+$/;
    if (numbers.test(value)) {
        document.querySelector(`#${error}`).innerHTML = "";
        return true;
    } else {
        let tenInput = document.querySelector(`#${id}`).getAttribute("name");
        document.querySelector(`#${error}`).innerHTML = `${tenInput} không hợp lệ`;
        document.querySelector(`#${error}`).setAttribute("class", "text-danger");
        return false;
    }
}
// Check ngày làm
checkNgayLam = (value, id, error) => {
    let numbers = /^[0-9]+$/;
    if (numbers.test(value)) {
        if (value >= 1 && value <= 25) {
            document.querySelector(`#${error}`).innerHTML = "";
            return true;
        } else {
            let tenInput = document.querySelector(`#${id}`).getAttribute("name");
            document.querySelector(
                `#${error}`
            ).innerHTML = `${tenInput} phải từ 1 đến 25 ngày`;
            document.querySelector(`#${error}`).setAttribute("class", "text-danger");
            return false;
        }
    } else {
        let tenInput = document.querySelector(`#${id}`).getAttribute("name");
        document.querySelector(`#${error}`).innerHTML = `${tenInput} không hợp lệ`;
        document.querySelector(`#${error}`).setAttribute("class", "text-danger");
        return false;
    }
};

// Check điểm
checkDiem = (value, id, error) => {
    let numbers = /^[0-9]+$/;
    if (numbers.test(value)) {
        if (value >= 1 && value <= 10) {
            document.querySelector(`#${error}`).innerHTML = "";
            return true;
        } else {
            let tenInput = document.querySelector(`#${id}`).getAttribute("name");
            document.querySelector(
                `#${error}`
            ).innerHTML = `${tenInput} phải từ 1 đến 10 điểm`;
            document.querySelector(`#${error}`).setAttribute("class", "text-danger");
            return false;
        }
    } else {
        let tenInput = document.querySelector(`#${id}`).getAttribute("name");
        document.querySelector(`#${error}`).innerHTML = `${tenInput} không hợp lệ`;
        document.querySelector(`#${error}`).setAttribute("class", "text-danger");
        return false;
    }
};

// Check trị giá hóa đơn;
checkHoaDon = (value, id, error) => {
    let numbers = /^[0-9]+$/;
    if (numbers.test(value)) {
        if (value >= 1000) {
            document.querySelector(`#${error}`).innerHTML = "";
            return true;
        }
    } else {
        document;
        let tenInput = document.querySelector(`#${id}`).getAttribute("name");
        document.querySelector(`#${error}`).innerHTML = `${tenInput} không hợp lệ`;
        document.querySelector(`#${error}`).setAttribute("class", "text-danger");
        return false;
    }
};
// Check đánh giá;

// Function reset error
reset = (error) => {
    document.querySelectorAll(`#${error}`).innerHTML = "";
};

// Validation

checkValid = (obj) => {
    // Check valid
    let valid = true;
    //   Check bỏ trống;
    valid =
        required(obj.id, "id", "tbMa") &
        required(obj.name, "name", "tbTen") &
        required(obj.email, "email", "tbEmail") &
        required(obj.address, "address", "tbDiaChi");
    // Check Id là số
    valid = valid & checkId(obj.id, "id", "tbMa");
    // Check độ dài
    valid = valid & lengthCheck(obj.id, "id", "tbMa", 1, 6);
    //   Check tên
    valid = valid & nameCheck(obj.name, "name", "tbTen");
    // Check email
    valid = valid & checkEmail(obj.email, "email", "tbEmail");
    // Check các trường input đối với sinh viên
    valid = valid & checkDiem(obj.diemToan, "diemToan", "tbDiemToan");
    valid = valid & checkDiem(obj.diemLy, "diemLy", "tbDiemLy");
    valid = valid & checkDiem(obj.diemHoa, "diemHoa", "tbDiemHoa");
    // Check các trường input đối với nhân viên
    // Check lương
    valid = valid & checkLuong(obj.luongTheoNgay, "luongTheoNgay", "tbLuongTheoNgay");
    // Check số ngày làm việc
    valid = valid & checkNgayLam(obj.soNgayLamViec, "soNgayLamViec", "tbgioLam");
    // Check các trường input đối với khách hàng
    valid = valid & required(obj.tenCongTy, "tenCongTy", "tbCongTy");
    valid = valid & checkHoaDon(obj.hoaDon, "hoaDon", "tbHoaDon");
    valid = valid & lengthCheck(obj.danhGia, "danhGia", "tbDanhGia", 1, 100);
    // Check chức vụ
    // valid = valid & checkChucVu(obj.valueChucVu, "chucvu", "tbChucVu");
    return valid;
};

