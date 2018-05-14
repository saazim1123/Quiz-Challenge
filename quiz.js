//Quiz Begins, no correct answer

var correct = 0;

//Ask Questions
var answer1 = prompt("What is the Capital of Bangladesh");
if (answer1.toUpperCase() === 'DHAKA'){
    correct += 1;
}

var answer2 = prompt("What is the Capital of United Kingdom")
if (answer2.toUpperCase() === 'LONDON'){
    correct += 1;
}

var answer3 = prompt("What is the Capital of United States ")
if (answer3.toUpperCase() === 'WASHINGTON DC'){
    correct += 1;
}

var answer4 = prompt("What is the Capital Pakistan")
if (answer4.toUpperCase() === 'ISLAMABAD'){
    correct += 1;
}

var answer5 = prompt("What is the Capital of Afghanistan")
if (answer5.toUpperCase() === 'KABUL'){
    correct += 1;
}

//Output of the Questions
document.write("<h2> From the 5 questions you have gotten " + correct + " correct </h2>")

//Ranks
if(correct === 5){
    document.write("<p> You have earned a gold crown </p>")
}
    else if(correct >= 3){
        document.write("<p> You have earned a silver crown </p>")
    }

    else if(correct >= 2){
        document.write("<p> You have earned a bronze crown </p>")
    }
else {
    document.write("<p> Unfortunately, you haven't got enough answers right in order to warrant a crown. </p>")
}