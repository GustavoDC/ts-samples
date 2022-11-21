const numbers: number[] = [20, 100, 200, 400]
console.log(numbers);

const doubles: number[] = numbers.map( n => n * 2)
console.log(doubles);

const filtered: number[] = doubles.filter( n => n <= 400);
console.log(filtered);

const isLessHundred: boolean = numbers.some(n => n < 100);
console.log(isLessHundred);

const allHigherTen: boolean = numbers.every(n => n > 10);
console.log(allHigherTen);

const spliced: number[] = doubles.splice(1, 2);
console.log(spliced);



const word: string = "mesopotamia";
const sortedWord: string = word.split('').sort().join('');
console.log(sortedWord);

const oSplitted: string[] = word.split('o');
console.log(oSplitted);

const wordPart: string = word.slice(2, word.length);
console.log(wordPart);

const index: number = word.indexOf('pot');
console.log(index);