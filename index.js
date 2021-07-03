var input = require("readline-sync")
var name = input.question("enter your name here : -> ")
console.log("welcome! " + name + " to do you know chandan")
var entrance = input.question("press 5 to play the game \n")
var click = entrance
while (click != 5) {
  console.log("invalid click")
  click = input.question("press 5 to play the game\n")
}
while (click == 5) {
  var score1 = 0;
  console.log("welcome! " + name + " to the level 1 of do you know chandan. \n\nrule1: you have to enter the answer in UPPERCASE letter or your answer will be treated as wrong.\n\n\n\n ")
  console.log(" 1. chandan is from which country ? \n")
  var ans1 = input.question("INDIA OR PAKISTAN \n")
  if (ans1 == "INDIA") {
    score1++
    console.log("yayyy! right answer \n your score is " + score1 + "\n\n")
  }
  else {
    console.log("wrong! your score is " + score1)

  }
  console.log("2. chandan is from which state ?\n")
  var ans2 = input.question("BIHAR OR JHARKHAND\n")
  if (ans2 == "BIHAR") {
    score1++
    console.log("yayyy! right answer \n your score is " + score1 + "\n\n")
  }
  else {
    console.log("wrong! your score is " + score1)

  }
  console.log("3. chandan is from which district ?\n")
  var ans3 = input.question("PATNA or GAYA\n")
  if (ans3 == "PATNA") {
    score1++
    console.log("yayyy! right answer \n your score is " + score1 + "\n\n")
  }
  else {
    console.log("wrong! your score is " + score1)

  }

  console.log("4. Do chandan know to play pubg ? ")
  var ans4 = input.question(" YEAH OR NOPE \n")
  if (ans4 == "YEAH") {
    score1++
    console.log("yayyy! right answer \n your score is " + score1 + "\n\n")
  }
  else {
    console.log("wrong! your score is " + score1)

  }

  console.log("5. Do chandan know to ride bicycle ? ")
  var ans5 = input.question("YES or NO \n")
  if (ans5 == "YES") {
    score1++
    console.log("yayyy! right answer \n your score is " + score1 + "\n\n")
  }
  else {
    console.log("wrong! your score is " + score1)

  }

  if (score1 != 5) {

    var retry = input.question("press 1 to retry \n")
    if (retry == 1) {
      continue;
    }
    else {
      console.log("THANK YOU! " + name + " FOR PLAYING ,YOU NEED TO KNOW ME MORE TO UNLOCK THE NEXT LEVEL ....")
      break;
    }
    
  }
  if(score1==5)
  {
    console.log("THANK YOU! " + name + " LEVEL 2 WILL BE UPDATED SOON....")
  break;
  }
 
  


}