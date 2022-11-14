/* 1. Da se napise programa koja sto dve nizi so ista dolzina kje gi spoi vo edna niza. Elementite od prvata niza treba da se zacuvaat na parnite pozicii od rezultantnata niza, a elementite od vtorata niza na neparnite pozicii od rezultantnata niza*/
const letters = ['a', 'b', 'c', 'd']
const numbers = ['1', '2', '3', '4']

const result = []
numbers.forEach((e,i) => result.push(e, letters[i]))

console.log(result)

//2. Od proizvolna lista so broevi da se ispecati koj e najmaliot, a koj e najgolemiot broj
const number =[2, 7, 8, 9, -15, 1, 36]

var largest = number[0];
var smallest = number[0];

for (var i = 0; i < number.length; i++) {

  if (number[i] > largest) {
    largest = number[i];
  } else if (number[i] < smallest) {
    smallest = number[i];
  } 
}
  console.log(largest);
  console.log(smallest);

//3. Od proizvolna lista so broevi da se pronajde dali ima duplikati od bilo koj element.

const num = [9, 15, 3, 15, 4, 25, 15, 6];

const duplicates = num.filter((item, index) => index !== num.indexOf(item));

console.log(duplicates);


//4. Od proizvolna niza so bukvi da se formira zbor, na toj nacin sto sekoja bukva kje se spoi so narednata za da formira string.

const Arr = [ 'h', 'e', 'l', 'l', 'o'];
const output = Arr.join('');
console.log(output);


//5. Da se napise programa koja sto kje proveri dali vo nekoja proizvolna niza ima pod-niza, i dokolku ima site elementi od podnizata da se dodadat na krajot od originalnata niza.

