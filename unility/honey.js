"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.princess = void 0;
var princess = /** @class */ (function () {
    function princess(idBae, nameBae, zodiacBae, homeTown, yearOfBirth, hobby) {
        this._idBae = idBae;
        this._nameBae = nameBae;
        this._zodiacBae = zodiacBae;
        this._homeTown = homeTown;
        this._yearOfBirth = yearOfBirth;
        this._hobby = hobby;
    }
    Object.defineProperty(princess.prototype, "idBae", {
        get: function () {
            return this._idBae;
        },
        set: function (value) {
            this._idBae = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(princess.prototype, "nameBae", {
        get: function () {
            return this._nameBae;
        },
        set: function (value) {
            this._nameBae = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(princess.prototype, "zodiacBae", {
        get: function () {
            return this._zodiacBae;
        },
        set: function (value) {
            this._zodiacBae = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(princess.prototype, "homeTown", {
        get: function () {
            return this._homeTown;
        },
        set: function (value) {
            this._homeTown = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(princess.prototype, "yearOfBirth", {
        get: function () {
            return this._yearOfBirth;
        },
        set: function (value) {
            this._yearOfBirth = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(princess.prototype, "hobby", {
        get: function () {
            return this._hobby;
        },
        set: function (value) {
            this._hobby = value;
        },
        enumerable: false,
        configurable: true
    });
    return princess;
}());
exports.princess = princess;
