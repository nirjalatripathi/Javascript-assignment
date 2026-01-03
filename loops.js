//Q.1.
for (var i = 1; i <= 10; i++) {
    console.log(i); 
}

//Q.2.
let j = 2;
while(j <= 20){
    console.log(j);
    j += 2;
}


//Q.3.
var sum = 0; 
for (var i = 1; i <= 100; i++) {
    sum = sum + i; 
}
console.log("The sum of numbers from 1 to 100 is: " + sum);

//Q.4.
for(let i=1;i<=10;i++){
    console.log("5 x "+i+" = "+ 5*i);
}

//Q.5.
let numbers = [2, 4, 8, 13, 50];
let largest = numbers[0];
for(let i=1; i<numbers.length; i++){
    if(numbers[i] > largest){
        largest = numbers[i];
    }
}
console.log("Largest number is", largest);
