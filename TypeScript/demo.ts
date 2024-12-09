console.log("welcome to typescript");
//1.string data type:
let fname:string;
fname="selva";
let lname:string;
lname="balaji";
console.log(`firstname:${fname} lastname:${lname}`);
//2.number
let num1:number=100, num2:number=0.5,num3:number=1234345;
console.log(num1,num2,num3);
//3.boolean
let cond1:boolean=true,cond2:boolean=false;
console.log(cond1,cond2);
//4.array
let course:string[]=["html","css","js"];
let courses1:Array<string>=["html","css","js"];

let pin:number[]=[234234,233434,2342345];
let pin1:Array<number>=[234234,233434,2342345];

//5.tupple:
let product:[number,string,boolean]=[100,"mango",true];
//6.enum:
enum days{sun=502,mon,tue,wed,thur,fri,sat}
let data1=days.sun;