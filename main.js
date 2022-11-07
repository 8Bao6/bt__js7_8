listNumber = [];
function addNumber() {
  var number = document.getElementById("txtNumber").value * 1;

  listNumber.push(number);

  document.getElementById("infoListNumber").innerHTML = listNumber;
}


function tinhTongSoDuong() {
  var soDuong = 0;
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      soDuong += listNumber[i];
    }
  }
  var result = "Tổng các số dương là: " + soDuong;
  document.getElementById("infoTongDuong").innerHTML = result;
}

function demSoDuong() {
  var dem = 0;
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      dem++;
    }
  }
  var result = "Có tất cả: " + dem + " Số Dương";
  document.getElementById("infoDemSoDuong").innerHTML = result;
}

function soNhoNhat() {
  var min = listNumber[0]
  for (var i = 1; i < listNumber.length; i++) {
    if (min > listNumber[i]) {
      min = listNumber[i]
    }
  }
  var result = "Số nhỏ nhất là: " + min;
  document.getElementById("infoSoNhoNhat").innerHTML = result;
}
function soDuongNhoNhat() {
  var rs = "";
  var minDuong = [];
  var number = 0;

  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      number = listNumber[i];
      minDuong.push(number)
    }
    console.log(minDuong);
  }

  if (minDuong.length === 0) {
    alert("Vui lòng nhập số")
  } else {
    var min = minDuong[0]
    for (var j = 1; j < minDuong.length; j++) {
      if (min > minDuong[j]) {
        min = minDuong[j]
      }
      rs = "Số dương nhỏ nhất là: " + min;
    }
  }
  document.getElementById("infoSoDuongNhoNhat").innerHTML = rs;
}

function sapXepTangDan() {
  for (var i = 0; i < listNumber.length - 1; i++) {
    for (var j = i + 1; j < listNumber.length; j++) {
      if (listNumber[i] > listNumber[j]) {
        var temp = listNumber[i];
        listNumber[i] = listNumber[j];
        listNumber[j] = temp;
      }
    }
  }
  var result = "Kết quả tăng dần: " + listNumber;
  document.getElementById("infoTangDan").innerHTML = result;
}


function soSanh() {
  var soAm = 0;
  var soDuong = 0;
  var rs = "";
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] < 0) {
      soAm++;
    } if (listNumber[i] > 0) {
      soDuong++;
    }

  }
  if (soAm == soDuong) {
    rs = "Số lượng số: Âm = Dương";
  } if (soDuong > soAm) {
    rs = "Số lượng số: Dương > Âm";
  } if (soDuong < soAm) {
    rs = "Số lượng số: Dương < Âm";
  }
  document.getElementById("infoSoSanh").innerHTML = rs;
}
