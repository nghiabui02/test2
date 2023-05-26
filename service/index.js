"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var honey_1 = require("../unility/honey");
var honeyService_1 = require("./honeyService");
var add = require('readline-sync');
var choice = -1;
var ql = new honeyService_1.princessService();
while (true) {
    console.log('Nhập vào lựa chọn:' +
        '\n 1. Hiển thị' +
        '\n 2. Tìm kiếm' +
        '\n 3. Thêm công chúa' +
        '\n 4 Sửa thông tin công chúa' +
        '\n 5 Xoá một công chúa' +
        '\n 0. Thoat');
    choice = add.question('Chọn: ');
    if (choice == 1) {
        ql.show();
    }
    if (choice == 3) {
        console.log('Nhập thêm một công chúa: ');
        var idBae = add.question('Nhập mã công chúa');
        var nameBae = add.question('Nhập tên công chúa');
        var zodiacBae = add.question('Nhập cung hoàng đạo của công chúa');
        var homeTown = add.question('Nhập quê công chúa');
        var yearOfBirth = add.question('Nhập năm sinh công chúa');
        var hobby = add.question('Nhập sở thích của công chúa');
        ql.add(new honey_1.princess(idBae, nameBae, zodiacBae, homeTown, yearOfBirth, hobby));
    }
    if (choice == 2) {
        var name_1 = add.question('Nhập id công chúa cần tìm: ');
        ql.findPrincess(name_1);
    }
    if (choice == 4) {
        console.log('Nhập thông tin mới cho công chúa: ');
        var idBae = add.question('Nhập mã công chúa: ');
        var nameBae = add.question('Nhập tên công chúa: ');
        var zodiacBae = add.question('Nhập cung hoàng đạo của công chúa: ');
        var homeTown = add.question('Nhập quê công chúa: ');
        var yearOfBirth = add.question('Nhập năm sinh công chúa: ');
        var hobby = add.question('Nhập sở thích của công chúa: ');
        ql.edit(idBae, new honey_1.princess(idBae, nameBae, zodiacBae, homeTown, yearOfBirth, hobby));
    }
    if (choice == 5) {
        var idPrincess = add.question('Nhập mã công chúa bị đá: ');
        ql.delete(idPrincess);
    }
    if (choice == 0) {
        break;
    }
}
