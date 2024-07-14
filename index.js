

let numArray = []
let numCounter = 0;
let question1 = prompt('element of array'); numArray.push(question1);
let question2 = prompt('element of array'); numArray.push(question2);
let question3 = prompt('element of array'); numArray.push(question3);
let question4 = prompt('element of array'); numArray.push(question4);
let question5 = prompt('element of array'); numArray.push(question5);
let question6 = prompt('element of array'); numArray.push(question6);
console.log(numArray);
numArray.forEach(element => {
    if (element.includes('1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' || '0')) {
        Number(element)
        numCounter++;
        if (numCounter > 5) {
            console.log('There more then 5 numbers');
        }
    }
    else {
        alert('error')
    }
});