//create a string for step 2 using const to house the message
const message="You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

/* create three variables with different operators to generate the lock combination 10-40-39
1st var = 10 using subtraction (-)
2nd var = 40 using multiplication (*)
3rd var = 39 using addition (+)
*/
const combo1= 16 - 6;
const combo2= 10 * 4;
const combo3= 27 + 12;

//display the message + the vault codes (variables combo[1/2/3] in a dialog box using alert() command with + concatenation
alert(message + " " + combo1 + " - " + combo2 + " - " + combo3);