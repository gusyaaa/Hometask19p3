let threenumbers = prompt("Enter three different two-digit numbers and seperate them with a comma.")
let splitnumbers = threenumbers.split(",");
if(threenumbers.includes(",")){

}else{
    console.error("Please seperate the numbers with a comma.")
}

let a = splitnumbers[0];
let b = splitnumbers[1];
let c = splitnumbers[2];

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.error("Your input contains non-numeric values.");
}
if (a.length !== 2 || b.length !== 2 || c.length !== 2) {
    console.error("Please enter three two-digit numbers.");
}


if(a === b || b === c || c === a){
    console.error("Two or three numbers are the same.")
}
if (a >= b && a >= c) {
    maxNumber = a;
} else if (b >= a && b >= c) {
    maxNumber = b;
} else {
    maxNumber = c;
}
if (a <= b && a <= c) {
    minNumber = a;
} else if (b <= a && b <= c) {
    minNumber = b;
} else {
    minNumber = c;
}
if (a !== minNumber && a !== maxNumber) {
    medianNumber = a;
    console.log("The middle number is " + medianNumber);
} else if (b !== minNumber && b !== maxNumber) {
    medianNumber = b;
    console.log("The middle number is " + medianNumber);
} else {
    medianNumber = c;
    console.log("The middle number is " + medianNumber);
}