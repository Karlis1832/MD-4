console.log('Ready for coding');

const add = (a: number, b:number)  => a + b
   
  console.log(1) 
  console.log(add(1, 2),
  console.log(add(1, 10),
  console.log(add(99, 1),
  )))

  const getType =(value: any) => typeof value
    
    console.log(2) 
    console.log(getType(1));  
    console.log(getType(false));  
    console.log(getType({}));  
    console.log(getType(null));  
    console.log(getType('string'));  
    console.log(getType(['array']));

const sameSame = (a:any, b:any) => a===b 

console.log (3)
console.log(sameSame(2, 3));
console.log(sameSame(3, 3)); 
console.log(sameSame(1, '1')); 
console.log(sameSame('10', '10')); 

const bthChar =(a: string, b:number) => a[b]

console.log(4)
console.log(bthChar('abcd',1))
console.log(bthChar('zyxbwpl',5))
console.log(bthChar('gfedcba',3))

const removeFirst3 = (a: string) => a.slice(3)

console.log(5)
console.log(removeFirst3('abcdefg'))
console.log(removeFirst3('1234'))
console.log(removeFirst3('fgedcba'))

const extractLast3Chars = (a: string) => a.slice(-3)

console.log(6)
console.log(extractLast3Chars('abcdefg'))
console.log(extractLast3Chars('1234'))
console.log(extractLast3Chars('fgedcba'))

const getFirst3Chars = (a: string) => a.slice(0, 3)


console.log(7)
console.log(getFirst3Chars('abcdefg'))
console.log(getFirst3Chars('1234'))
console.log(getFirst3Chars('fgedcba'))

const getFirstHalf = (a: string ) => a.slice(0, a.length / 2)

console.log(8)
console.log(getFirstHalf('abcdefgh'))
console.log(getFirstHalf('1234'))
console.log(getFirstHalf('gedcba'))

const removeLast3 = (a: string) => a.slice(0, a.length -3)

console.log(9)
console.log(removeLast3('abcdefg'))
console.log(removeLast3('1234'))
console.log(removeLast3('fgedcba'))

const getPercentage = (a: number, b:number) => (a * b) / 100

console.log(10)
console.log(getPercentage(100, 50))
console.log(getPercentage(10, 1))
console.log(getPercentage(500, 25))

const sixValueEquation = (a: number, b:number, c:number, d:number, e:number, f:number) =>
Math.pow((( a+ b - c) * d) / e, f) 

console.log(11)
console.log(sixValueEquation(6,5,4,3,2,1))
console.log(sixValueEquation(6,2,1,4,2,3))
console.log(sixValueEquation(2,3,6,4,2,3))

const checkEven = (a: number) => a % 2 === 0

console.log(12)
console.log(checkEven(10))
console.log(checkEven(-4))
console.log(checkEven(5))
console.log(checkEven(-111))

const howManyTimesAinB = (a: string, b: string) => b.split(a).length - 1

console.log(13)
console.log(howManyTimesAinB('m', 'how many times does the character occur in this sentence?'))
console.log(howManyTimesAinB('h', 'how many times does the character occur in this sentence?'))
console.log(howManyTimesAinB('?', 'how many times does the character occur in this sentence?'))
console.log(howManyTimesAinB('z', 'how many times does the character occur in this sentence?'))

const checkWholeNumber = (a:number) => Number.isInteger(a)

console.log(14)
console.log(checkWholeNumber(4))
console.log(checkWholeNumber(1.123))
console.log(checkWholeNumber(1048))
console.log(checkWholeNumber(10.48))

const checkNumberDoMath = (a:number, b:number) => (a < b) ? (a / b) : (a * b)

console.log(15)
console.log(checkNumberDoMath(10, 100))
console.log(checkNumberDoMath(90, 45))
console.log(checkNumberDoMath(8, 20))
console.log(checkNumberDoMath(2, 0.5))

const stringConcatenation = (a:number, b:number) => (a < b) ? (a / b) : (a * b)

console.log(15)
console.log(checkNumberDoMath(10, 100))
console.log(checkNumberDoMath(90, 45))
console.log(checkNumberDoMath(8, 20))
console.log(checkNumberDoMath(2, 0.5))

const twoStringConcatenationEndBeginning = (a:string, b:string) => (a.includes(b)) ? (b + a) : (a + b);

console.log(16)
console.log(twoStringConcatenationEndBeginning("cheese", "cake"))
console.log(twoStringConcatenationEndBeginning("lips", "s"))
console.log(twoStringConcatenationEndBeginning("Java", "script"))
console.log(twoStringConcatenationEndBeginning(" think, therefore I am", "I"))

const roundNumber = (a:number) => Math.round(a * 100) / 100

console.log(17)
console.log(roundNumber(2.12397))
console.log(roundNumber(3.136))
console.log(roundNumber(1.12397))
console.log(roundNumber(26.1379))












   














 


