
type HumanProps = {
  name: string;
  age: number;
}

class Human {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const hitoe = new Human('hitoe', 22);
hitoe.greet();

try {
  const a = [];
  console.log(a[0]);
} catch(e) {
  console.log(e);
} finally {
  console.log('Anyway, have fun!');
}

