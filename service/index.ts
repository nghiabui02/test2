import {princess} from "../unility/honey";
import {princessService} from "./honeyService";
import {HoaDon} from "../../quanlykhachsan/HoaDon";
let add = require('readline-sync');
let choice = -1;
let ql = new princessService()
while (true) {
    console.log('Nhập vào lựa chọn:' +
        '\n 1. Hiển thị' +
        '\n 2. Tìm kiếm' +
        '\n 3. Thêm công chúa' +
        '\n 4 Sửa thông tin công chúa' +
        '\n 5 Xoá một công chúa' +
        '\n 0. Thoat')
    choice = add.question('Chọn: ');
    if (choice == 1) {
        ql.show()
    }
    if (choice == 3) {
            console.log('Nhập thêm một công chúa: ');
            let idBae = add.question('Nhập mã công chúa: ');
            let nameBae = add.question('Nhập tên công chúa: ');
            let zodiacBae = add.question('Nhập cung hoàng đạo của công chúa: ');
            let homeTown = add.question('Nhập quê công chúa: ');
            let yearOfBirth = add.question('Nhập năm sinh công chúa: ');
            let hobby = add.question('Nhập sở thích của công chúa: ');
            ql.add(new princess(idBae, nameBae, zodiacBae, homeTown, yearOfBirth, hobby));
        }
    if(choice == 2) {
        let name = add.question('Nhập tên công chúa cần tìm: ')
        ql.findPrincess(name)
    }
    if (choice == 4) {
        console.log('Nhập thông tin mới cho công chúa: ');
        let idBae = add.question('Nhập mã công chúa: ');
        let nameBae = add.question('Nhập tên công chúa: ');
        let zodiacBae = add.question('Nhập cung hoàng đạo của công chúa: ');
        let homeTown = add.question('Nhập quê công chúa: ');
        let yearOfBirth = add.question('Nhập năm sinh công chúa: ');
        let hobby = add.question('Nhập sở thích của công chúa: ');
        ql.edit(idBae, new princess(idBae, nameBae, zodiacBae, homeTown, yearOfBirth,hobby));
    }
    if (choice == 5) {
        let idPrincess = add.question('Nhập mã công chúa bị đá: ');
        ql.delete(idPrincess)
    }
    if(choice == 0) {
        break
    }
}
