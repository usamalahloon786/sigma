let admin;
let name;
name="john";
admin=name;
alert(admin);


let name2 = "Ilya";

alert( `hello ${1}` ); // ?

alert( `hello ${"name2"}` ); // ?

alert( `hello ${name2}` ); // ?


// prompt
let age = prompt('How old are you?');

alert(`You are ${age} years old!`); 

// confirm
let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true if OK is pressed

// task related promp,alert,confirm

let isJutt= prompt("What is your name","");
alert(isJutt);

// unary negation was applied
let x = 1;

x = -x;
alert( x ); // -1, unary negation was applied



// Exponentiation **
// The exponentiation operator a ** b raises a to the power of b.
// In school maths, we write that as ab.
// For instance:
// alert( 2 ** 2 ); // 2² = 4
// alert( 2 ** 3 ); // 2³ = 8
// alert( 2 ** 4 ); // 2⁴ = 16



// Remainder
// The remainder operator %, despite its appearance, is not related to percents.
// The result of a % b is the remainder of the integer division of a by b.
// For instance:
// alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
// alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
// alert( 8 % 4 ); // 0, the remainder of 8 divided by 4

// Task 1


let digit=prompt("Choose One digit?");
if (digit>0){
    alert(1)
}
else if(digit<0){
alert(-1)
}
else 
{alert (0) ;
}


// Task2
let a=3;
let b=1;
let result = (a+b<4 ) ? "Below" : "Over";
// Rewrite 'if' into '?'
// importance: 5
// Rewrite this if using the conditional operator '?':

// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }



// EVEN ODD Task

let marks=prompt("tell me about your mask?");
if (marks>90){
alert("the grade is A")
}
else if(marks>=80 && marks<90){
    alert("the grade is B")
}
else if(marks>=70 && marks<80){
    alert("the grade is C")
}
else if(marks>=60 && marks<70){
    alert("the grade is D")
}
else{
alert("Fail")
}




// Marks >= 90: "A"
// Marks >= 80 and < 90: "B"
// Marks >= 70 and < 80: "C"
// Marks >= 60 and < 70: "D"
// Marks < 60: "F"



//x 25  +++++++++++++++ y 49

for ( var i=0; i < 100; i++ ) {
    if ( i >= 21 && i <= 30 ) {
        console.log(i);
    } else if ( i >= 61 && i <= 70 ) {
        console.log(i);
    }
}

// while loop

let m=1;
while(m<=10){
    document.write(m + "03041666128 <br>")
    m++;

}
    //do while loop


    let u=1;
    do {
        document.write( u + ") Hello Usama<br>")
        u++;
        }
        while(u <= 10);
       


        // foreach


        let f=["JUTT","ARAIN","SHEIKH","ANSARI"];
        f.forEach(function(value,index){
            document.write( index + "   : " + value +"<br>")
        });
