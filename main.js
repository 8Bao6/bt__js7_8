listNumber = [];
minDuong = [];
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
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      minDuong = listNumber[i]
    }
  }
  for (var i = 1; i < minDuong.length; i++) {
    var number = minDuong[0]
    if (number > minDuong[i]) {
      number = minDuong[i]
    }

  }
  document.getElementById("infoSoDuongNhoNhat").innerHTML = minDuong;
}



