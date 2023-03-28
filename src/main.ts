import './style.css'

let stringArray = ["Hello", "World"];
let numberArray = [1, 2, 3];
let guitars = ["Fender", "Gibson", 5124];
let mixedArray = ["Hello", 1, 2, 3, true];

stringArray[0] = "Hi";
stringArray.push("hey");

guitars[0] = 2342234;
guitars.unshift(234234);
let bands: string[] = [];
bands.push("Metallica");

// Tuple
let myTuple: [string, number, boolean] = ["Hello", 1, true];

console.log(myTuple);

let mixed = ["Hello", 1, 2, 3, true];

// object
let myObject: object;
myObject = [];
interface Gitarist {
  name?: string;
  age: number;
  band?: string;
  albums: (string | number)[];
}

let evh: Gitarist = {
  name: "Eddie Van Halen",
  age: 65,
  band: "Van Halen",
  albums: [
    "Van Halen",
    "1984",
    "5150",
    "For Unlawful Carnal Knowledge",
    "Balance",
    "The Best of Both Worlds",
    "A Different Kind of Truth",
    2012,
  ],
};

let jp: Gitarist = {
  //   name: "Jimi Hendrix",
  age: 27,
  band: "The Jimi Hendrix Experience",
  albums: [
    "Are You Experienced",
    "Axis: Bold as Love",
    "Electric Ladyland",
    "Band of Gypsys",
    "The Cry of Love",
    "Smash Hits",
    "South Saturn Delta",
  ],
};

let greetGitarist = (gitarist: Gitarist) => {
  return gitarist.name ? `Hello ${gitarist.name}!` : "Hello";
};

console.log(greetGitarist(evh));

console.log(greetGitarist(jp));


enum Grade {
    A = 1,
    B,
    C,
    D,
    E,
    F
}

console.log(Grade.A); // 0












