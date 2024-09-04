// STRING METHODS

// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
// var name1 = prompt("Enter your first name :");
// var name2 = prompt("Enter the second name:");
// var fullName= name1 + name2;
// document.write("First name:" + name1 + "</br>" + "Last name:" + name2 + "</br> " );
// document.write("Full name: " + fullName + "</br>");


// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser


// var mobileModel = prompt("Enter the mobile model");
// var length = mobileModel.length;
// document.write("My favourite phone is " + mobileModel + "<br>");
// document.write("Length of string is " + length);

// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser

// var word = "Pakistani";
// var index = word.indexOf('n'); // indexOf == find index of letter
// document.write("Word :" + word + "<br>");
// document.write("Index of 'n'  in Pakistani " + " is " + index  + "<br>");


// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser
// var word1 = "Hello World"; 
// var length = word1.lastIndexOf('l');
// document.write("The length of last index of letter 'l' is  "+ length);


// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// var word1 = "Pakistani"; 
// var length = word1[3];
// document.write("The character at third index is "+ length);


// 6. Repeat Q1 using string concat() method.
// var name1 = prompt("Enter your first name :");
// var name2 = prompt("Enter the second name:");
// var fullName = name1.concat(name2);
// document.write("First name:" + name1 + "</br>" + "Last name:" + name2 + "</br> " );
// document.write("Full name: " + fullName + "</br>");


// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser
// var name2= "Hyderabad";
// document.write("The original word is " + name2 + "</br>");
// var replaceName = name2.replace("Hyder" , "Islam");
// document.write("The replaced word is " + replaceName); 



// 8. Write a program to replace all occurrences of “and” in the string with “&” and 
//    display the result in your browser. var message = “Ali and Sami are best friends.
//    They play cricket and football together.”;

// var message = "Ali and Sami are best friends.They play cricket and football together.";
// var replace1 = message.replace(/and/g  , "& ");
// document.write("Original message: "+ message  + "</br>")
// document.write("Replaced message :" + replace1 + "</br>");

// 9. Write a program that converts a string “472” to a number 472.
//       Display the values & types in your browser.


// var number = "472";
// var type1 = typeof(number);

// var string = parseInt(number);
// var type2 = typeof(string);
// document.write("String is " + number + "</br>" + "Type is " + type1 + "</br>");
// document.write("Number is " + string + "</br>" + "Type is " + type2 + "</br>");




// 10. Write a program that takes user input. Convert and show the input in capital letters.


// var string1 = prompt("Enter the string :");
// var convert  = string1.toUpperCase();
// document.write("Given input is " + string1 + "</br>");
// document.write("Upper case input is " + convert + "</br>");



// 11. Write a program that takes user input. Convert and show the input in title case.

// var userInput = prompt("Enter the word");
// var title1 = userInput.title;
// document.write(title1);




// 12. Write a program that converts the variable num to string. var num = 35.36 ; 
//    Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// var string = num.toString();
// var displayData = string.replace("." , "");
// document.write("Original number is " + num + "</br>");
// document.write("The float converted in int is " + string + "</br>");
// document.write("The number after removal of period is " + displayData);


// 13. Write a program to take user input and store username in a variable. 
//    If the username contains any special symbol among [@ . , !],
//    prompt the user to enter a valid username. For character codes of [@ .
// var symbols = ["@", " . " ," !"];
// var userName = prompt("Enter a username :");
// var isValid = true;
// for (var i=0;i<symbols.length;i++){
//     if(userName.includes(symbols[i]) ){
//        isValid = false;
//        break;
//     }
// }
// if(!isValid){
//     alert("Please enter a valid username");
// }else{
//     alert("Username is valid :" + userName ); 
// }


// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
    //  Write a program to enable “search by user input” in an array. 
    // After searching, prompt the user whether the given item is found in the list or not. 
    // Note: Perform case insensitive search.
    //  Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter the keyword ");
// // userInput = userInput.toLowerCase();
// var isValid = false;
// for (var i=0 ;i< A.length;i++){
//     if(A[i].toLowerCase() === userInput){
//         isValid = false;
//         break;
//     }
// }
// if (!isValid){
//     alert("Perform case insensitive search.");
// }else{
//     alert("here is your search " + userInput );
// }


// 15. Write a program to take password as an input from user. 
// The password must qualify these requirements:
//  a. It should contain alphabets and numbers 
//  b. It should not start with a number 
//  c. It must at least 6 characters long 
//     If the password does not meet above requirements, prompt the user to enter a valid password. 
// For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

// var password = prompt("Enter the password");
// var alphaNumeric = /
// for (var i=0 ;i<br password.length;i++){
//     if(password)
// }

// 16. Write a program to convert the following string to an array using string split method.
//  var university = “University of Karachi”;
//  Display the elements of array in your browser.
// var university = "University of Karachi";
// for (var i=0 ;i < university.length ;i++){
    // document.write(university[i] + " </br> ");
// }
// 
// 17. Write a program to display the last character of a user input.
// var name1 = prompt("Enter the name:");
// document.write("The original word is " + name1 + "</br>");
// var word = name1.charAt(name1.length-1 );
// document.write("The last word of an array is " + word + "</br>");

// 18. You have a string “The quick brown fox jumps over the lazy dog”. 
//    Write a program to count number of occurrences of word “the” in given string.




// var string1 = "The quick brown fox jumps over the lazy dog";
// var word ="the";
// var count1 = string1.toLowerCase().split(" ");
// var count = 0;
// for (var i=0;i<string1.length;i++){
//     if(count1[i] === word){
//         count++;
//     }
// }
// document.write("the word 'the' appears in the  " + count  + " times in the string" );v




