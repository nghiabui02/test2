"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.princessService = void 0;
var princessService = /** @class */ (function () {
    function princessService() {
        this.list = [];
    }
    princessService.prototype.add = function (idBae) {
        this.list.push(idBae);
    };
    princessService.prototype.findPrincess = function (nameBae) {
        console.log('Cong chua co ten can tim la: ');
        var princessFind = [];
        this.list.map(function (item) {
            if (item.nameBae === nameBae) {
                princessFind.push(item);
            }
        });
        if (princessFind.length === 0) {
            console.log('Khong co ai ten ' + nameBae);
        }
        else {
            console.table(princessFind);
        }
    };
    princessService.prototype.edit = function (idPrincess, editPrincess) {
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].idBae == idPrincess) {
                this.list[i] = editPrincess;
            }
        }
    };
    princessService.prototype.delete = function (idPrincess) {
        this.list = this.list.filter(function (item) { return item.idBae !== idPrincess; });
    };
    princessService.prototype.show = function () {
        console.table(this.list);
    };
    return princessService;
}());
exports.princessService = princessService;
