let numValue: number;
let stringValue: string;
let boolenValue: boolean;
let undefinedValue: undefined;
let nullValue: null;
let objValue: object;
let symbolValue: symbol;
let anyValue: any;


numValue = 3;
stringValue = "hello";
stringValue = `test${numValue}`;
objValue = new String(33); // 객체로 반환되는거 

symbolValue = Symbol();


let namelist: string[];
namelist = ["1", "3"];

let namelist2: number[];
namelist2 = [1, 2];

let namelist3: any[];
namelist3 = ["1", 3];

let user1: { name: string, score: number } //inline
user1 = {
    name: 'jay',
    score: 30
}