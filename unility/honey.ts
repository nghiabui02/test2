export class princess{
    private _idBae: string;
    private _nameBae: string;
    private _zodiacBae: string;
    private _homeTown: string;
    private _yearOfBirth: number;
    private _hobby: string;
    constructor(idBae: string, nameBae: string, zodiacBae: string, homeTown: string, yearOfBirth: number, hobby: string) {
        this._idBae = idBae;
        this._nameBae = nameBae;
        this._zodiacBae = zodiacBae;
        this._homeTown = homeTown;
        this._yearOfBirth = yearOfBirth;
        this._hobby = hobby;
    }
    get idBae(): string {
        return this._idBae;
    }

    set idBae(value: string) {
        this._idBae = value;
    }

    get nameBae(): string {
        return this._nameBae;
    }

    set nameBae(value: string) {
        this._nameBae = value;
    }

    get zodiacBae(): string {
        return this._zodiacBae;
    }

    set zodiacBae(value: string) {
        this._zodiacBae = value;
    }

    get homeTown(): string {
        return this._homeTown;
    }

    set homeTown(value: string) {
        this._homeTown = value;
    }

    get yearOfBirth(): number {
        return this._yearOfBirth;
    }

    set yearOfBirth(value: number) {
        this._yearOfBirth = value;
    }

    get hobby(): string {
        return this._hobby;
    }

    set hobby(value: string) {
        this._hobby = value;
    }
}