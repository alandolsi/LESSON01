import './style.css';

class Coder {
  secondLang!: string;
  constructor(public readonly name: string, public music: string, private age: number, protected lang: string = 'JavaScript') {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  /**
   * getAge
   */
  public getAge() {
    return `My age is ${this.age}`;
  }
}

const coder = new Coder('John', 'Rock', 25);

console.log(coder.getAge());
console.log('#'.repeat(50));
class webdev extends Coder {
  constructor(public computer: string, name: string, music: string, age: number, lang: string) {
    super(name, music, age, lang);
    this.computer = computer;
  }

  public getLang = () => {
    return `My language is ${this.lang}`;
  };
}

const Sara = new webdev('Mac', 'Sara', 'Pop', 22, 'TypeScript');

console.log(Sara.getLang());

console.log('#'.repeat(50));

interface Musician {
  name: string;
  instrument: string;
  play: (action: string) => string;
}

class Guitarist implements Musician {
  constructor(public name: string, public instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play = (action: string) => {
    return `${this.name} is ${action} with ${this.instrument}`;
  };
}

const John = new Guitarist('John', 'Guitar');

console.log(John.play('playing'));

console.log('#'.repeat(50));
class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
    this.id = ++Peeps.count;
  }
}

const Steve = new Peeps('Steve', 30);
const Sara2 = new Peeps('Sara2', 22);
const John2 = new Peeps('John2', 25);

console.log(Peeps.count);
console.log(John2.id);
console.log(Sara2.id);
console.log(Steve.id);

console.log('#'.repeat(50));

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(data: string[]) {
    if (Array.isArray(data) && data.every((item) => typeof item === 'string')) {
      this.dataState = data;
    } else {
      throw new Error('Invalid data');
    }
  }
}

const bands = new Bands();

bands.data = ['Metallica', 'AC/DC', 'Guns N Roses'];

console.log(bands.data);

bands.data = [...bands.data, 'ZZ Top'];

console.log(bands.data);

bands.data = ['TT Bottom'];

console.log(bands.data);



