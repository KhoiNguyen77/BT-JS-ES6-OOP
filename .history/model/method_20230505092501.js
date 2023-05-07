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
        document.querySelector(
            `#${error}`
        ).innerHTML = `${tenInput} phải từ 0${minLength} đến 0${maxLength} số`;
        document.querySelector(`#${error}`).classList.add("text-danger");
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
    console.log(value.trim());
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
            ).innerHTML = `${tenInput} phải từ 1.000.000 đến 20.000.000 VNĐ`;
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

// Check giờ làm

checkGioLam = (value, id, error) => {
    let numbers = /^[0-9]+$/;
    if (numbers.test(value)) {
        if (value >= 80 && value <= 200) {
            document.querySelector(`#${error}`).innerHTML = "";
            return true;
        } else {
            let tenInput = document.querySelector(`#${id}`).getAttribute("name");
            document.querySelector(
                `#${error}`
            ).innerHTML = `${tenInput} phải từ 80 đến 200 giờ`;
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
// Check địa chỉ không chứa ký tự đặc biệt
checkAddress = (value, id, error) => {
    let normalCha = /^[A-Za-z0-9]*$/;
    if (normalCha.test(value)) {
        document.querySelector(`#${error}`).innerHTML = "";
        return true;
    } else {
        let tenInput = document.querySelector(`#${id}`).getAttribute("name");
        document.querySelector(`#${error}`).innerHTML = `${tenInput} không được chứa ký tự đặc biệt`;
        document.querySelector(`#${error}`).setAttribute("class", "text-danger");
        return false;
    }

}

// Function reset error
reset = (error) => {
    document.querySelector(`#${error}`).innerHTML = "";
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
    // Check địa chỉ
    valid = valid & checkAddress(obj.address, "address", "tbDiaChi");

    // Check lương
    valid = valid & checkLuong(obj.luongTheoNgay, "luongTheoNgay", "tbLuongTheoNgay");
    // Check chức vụ
    // valid = valid & checkChucVu(obj.valueChucVu, "chucvu", "tbChucVu");
    // Check lương vào giờ làm
    // valid = valid & checkGioLam(obj.gioLam, "gioLam", "tbGiolam");
    return valid;
};

