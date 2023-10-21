export default class Address {
    constructor(private _streetNumber: number, private _streetName: string, private _apt: number, private _city: string, private _state: string, private _zip: number){
        this.streetNumber = _streetNumber;
        this.streetName = _streetName;
        this.apt = _apt;
        this.city = _city;
        this.state = _state;
        this.zip = _zip;
    }
    public get zip(): number {
        return this._zip;
    }
    public set zip(value: number) {
        this._zip = value;
    }
    public get state(): string {
        return this._state;
    }
    public set state(value: string) {
        this._state = value;
    }
    public get city(): string {
        return this._city;
    }
    public set city(value: string) {
        this._city = value;
    }
    public get apt(): number {
        return this._apt;
    }
    public set apt(value: number) {
        this._apt = value;
    }
    public get streetName(): string {
        return this._streetName;
    }
    public set streetName(value: string) {
        this._streetName = value;
    }
    public get streetNumber(): number {
        return this._streetNumber;
    }
    public set streetNumber(value: number) {
        this._streetNumber = value;
    }
    toString(){
        return "streetNumber: "+this.streetNumber+" streetName: "+this.streetName+" apt: "+this.apt+" city: "+this.city+" state: "+this.state+" zip: "+this.zip;
    }
    
}