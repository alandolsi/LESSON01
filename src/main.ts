import './style.css';

type One = string;
type Two = string | number;
type Three = 'hello';

let a: One = 'hello';
console.log(a);
let b = a as Two;
let c = a as Three;

console.log(c);

let d = <One>'word';
let e = <string | number>'word';

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
  if (c === 'add') {
    return a + b;
  }
  return `${a} ${b}`;
};

let myValue: string = addOrConcat(1, 2, 'concat') as string;

// Be carefull because typescript sees no problem with this but a string is returned
let myValue2: number = addOrConcat(1, 2, 'concat') as number;

// 10 as string;
10 as unknown as string;

// the DOM
const img = document.querySelector('img')!;
// no null assertion
const myImage = document.getElementById('myImage')! as HTMLImageElement;

const nextImage = <HTMLImageElement>document.getElementById('nextImage');

// img.src;
// myImage.src;

// let year: HTMLElement | null;
// year = document.getElementById('year');
// let thisYear: string = new Date().getFullYear().toString();
// if (year) {
//   year.setAttribute('datetime', thisYear);
//   year.textContent = thisYear;
// }

const year = document.getElementById('year') as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString();
year.setAttribute('datetime', thisYear);
year.textContent = thisYear;
