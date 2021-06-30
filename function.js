/* Is Div By Five
 Write a method is_div_by_5(number) 
 that takes in a number and returns the boolean true if the given number is divisible by 5, false otherwise */

/*jshint esversion: 6 */

function divisible (i) {

if (i%5 === 0) {
    console.log ("True");
} else {
    console.log ("False");
}
}

divisible(5);
divisible(2);

 /* Either Only
Write a method either_only(number) that takes in a number and returns
 true if the number is divisible by either 3 or 5, but not both. 
 The method should return false otherwise. */

 function either_only (x) {
if (x%3 === 0) {
    console.log ("True3");
} else if (x%5 === 0) {
    console.log ("True5");
} else {
    console.log("False");
}
}
either_only(5);
either_only(3);
either_only(22);


 /* Larger Number
Write a method larger_number(num1, num2) that
 takes in two numbers and returns the larger of the two numbers. */

 function larger_number(y, z){
if (y > z) {
    console.log (y);
} else if  ( z > y){
    console.log (z);
} else {
    console.log (y);
}

 }
 larger_number (45,50);
 larger_number (18,11);


 /* Word Check
Write a method word_check(word) that
 takes in a word and returns a string. 
 The method should return the string "long" if the word is longer than 6 characters,
"short" if it is less than 6 characters, and "medium" if it is exactly 6 characters long. */

function word_check(word) {
    if (word.length > 6) {
        console.log ("Long");
    }  else if  (word.length < 6){
        console.log ("Short");
    }else if  (word.length === 6){
        console.log ("Medium");
    }
    else {
        console.log (word);
    }
}
word_check ("Santisha");
word_check ("Santi");
word_check ("Santis");

 /* Count E
Write a method count_e(word) 
that takes in a string word and returns the number of e's in the word */

function count_e(str, letter) 
{
    let letterCount = 0;
    for (let position = 0; position < str.length; position++)
    {
        if (str.charAt(position) == letter)
        {
        letterCount += 1;
        }
    }
    return letterCount; 
}
console.log(count_e('letterhead', 'e'));