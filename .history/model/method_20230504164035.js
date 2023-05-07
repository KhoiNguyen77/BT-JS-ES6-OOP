checkValid = (obj) => {
    // Check valid
    let valid = true;
    //   Check bỏ trống;
    valid =
      required(obj.taiKhoan, "tknv", "tbTKNV") &
      required(obj.hoTen, "name", "tbTen") &
      required(obj.email, "email", "tbEmail") &
      required(obj.password, "password", "tbMatKhau") &
      required(obj.ngayLam, "datepicker", "tbNgay") &
      numberRequired(obj.luong, "luongCB", "tbLuongCB") &
      numberRequired(obj.gioLam, "gioLam", "tbGiolam");
    // Check độ dài
    valid = valid & lengthCheck(obj.taiKhoan, "tknv", "tbTKNV", 4, 6);
    //   Check tên
    valid = valid & nameCheck(obj.hoTen, "name", "tbTen");
    // Check email
    valid = valid & checkEmail(obj.email, "email", "tbEmail");
    // Check mật khẩu
    valid = valid & checkPass(obj.password, "password", "tbMatKhau");
    // Check ngày
    valid = valid & checkDate(obj.ngayLam, "datepicker", "tbNgay");
    // Check lương
    valid = valid & checkLuong(obj.luong, "luongCB", "tbLuongCB");
    // Check chức vụ
    valid = valid & checkChucVu(obj.valueChucVu, "chucvu", "tbChucVu");
    // Check lương vào giờ làm
    valid = valid & checkGioLam(obj.gioLam, "gioLam", "tbGiolam");
    return valid;
  };