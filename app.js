// >>>----------------- Chapter # 1 -----------------<<<

// // task 1
// alert("Hi there, welcome to our site!");

// // task 2
// alert("Error! Please Enter a valid password.");

// // task 3
// alert("Welcome to JS Land... \nHappy Coding");

// // task 4
// alert("Welcome to JS Land...");
// alert("Happy Coding!");

// task 5
// alert("Hello, i can run JS through my web browser's console");





// >>>----------------- Chapter # 2 -----------------<<<

// // task 1
// var username;

// // task 2
// var myName;
// myName = "Muhammad Yahya Kashif";

// // task 3
// var message;
// message = "Hello World";
// alert(message);

// // task 4
// var stdName = "Johne Doe";
// var stdAge = "15 years old";
// var stdCert = "Certified Mobile Application Development";
// alert(stdName);
// alert(stdAge);
// alert(stdCert);

// // task 5
// var data = "PIZZA";
// alert(data+"\n"+data.slice(0, -1)+"\n"+data.slice(0, -2)+"\n"+data.slice(0, -3)+"\n"+data.slice(0, -4))

// // task 6
// var email = "yahyakashif23@gmail.com";
// alert("My email address is "+email)

// // task 7
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book "+book)

// // task 8
// document.write("Yah! I can write HTML content through JavaScript")

// // task 9
// var divider= "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(divider)
// document.write(divider)





// >>>----------------- Chapter # 3 -----------------<<<

// // task 1
// var age= "23";
// alert("I am "+age+" years old")

// // task 2
// var x= "13";
// alert("You have visited this site "+x+" times")

// // task 3
// var birthYear= 1996;
// document.write("My birth year is "+birthYear+"<br>Data type of my declared variable is number")

// // task 4
// var visName="<b>John Doe</b>";
// var proTitle="<b>T-shirt</b>";
// var proQuan="<b>5</b>";
// document.write(visName+" ordered "+proQuan+" "+proTitle+"(s) on XYZ Clothing store")





// >>>----------------- Chapter # 4 -----------------<<<

// // task 1
// var vari1,vari3,vari3;

// // task 2
// //Legal variables
// var legal, legal1, legal_1, legal$1, legalNumber;

// //illegal variables
// var 2var, 2 vari, il-legal, 5-illegal, 005;

// // task 3
// document.write("<h2>Rules for naming JS variables</h2><br>"+"Variable names can only contain letters, numbers, $ and _. For example $my_1stVariable"+"<br>Variables must begin with a Letter, $ or _. For example $name, _name or name"+"<br>Variable names are case sensitive"+"<br>Variable names should not be JS keywords")





// >>>----------------- Chapter # 5 -----------------<<<

// // task 1
// var val1=prompt("Enter 1st value");
// var val2=prompt("Enter 2nd value");
// var val3=(+val1)+(+val2);
// document.write("Sum of "+val1+" and "+val2+" is "+val3)

// // task 2
// //Subtract
// var val1=prompt("Enter 1st value");
// var val2=prompt("Enter 2nd value");
// var val3=(val1)-(val2);
// document.write("Subtraction of "+val1+" from "+val2+" is "+val3)

// //Multiply
// var val1=prompt("Enter 1st value");
// var val2=prompt("Enter 2nd value");
// var val3=(val1)*(val2);
// document.write("Mutiplication of "+val1+" with "+val2+" is "+val3)

// //Divide
// var val1=prompt("Enter 1st value");
// var val2=prompt("Enter 2nd value");
// var val3=(val1)/(val2);
// document.write("Division of "+val1+" by "+val2+" is "+val3)

// //Modulus
// var val1=prompt("Enter 1st value");
// var val2=prompt("Enter 2nd value");
// var val3=(val1)%(val2);
// document.write("Modulus of "+val1+" by "+val2+" is "+val3)


// // task 3
// var mathExp;
// document.write("Value after variable declaration is: "+mathExp)
// mathExp = 5;
// document.write("<br>Initial value: "+mathExp)
// mathExp++;
// document.write("<br>Value after increment is: "+ mathExp)
// mathExp=mathExp+7;
// document.write("<br>Value after addition is: "+ mathExp)
// mathExp--;
// document.write("<br>Value after decrement is: "+ mathExp)
// mathExp=mathExp%3;
// document.write("<br>The remainder is : "+ mathExp)


// // task 4
// var ticketPrice= 600;
// var noOftic=5;
// var cost=ticketPrice*noOftic;
// document.write("Total cost to buy "+noOftic+" tickets to movie is "+cost+"PKR")


// // task 5
// var N = prompt("Enter any number")
// document.write("Table of "+N)
// for(i=1; i<=10; i++){
//     document.write("<br>"+N+"x"+i+"="+N*i)
// }


// // task 6
// var C = 22;
// var F=(C*(9/5)+32);
// document.write(C+"°C is "+F+"°F<br>")

// var Faren = 100;
// var Cel = (Faren-32)*(5/9);
// document.write(Faren+"°F is "+Cel+"°C")


// // task 7
// var price1= 650;
// var price2 = 100;
// var ordQuan1 = 3;
// var ordQuan2 = 7;
// var shipChar = 100;
// var total = (price1*ordQuan1) + (price2*ordQuan2) + shipChar;
// document.write("<h1>Shopping Cart</h1>"+"<br>Price of item 1 is "+price1+"<br>Quantity of item 1 is "+ordQuan1+"<br>Price of item 2 is "+price2+"<br>Quantity of item 2 is "+ordQuan2+"<br>Shipping Charges "+shipChar+"<br><br>Total cost of your order is "+total)


// // task 8
// var totalMarks=980;
// var markObt=804;
// var per= (markObt/totalMarks)*100;
// document.write("Total Marks: "+totalMarks)
// document.write("<br>Marks Obtained: "+markObt)
// document.write("<br>Percentage: "+per+"%")

// task 9
// var total = (10*104.80)+(28*25);
// document.write("<h1>Currency in PKR</h1><br><br>"+"Total Currency in PKR: "+total)


// // task 10
// var num=prompt("Enter any number for calculation:")
// var total = (((+num) + 5)*10)/2
// document.write("The answer is "+total)


// // task 11
// var curYear=prompt("Enter the current year:")
// var birYear=prompt("Enter your birth year:")
// var age1=(curYear-birYear)-1;
// var age2=curYear-birYear;
// document.write("Your possibles ages are: "+age1+" or "+age2)


// // task 12
// var r=3;
// var pi=3.142;
// var circum=2*pi*r;
// var area=pi*(r*r);
// document.write("<h1>The Geometrizer</h1><br>"+"Radius of a circle is: "+r+"<br>The circumference is: "+circum+"<br>The area is "+area)


// // task 13
// var fav="lays"
// var age=23
// var ageMax=70
// var amountPerday=2
// var total = ((ageMax-age)*365)*amountPerday
// document.write("Favourite Snack: "+fav)
// document.write("<br>Current Age: "+age)
// document.write("<br>Estimated Maximum Age: "+ageMax)
// document.write("<br>Amount of snacks per day: "+amountPerday)
// document.write("<br>You will need "+total+" to last you until the ripe old age of "+ageMax)





// >>>----------------- Chapter # 6 - 9 -----------------<<<

// // task 1
// document.write("Result:")
// var a=10
// document.write("<br>The value of a is: "+a)
// document.write("<br>..................................<br>")
// document.write("<br>The value of ++a is: "+ ++a)
// document.write("<br>Now the value of a is: "+a+"<br>")
// document.write("<br>The value of a++ is: "+ a++)
// document.write("<br>Now the value of a is: "+a+"<br>")
// document.write("<br>The value of --a is: "+ --a)
// document.write("<br>Now the value of a is: "+a+"<br>")
// document.write("<br>The value of a-- is: "+ a--)
// document.write("<br>Now the value of a is: "+ a)


// // task 2
// var a = 2, b = 1; 
// document.write("The value of a is: "+a+"<br>")
// document.write("The value of b is: "+b+"<br>")
// var eq1=--a;
// var eq2= eq1 - --b; 
// var eq3= eq2 + ++b; 
// var eq4= eq3 + b--;
// document.write("<br><br>Now the value of a is: "+a)
// document.write("<br>Now the value of b is: "+b)
// document.write("<br><br>The result is: "+eq4)


// // task 3
// var person=prompt("What is your name?")
// document.write("Hey "+person+", Welcome to our site!")


// task 5
// var a=prompt('Enter a number')
// if(a == ''){
// for(i=1;i<11;i++){
// document.write('5'+'x'+i+'='+(5*i)+'<br>')
// }
// }


// else{for(i=1;i<11;i++){
// document.write(a+'x'+i+'='+(a*i)+'<br>')
// }
// }


// // task 6
// var math, english, urdu, pa_s, tot_m, per, obt_m, per_math, per_eng, per_urdu;
// math = +prompt('give obtain marks in MATH : ')
// urdu = +prompt('give obtain marks in URDU : ')
// english = +prompt('give obtain marks in ENGLISH : ')
// pa_s = 100;
// tot_m = 300;
// obt_m = (math + english + urdu);
// per_math = (math / pa_s) * 100;
// ng = (english / pa_s) * 100;
// per_urdu = (urdu / pa_s) * 100;
// per = (ng + per_math + per_urdu) / 3;
// var s_table, english;

// s_table = " <table><thead><tr><th>Subject</th><th>Total marks</th><th>Obtain marks</th><th>Percentage</th></tr></thead><tbody> ";
// s_table += "<tr><td>" + "ENGLISH" + "</td><td>" + pa_s + "</td><td>" + english + "</td><td>" + ng + "%" + "</td></tr>"
// s_table += "<tr><td>" + "MATHS" + "</td><td>" + pa_s + "</td><td>" + math + "</td><td>" + per_math + "%" + "</td></tr>"
// s_table += "<tr><td>" + "URDU" + "</td><td>" + pa_s + "</td><td>" + urdu + "</td><td>" + per_urdu + "%" + "</td></tr>"
// s_table += "<tr><td>" + "  " + "</td><td>" + tot_m + "</td><td>" + obt_m + "</td><td>" + per + "%" + "</td></tr>"

// s_table += "</tbody></table>"
// document.write(s_table)






// >>>----------------- Chapter # 9 - 11 -----------------<<<

// // task 1
// var city;
// city = prompt("Enter your city");
// if (city = "karachi") {
//     document.write("Welcome! to the city of light")
// } else {
//     document.write("welcome!" + " to " + city + "<br><br><br>")
// }


// // task 2
// var gender;
// gender = prompt("ENTER YOUR GENDER")
// if (gender == "male") {
//     document.write("Good Morning Sir!")
// } else if (gender == "female") {
//     document.write("Good Morning Madam!")
// }


// // task 3
// var signal_light;
// signal_light = prompt("Which color of road traffic signal do you like?")
// signal_light = signal_light.toLowerCase();
// if (signal_light == "red") {
//     document.write("Must Stop")
// } else if (signal_light == "yellow") {
//     document.write("Ready to move")
// } else if (signal_light == "green") {
//     document.write("Move now")
// } else ("plz give only red,yellow,green colors")


// // task 4
// var fuel;
// fuel = +prompt("How much fuel does your car have?")
// if (fuel < 0.25) {
//     document.write("Please refill the fuel in your car")
// } else {
//     document.write("Perfect fuel")
// }


// // task 5
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }



// task 6
// var tot_marks, obt_marks, grade, stud_per;
// tot_marks = 300;
// obt_marks = +prompt("Type your marks")
// d = (obt_marks / tot_marks) * 100;
// document.write("Total marks : " + tot_marks + "<br>")
// document.write("Obtain marks : " + obt_marks + "<br>")
// document.write("Your percentage : " + d + "%" + "<br>")

// if (d >= 80) {
//     document.write("Grade : A-one" + "<br>")
//     document.write("EXCELLENT")
// } else if (d >= 79 && d <= 70) {
//     document.write("Grade : A" + "<br>")
//     document.write("GOOD")
// } else if (d >= 69 && d <= 60) {
//     document.write("Grade : B" + "<br>")
//     document.write("You need to improve")
// } else {
//     document.write("Fail")
// }



// // task 7
// var game, gNum;
// gNum = 8;
// game = +prompt("GUESS THE NUMBER FORM 1-10 digits")

// if (game == gNum) {
//     document.write("Bingo! Correct answer")
// } else if (game == 1 + gNum) {
//     document.write("Close enough to the correct answer")
// } else {
//     document.write("no Wrong")
// }


// // task 8
// var divBy3;
// divBy3 = +prompt("WRITE NUMBER")

// if (divBy3 % 3 == 0) {
//     document.write("divisible by 3")
// } else {
//     document.write("Not divisible by 3")
// }


// // task 9
// var Ev_Od;
// Ev_Od = +prompt("Type a number")
// if (Ev_Od % 2 == 0) {
//     document.write("It's an EVEN number")
// } else if (Ev_Od % 2 != 0) {
//     document.write("It's an ODD number")
// }


// // task 10
// var temp;
// temp = +prompt("Type the temperature")
// if (temp >= 40) {
//     document.write("It is too hot outside.")
// } else if (temp >= 30) {
//     document.write("The Weather today is Normal.")
// } else if (temp >= 20) {
//     document.write("Today’s Weather is cool.")
// } else if (temp > 10) {
//     document.write("OMG! Today’s weather is so Cool.")
// }


// // task 11
// var firNum, secNum, opera, result;
// firNum = +prompt("Give the first num")
// secNum = +prompt("Give the second num")
// opera = prompt("Give the operator num (+,-,*,/,%)")
// if (opera == "+") {
//     result = firNum + secNum;
//     document.write(result)
// }
// else if (opera == "-") {
//     result = firNum - secNum;
//     document.write("ANSWER IS : " + result)
// }
// else if (opera == "*") {
//     result = firNum * secNum;
//     document.write("ANSWER IS : " + result)
// } else if (opera == "/") {
//     result = firNum / secNum;
//     document.write("ANSWER IS : " + result)
// } else if (opera == "%") {
//     result = firNum % secNum;
//     document.write("ANSWER IS : " + result)
// }






// >>>----------------- Chapter # 12 - 13 -----------------<<<


// task 1



// task 2

// var f1st, s2nd;
// f1st = prompt("give any number")
// s2nd = prompt("give another number")
// if (f1st > s2nd) {
//     document.write(f1st + " is greater than " + s2nd)
// } else {
//     document.write(s2nd + " is greater than " + f1st)
// }


// task 3


// task 4
// var word, vovel;
// word = prompt("give the alphabet")
// if (word == "a") {
//     document.write("TRUE")
// } else if (word == "e") {
//     document.write("TRUE")
// } else if (word == "e") {
//     document.write("TRUE")
// } else if (word == "i") {
//     document.write("TRUE")
// } else if (word == "o") {
//     document.write("TRUE")
// } else if (word == "u") {
//     document.write("TRUE")
// } else {
//     document.write("FALSE")
// }



// task 5
// var password, ask;
// document.write("Correct password is : pakistan" + "<br>")
// password = "pakistan";
// ask = prompt("Write your password")
// if (ask == password) {
//     document.write("Correct! The password you entered matches the original password")
// } else {
//     document.write("Incorrect password")
// }


// task 6
// var hour = 13;
// if (hour < 18) {
//     var greeting = "Good day";
//     document.write(greeting)

// }
// else {
//     greeting = "Good evening";
//     document.write(greeting)
// }



// task 7

// var time;
// time = prompt("Write the time")
// if (time >= 00 && time < 12) {
//     document.write("GOOD morning!")
// } else if (time >= 12 && time < 17) {
//     document.write("GOOD afternoon!")
// } else if (time >= 17 && time < 21) {
//     document.write("GOOD evening!")
// } else if (time >= 21 && time < 24) {
//     document.write("GOOD night!")
// }






// >>>----------------- Chapter # 17 - 20 -----------------<<<

// var city0 = "Karach";
// var city1 = "Islamabad";
// var city2 = "Hyderabad";
// var city3 = "chitral";
// var city4 = "lahore";
// var city5 = "peshawar";
// document.write(city0 + "<br>")
// document.write(city1 + "<br>")
// document.write(city2 + "<br>")
// document.write(city3 + "<br>")
// document.write(city4 + "<br>")

// var citti;
// citti = ["Karachi", "Islamabad", "Hyderabad", "Chitral", "peshawar"]
// document.write(" JS object notation : " + "<br>" + citti)
// document.write("<br><br><br>")

// var l_notation, s_arr, n_arr;
// l_notation = ["Student name : ", "Muhammad Yahya"]
// document.write(l_notation + "<br>")
// s_arr = ["apple ", "mango ", "orange"]
// document.write("The string array is :" + s_arr + "<br><br>")
// n_arr = [100, 125, 215]
// document.write("The number array is : " + n_arr + "<br><br><br>")
// var bo_a, bo_b;
// bo_a = true;
// bo_b = false;
// document.write("a = " + bo_a + "<br>" + "b = " + bo_b)
// document.write("<br><br><br>")
// var m_arr;
// m_arr = ["one \n", "two \n", 3 + "\n", 4 + "th" + "\n", true + "\n", false + "\n"]
// document.write("the mixed array are : " + m_arr + "<br>")
// document.write("Qualifications : " + "<br><br><br>")
// var qualif, io;
// qualif = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", " PhD"]
// for (i = 1; i < qualif.length; i++) {
//   // de = i + qualif;    
//   document.write(i + ") \n" + qualif[i])
//   document.write("<br>")
// }
// var per_arr, name_arr, score, i_score;
// name_arr = ["Ahmed", "Aqib", "Akber"]
// score = [400, 350, 300]

// for (i_score = 0; i_score < score.length; i_score++) {
//   per_arr = [(score[i_score]) / 500] * 100;
//   document.write("Score of " + name_arr[i_score] + " is " + score[i_score] + "." + "percentage : " + per_arr + "%" + "<br>")
// }
// var colr, ask, askEnd, askAdd, askSub, askr;
// colr = ["Red", "blue", "green", "Black"]
// document.write("The colors are : " + colr + "<br>")
// ask = prompt("Give the color which you want to place at the begining!", "Purple")
// colr.unshift(ask)
// document.write("your color is added : " + " " + colr + "<br>")
// askEnd = prompt("Give the color which you want to place at the end!", "Purple")
// colr.push(askEnd)
// document.write("your color is added : " + " " + colr + "<br>")
// askAdd = prompt("Give the two color which you want to add at the begining!", "plz place(,) between both colors")
// colr.splice(0, -1, askAdd)
// document.write("your color is added : " + " " + colr + "<br>")
// colr.splice(0, 2)
// document.write("Two color are deleted from start : " + colr + "<br>")
// colr = ["Red", "blue", "green", "Black"]
// document.write("The colors are : " + colr + "<br>")
// colr.splice(2, 2)
// document.write("Two color are deleted from end : " + colr + "<br>")
// askSub = +prompt("which index he/she wants to add a color ", "plz write in numeric")
// askCol = prompt("give the color you desire to add")
// colr.splice(askSub, -1, askCol)
// document.write("your color is added : " + " " + colr + "<br>")

// document.write("<br><br><br>")
// var sort, sorted;
// sort = [320, 230, 480, 120]
// document.write("score of students" + sort + "<br>")
// sorted = sort.sort()
// document.write("order of score of students" + sorted + "<br>")
// var cities, askCity, askrCity;
// cities = ["Karachi", "Lahore", "Islamabad", "peshawar", "hyderabad"]
// alert(cities)
// document.write(cities + "<br>")
// askCity = +prompt("give the number of city which you want to select ", "the number starts with 0")
// askrCity = cities.slice(0, askCity)
// document.write("your selected cities are : " + askrCity + "<br>")
// document.write("<br><br><br>")

// var cat;
// document.write("ARRAY" + "<br>")
// cat = ["this", "is", "my", "cat"]
// document.write(cat + "<br>")
// document.write("STRING" + "<br>")
// document.write(cat.join(" "))

// document.write("<br><br><br>")
// var dev, devOrder, devOrder1;
// dev = ["keyboard", "mouse", "printer", "monitor"]
// document.write("Device " + "<br>" + dev + "<br>")
// for (devOrder = 0; devOrder < dev.length; devOrder++) {
//   document.write("Out" + "<br>" + dev[devOrder] + "<br>")
//   document.write("<br>")
// }

// document.write("<br><br><br>")
// for (devOrder1 = 3; devOrder1 >= 0; --devOrder1) {
//   document.write("Out" + "<br>" + dev[devOrder1] + "<br>")
//   document.write("<br>")
// }


// >>>----------------- Chapter # 21 - 25 -----------------<<<

// // task 01 

// var firstName,lastName,fullName;
//     firstName = prompt("write your firstname ");
//     lastName  = prompt("write your lastname ");
//     fullName = firstName + " " + lastName;
//     document.write("Heloo!" + fullName);
// document.write("<br><br><br>");

// // task 02

// var mobModel;
//     mobModel = prompt("Tell us about your favorite mobile model ")
//     document.write("your fav mobile model is " + mobModel + "<br>")
//     document.write("Lenght of string : " + mobModel.length + "<br>")
// document.write("<br><br><br>");

// // task 03

// var text = "Pakistan";
// document.write("String " + text)
// var ask = prompt(text)
// var segIndex = text.lastIndexOf(ask);
// document.write("index of " + ask + " : " + segIndex)
// document.write("<br><br><br>");

// // task 04

// var text1 = "Hello world!";
// var segIndex1 = text1.lastIndexOf("l");
// document.write("String : " + text1 + "<br>")
// document.write("Last index of 'l' : " + segIndex1)
// document.write("<br><br><br>");
// // task 05

// var text,indexAsk ;
//     text = "Pakistan"
//     document.write("String : " + text + " <br>")
//     indexAsk = prompt(text + " give the index of letter")
//     text = text.charAt(indexAsk)
//     document.write("Character of index at " + indexAsk + " : " + text)
// document.write("<br><br><br>");


// // task 06


// var firstName,lastName,fullName;
//     firstName = prompt("write your firstname ");
//     lastName  = prompt("write your lastname ");
//     fullName = firstName.concat(" " +  lastName);
//     document.write("Heloo! " + fullName);
// document.write("<br><br><br>");


// // task 07

// var cityRep,replacement;
//     cityRep = "Hyderabad"
//     document.write(cityRep + "<br>")
//     replacement = cityRep.replace("Hyder","Islam")
//     document.write(replacement)
// document.write("<br><br><br>");


// // task 08
// var message = "Ali and Sami are best friends. They play cricket and football together."
//     document.write(message + "<br>")
//     message = message.replace(/and/g,"&")

//     document.write(message)
// document.write("<br><br><br>");


// // task 09
// var numStr = "720";
//     document.write("Value : " + numStr + "<br>")
//     document.write("type : " + "string" + "<br>")
// var numStr = parseInt(numStr)
//     document.write("value : " + numStr  + "<br>")
//     document.write("type : " + "Number")
// document.write("<br><br><br>");


// // task 10
// var captilize;
//     captilize = prompt("give any number")
//     captilize = captilize.toUpperCase()
//     document.write(captilize)

// document.write("<br><br><br>");


// // task 11
// var askAlph,aplh1,aplhLast;
//     askAlph = prompt("Write any word");
//     aplh1 = askAlph.slice(0,1);
//     aplhLast = askAlph.slice(1);
//     alpha = aplh1.toUpperCase();
//     aplhLast = aplhLast.toLowerCase();
// var askAlph = aplh1 + aplhLast;
//     document.write(askAlph);
// document.write("<br><br><br>");


// // task 12
// var numNum;
//     numNum = 35.65;
//     numNum = numNum * 100;
//     document.write(numNum)
// document.write("<br><br><br>");

// >>>----------------- Chapter # 26 - 30 -----------------<<<

// // task 01
// var numAsk,numAsk1,numAsk2,numAsk3;
//     numAsk = +prompt("give the number in a decimal")
//     document.write("Number : " + numAsk + "<br>")
//     numAsk1 = Math.round(numAsk)
//     document.write("Round : " + numAsk1 + "<br>")
//     numAsk2 = Math.floor(numAsk)
//     document.write("Floor : " + numAsk2 + "<br>")
//     numAsk3 = Math.ceil(numAsk)
//     document.write("ceil : " + numAsk3 + "<br>")
// document.write("<br><br><br>")

// // task 02
// var negAsk,negAsk0,negAsk1,negAsk2;
//     negAsk = -prompt("write a number")
//     document.write("Number : " + negAsk + "<br>")
//     negAsk0 = Math.round(negAsk)
//     document.write("Round : " + negAsk0 + "<br>")
//     negAsk1 = Math.floor(negAsk)
//     document.write("Floor : " + negAsk1 + "<br>")
//     negAsk2 = Math.ceil(negAsk)
//     document.write("Floor : " + negAsk2 + "<br>")
// document.write("<br><br><br>")

// // task 03
// var absolute,abs;
//     absolute = prompt("write any number")
//     abs = -absolute
//     document.write("The absolute value of : " + abs + " is " + absolute)
// document.write("<br><br><br>")

// // task 04
// var random,random1;

//     random = Math.random()
//     random = Math.ceil(random)
//     random1 = random * Math.random()
//     random1 = Math.ceil(random1)
//     document.write("random dies value : " + random1)
// document.write("<br><br><br>")

// // task 05
//     var head,tail,floor,toss;
//     head = prompt("enter head's username")
//     tail = prompt("enter tail's username")
//     toss = Math.random() *2;
//     floor = Math.floor(toss)
//     if(floor > 0){
//         document.write("headuser win the Toss")
//     }else{
//         document.write("tailuser win the Toss")
//     }
// document.write("<br><br><br>")

// // task 06

// var randomNum;
//     askRandom = -prompt("give any random number between 1-10")
//     randomNum = Math.random() * 10;
//     randomNum = Math.floor(randomNum)
//     if(askRandom === randomNum){
//         document.write("Congratulation! " + "<br>")
//     }else{
//         document.write("Try again! " + "<br>")
//     }
//     document.write(" Right number is : " + randomNum)
// document.write("<br><br><br>")

// >>>----------------- Chapter # 31 - 34 -----------------<<<
// // task 01
// var date;
//     date = new Date()
//     document.write(date + "<br>")

// document.write("<br><br><br>")

// // task 02
// var monthNames = ["January", "February", "March", "April", "May", "June",
// "July", "August", "September", "October", "November", "December"
// ];

// var d = new Date();
// document.write("The current month is " + monthNames[d.getMonth()])





// document.write("<br><br><br>")

// // task 03
// var days = ['Sun','Mon','Tues','Wed','Thrus','Fri','Sat'] 
// var day = days[date.getDay()]
// document.write("Today is " + day)
// document.write("<br><br><br>")

// // task 04
// if(day == "sat" || "sun"){
//     document.write("Its fun day")
// }else("Its a working day")
// document.write("<br><br><br>")

// // task 05
// var monthcheck;
//     monthcheck = date.getDay()
//     if(monthcheck < 15){
//         document.write("First fifteen days of the month")
//     }else{
//         document.write("Last days of the month")
//     }
// document.write("<br><br><br>")

// // task 06    

// document.write(date + "<br>")
// var milliSec,min;
//     milliSec = date.getTime()
//     document.write("Elapsed milliseconds since Jan. 1, 1970 : "  + milliSec + "<br>")

//     min = milliSec * 3600;
//     document.write("Elapsed minutes since Jan. 1, 1970 : " + min + "<br>")

// document.write("<br><br><br>")

// // task 07
// var dateAm;
//     dateAm = date.getHours() 
    
//     document.write("The time is : " + dateAm  + "<br>")
//     if(dateAm >= 0 && dateAm == 12 ){
//         document.write("Its AM")
//     }else{
//         document.write("Its PM")
//     }
// document.write("<br><br><br>")

// // task 08
// var laterDate;
//     laterDate = date.setMonth(11)
//     laterDate = date.setDate(31)
//     document.write(date)
// document.write("<br><br><br>")

// // task 09
// var hourAgo;
//     hourAgo = date.setHours(18);
//     document.write("1 hour ago it was " +  date)    
// document.write("<br><br><br>")

// // task 10
// var yearBack;
//     yearBack = date.setFullYear(1915)
//     document.write("100 years ago it was " + date)
// document.write("<br><br><br>")

// // task 11
// var userAge,calYear;
//     userAge = prompt("Write your age")
//     calYear = date.getFullYear() - userAge; 
//     document.write("your age is " + userAge + "<br>")
//     document.write("your birth year is " + calYear)
// document.write("<br><br><br>")

// // task 12
//     document.write("<h1> K-Electric bill</h1>")
// var KE,customer,billMonth,numUnit,chrgePerUnit,netAmount,latePay,grossAmount;
//     customer = "Muhammad Yahya"
//     billMonth = "June"
//     numUnit = 200
//     chrgePerUnit = 16
//     netAmount = numUnit * 16;
//     latePay = 350
//     grossAmount = netAmount + latePay;
//     document.write("Customer Name : " + customer + "<br>")
//     document.write("Month : " + billMonth + "<br>")
//     document.write("Number of units : " + numUnit + "<br>") 
//     document.write("charge per units : " + chrgePerUnit + "<br>")
//     document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>")
//     document.write("Late payment surcharge : " + latePay + "<br>")
//     document.write("Gross Amount Payable (after Due Date): " + grossAmount + "<br>")






// >>>----------------- Chapter # 35 - 38 -----------------<<<

// // task 01
// function newdate(){
//     var dat = new Date()
//     document.write(dat)      
// }
// newdate();

// document.write("<br><br><br>")

// // task 02

// function grt(){
//     var fir1stName = prompt("enter your first name");
//     var lasName = prompt("enter your last name");
//     var fulName = fir1stName + " " + lasName;
//     document.write(fulName)
// }
// grt();
// document.write("<br><br><br>")

// // task 03
// function add(){
//     var a1st = +prompt("first number to add ")
//     var b2nd = +prompt("second number to  add ")
//     var adding = a1st + b2nd;
//     document.write("The Answer of two number by addition is : " + adding)
// }
// add();
// document.write("<br><br><br>")

// // task 04
// function calculator(){
//     var num1,num2,operator,result;
//     num1 = +prompt("Give first number ")
//     num2 = +prompt("Give second number ")
//     operator = prompt("Give operator number (+,-,*,/) ")
//     if(operator == "+"){
//         result = num1 + num2;
       
//     }else if(operator == "-"){
//         result = num1 - num2;
       
//     }else if(operator == "*"){
//         result = num1 * num2;
       
//     }else if(operator == "/"){
//         result = num1 / num2;
       
//     }else{
//         result = "Error"
//     }
//     return result;
// }
// document.write( calculator());
// document.write("<br><br><br>")

// // task 05
// function square(numb){
//     numb = prompt("write any number to make its square")
//     return numb * numb;
// }
// document.write(square());
// document.write("<br><br><br>")

// // task 06
 
// function Factorial(n) {
//     n = +prompt("Please enter an integer") 
//     var ans=1; 
      
//     for (var i = 2; i <= n; i++){ 
//         ans = ans * i; 
//     }
//     return ans; 
// } 
// document.write(Factorial())
// document.write("<br><br><br>")

// // task 07
// function counting(){
//     var startNum = +prompt("Give the starting number of series")
//     var endNum = +prompt("Give the end number of the series")
// for(var star = startNum; star < endNum; star++){
//          document.write(star + " , " )
// }

//     return star
    
// }
// document.write(counting())
// document.write("<br><br><br>")

// // task 08
// function triangle(){
//     var base,perp;
//         base = +prompt("Give the value of Base")
//         perp = +prompt("Give the value of Perpendicular")
//     var hyp;
//         hyp = [(base * base) + (perp * perp)] ^ 1/2;
//     var hypr = Math.sqrt(hyp)
//         return hypr    
// }
// document.write(triangle())
// document.write("<br><br><br>")

// // task 09
// function areaOfTri(width,height){
//     width = prompt("give the width")
//     height = prompt("give the height")
//     var A = width * height;
//     return A
// }

// document.write("The area of triangle : " + areaOfTri())
// document.write("<br><br><br>")

// // task 10
// function palindrome(){
//     var word = prompt("Enter any  word")
// var check = "";
// for(var chc = word.length -1; chc >= 0;chc--){
//     check += word[chc]
// }
// if(word === check){
//     return check + " is a palindromic word"   
// }else{
//     return check + " isn't a palindromic word" 
// }

// }
// document.write(palindrome())
// document.write("<br><br><br>")

// // // task 11
// function strCon(strConvert){
//     strConvert = prompt("Type any sentence ")
//     return strConvert.charAt(0).toUpperCase() + strConvert.slice(1)
// }
// document.write(strCon())
// document.write("<br><br><br>")

// // // task 12

// // // task 13

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count( 'yahya@sdj.com sou hh ', 'o'));
// document.write("<br><br><br>")

// // // // task 14 
// function calcCircumference(Circumference){
//     raDius = prompt("Give the radius")
//     Circumference = 2 * 3.142 * raDius;
//     Circumference = Math.round(Circumference)
//     return Circumference
// }
// document.write("The circumferance of circle is : " + calcCircumference() + "<br>")

// function calcArea(Area){
//     Area =  3.142 * (raDius * raDius);
//     Area = Math.round(Area)
//     return Area
// }
// document.write("The Area of circle is : " + calcArea())







// >>>----------------- Chapter # 38 - 42 -----------------<<<

// // task 1

// function power(a, b) {
//     var i, p = 1;
//     for (i = 1; i <= b; i++)
//         p *= a;
//     return p;
// }

// var x, n, p;
// var x = prompt("Type any number to calculate its power")
// var n = prompt("Type the power of the number")
// p = power(x, n);
// document.write(p)



// // task 2
// function leapyear(year) {
//     if ((year % 4 && year % 100 && year % 400) == 0) {
//         document.write("It's a leap year")
//     }
//     else {
//         document.write("It's not a leap year")
//     }
// }
// var year = prompt("Type any year to check for the leap year")
// leapyear(year)



// task 3
// var a = +prompt("Type the length of 1st side of the triangle")
// var b = +prompt("Type the length of 2nd side of the triangle")
// var c = +prompt("Type the length of 3rd side of the triangle")
// var S;

// var k = calS(a, b, c)
// var L = area(a, b, c, k)
// document.write(L)

// function area(a, b, c, S) {
//     Triarea = S * ((S - a) * (S - b) * (S - c))
//     return Triarea
// }

// function calS(a, b, c) {
//     var S = (a + b + c) / 2
//     return S
// }


// // task 4
// var a = +prompt("Type the marks obtained in English")
// var b = +prompt("Type the marks obtained in Urdu")
// var c = +prompt("Type the marks obtained in Maths")

// var form1 = avg(a,b,c)
// var form2 = per(a,b,c)
// main(form1, form2)

// function main(form1, form2){
//     document.write("Average = " + form1 + "<br>")
//     document.write("Percentage = " + form2)

// }

// function avg(a,b,c){
//     var avgCal= (a+b+c)/3;
//     return avgCal;
// }

// function per(a,b,c){
//     var perCal =( ((a+b+c)/300)*100 )
//     return perCal;
// }


// task 5
// function indexingOf(string, character) {

//     for ( var i =0; i < string.length; i++){
//         if(string[i] == character){  
//             return i
//         }
//         else{

//         }   
//     }
//     return -1;                       
// }
// console.log(indexingOf("Yahya is an engineer", "Y"))
// console.log(indexingOf("Yahya is an engineer", "e"))
// console.log(indexingOf("Yahya is an engineer", "t"))


// // task 6

// function remVowel(text) {
//     var newText0 = text.replace(/a/g, "");
//     var newText1 = newText0.replace(/e/g, "");
//     var newText2 = newText1.replace(/i/g, "");
//     var newText3 = newText2.replace(/o/g, "");
//     var newText4 = newText3.replace(/u/g, "");
//     return newText4;
// }   


// var text = "My name is yahya and i am an engineer";
// var a = remVowel(text)
// remVowel(text)
// document.write("Text = " + text)

// document.write("<br>Vowel removed = " + a)







// task 7 

// function findOccurrences() {

//     var str = prompt("Enter any string")
//     var count = 0;
//     var haveSeenVowel = false;

//     for (const letter of str) {
//         switch (letter) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 {
//                     if (haveSeenVowel) {
//                         count++;
//                         haveSeenVowel = false;
//                     } else {
//                         haveSeenVowel = true;
//                     }
//                     break;
//                 }
//             default:
//                 haveSeenVowel = false
//         }
//     }

//     return count
// }


// document.write("Total no. of occurrences are: " + findOccurrences())




// // task 8

// var dis = +prompt("Type Distance between two cities in Km")
// meters(dis)
// feet(dis)
// inches(dis)
// centimeters(dis)


// function meters(dis){
//     var m = dis * 1000;
//     document.write(m+" meters<br>")
// }
// function feet(dis){
//     var f = dis * 3281;
//     document.write(f+" feets<br>")
// }
// function inches(dis){
//     var i = dis * 39370;
//     document.write(i+" inches<br>")

// }
// function centimeters(dis){
//     var c = dis * 100000;
//     document.write(c+" cm")
// }




// // task 9

// var time = +prompt("Hours of work")
// var remTime = time - 40;
// if(time >= 40){
//     var paid = remTime*12
//     document.write("You earned Rs. "+paid)
// }
// else{
//     document.write("No Overtime")
// }



// // task 10

// var amount = prompt("Please input amount for withdraw : ");
// document.write("Given amount is: "+amount)
// document.write("<br>Required notes of Rs. 100 : " + Math.floor(amount / 100));
// document.write("<br>Required notes of Rs. 50 : " + Math.floor((amount % 100) / 50));
// document.write("<br>Required notes of Rs. 10 : " + Math.floor((((amount % 100) % 50) / 10)));
// document.write("<br>Amount still remaining Rs. : " + Math.floor((((amount % 100) % 50) % 10)));







// >>>----------------- Chapter # 43 - 48 -----------------<<<

// task 1

// On HTML


// task 2

// On HTML



// task 3

// On HTML

// function SomeDeleteRowFunction(o) {
//     //no clue what to put here?
//     var p = o.parentNode.parentNode;
//     p.parentNode.removeChild(p);
// }




// task 4


// On HTML



// task 5

//On Html

// var clicks = 0;
// function increaser() {
//     clicks += 1;
//     document.getElementById("clicks").innerHTML = clicks;
// };
// function decreaser() {
//     clicks -= 1;
//     document.getElementById("clicks").innerHTML = clicks;
// };






// >>>----------------- Chapter # 49 - 52 -----------------<<<


// // task 01
// // to submit detail rander on browser

// function submit() {
//   const fullName = document.getElementById('fullName') // name
//   const password = document.getElementById('password')
//   const age = document.getElementById('age') // age
//   const email = document.getElementById('stuemail') //email
//   document.write("your name is : " + fullName.value + "<br>")
//   document.write("your password : " + password.value + "<br>")
//   document.write("your age is : " + age.value + "<br>")
//   document.write("your email is : " + email.value + "<br>")
// }

// // task no 2
// // hidden content rander on readmore button onclick

// function readMore() {
//   var paragraph = document.getElementById('paragraph').innerHTML;
//   var para = document.getElementById('para');
//   para.innerHTML = paragraph

// }
// // task no 3
// // delete and edit button  

// function formValues() {
//   var full_Name = document.getElementById('fullN')
//   var E_mail = document.getElementById('E-mail')
//   var percentage = document.getElementById('percent')
//   var sr_no = document.getElementById('row1')
//   var sr_no1 = document.getElementById('row2')

//   var val = document.getElementById('row1').childNodes[1]
//   val.innerHTML = full_Name.value;

//   var e_val = document.getElementById('row1').childNodes[2]
//   e_val.innerHTML = E_mail.value;

//   var per_val = document.getElementById('row1').childNodes[3]
//   per_val.innerHTML = percentage.value + "%";



//   if (val.innerHTML != null) {

//     var val_2 = document.getElementById('row2').childNodes[1]
//     val_2.innerHTML = full_Name.value;

//     var e_val_2 = document.getElementById('row2').childNodes[2]
//     e_val_2.innerHTML = E_mail.value;

//     var per_val_2 = document.getElementById('row2').childNodes[3]
//     per_val_2.innerHTML = percentage.value + "%";

//     full_Name.value = ''
//     E_mail.value = ''
//     percentage.value = ''

//   } else if (val_2.innerHTML != null) {
//     var val_3 = document.getElementById('row3').childNodes[1]
//     val_3.innerHTML = full_Name.value;

//     var e_val_3 = document.getElementById('row3').childNodes[2]
//     e_val_3.innerHTML = E_mail.value;

//     var per_val_3 = document.getElementById('row3').childNodes[3]
//     per_val_3.innerHTML = percentage.value + "%";
//   }

// }
// function Geeks() {
//   document.getElementById("row1").remove(); //delete first row
// }
// function Geeks1() {
//   document.getElementById("row2").remove(); // delete second row
// }
// function Geeks2() {
//   document.getElementById("row3").remove(); // delete third row
// }





// >>>----------------- Chapter # 58 - 67 -----------------<<<

// // task no 1(i-ii)
// // to show the childnode of main-content id

// var mainContent = document.getElementById('main-content').childNodes
// document.write(mainContent)
// console.log(mainContent)

// // // task no 1(iii)
// // target paragraph element randor in console

// var rander = document.getElementsByTagName('p')
// var intial;
// for (intial = 0; intial.lenght; intial++) {
//   console.log(rander[intial])

// }

// // task 01(iv)
// // to fill the value of first name

// const f_Name = document.getElementById('first-name')
// f_Name.value = "Yahya"

// // task 1(v) 
// // to fill the value of last name & email

// const l_Name = document.getElementById('last-name')
// l_Name.value = "Ahmed"

// const eMail = document.getElementById('email')
// eMail.value = "yahyakashif23@gmail.com";

// // task 2(i)
// // nodetype of form-content id

// var nodeTYPE = document.getElementById('form-content')
// console.log("the nodetype of form-content id is : " + nodeTYPE.nodeType)


// //  task no 2(ii)
// // to show the child elements and nodetype of lastname id 

// var lN = document.getElementById('lastName')
// console.log("the childnode of lastname id : " + lN.innerHTML)

// var LN = document.getElementById('lastName').nodeType
// console.log("the nodettype of lastname id :" + LN)

// // task no 2(iii)
// // update the lastname id value

// var update = document.getElementById('lastName').childNodes
// update.innerHTML = 'Last Name: Bank Corrupt' // updated lastname value
// console.log(update)

// // task no2(iv)
// // to show the first child and last child of main-content id

// var lastN = document.getElementById('main-content').firstChild // firstchild of main-content id
// console.log(lastN)

// var lastNa = document.getElementById('main-content').lastChild // lastchild of main-content id
// console.log(lastNa)

// // no2(v)
// // geting previous and next siblings

// var l_N = document.getElementById("lastName");
// var previousSibling = l_N.previousSibling; // geting previous sibling of id last name
// console.log(previousSibling)

// var nextSibling = l_N.nextSibling; // geting next sibling of id last name
// console.log(nextSibling)