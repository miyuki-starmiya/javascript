
type int = number;
type intArray = Array<int>;
interface Book {
  id: int;
  title: string;
}

let num: int;
let numArray: intArray;
let oregairu: Book;

num = 3;
numArray = [1,2,3];
oregairu = {
  id: 1,
  title: 'yahari oreno seisyun love comedy ha machigatteiru.',
}

console.log(num);
console.log(numArray);
console.log(oregairu);

