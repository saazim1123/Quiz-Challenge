// Quiz Challenge
var correct = 0;

// Questions
var answer1 = prompt("Who was the top goal scorer for the Premier League for the 2017/2018 season. Please just type the surname");
if (answer1.toUpperCase() === "SALAH"){
    correct += 1;
}

var answer2 = prompt("Which team won the Premier League in 2017/2018.");
if (answer2.toUpperCase() === "MANCHESTER CITY"){
    correct += 1;
}

var answer3 = prompt("Which Premier League team will be playing in the finals of the UEFA Champions League in 2017/2018");
if (answer3.toUpperCase() === "LIVERPOOL FC"){
    correct += 1;
}

var answer4 = prompt("What is the name of the manager who has left Arsenal FC after 22 years in charge");
if (answer4.toUpperCase() === "ARSENE WENGER" || answer4.toUpperCase() === "WENGER" || answer4.toUpperCase() === "ARSENE") {
    correct += 1;
}

var answer5 = prompt("Who were runners-up in the Premier League for the 2017/18 season");
if (answer5.toUpperCase() === "MANCHESTER UNITED"){
    correct += 1;
}

//output of the quiz
document.write("<h2> From the 5 questions, you have gotten " + correct + " correct </h2>");

// crown
if(correct === 5){
    document.write("<p> You have received a gold crown </p>");
}
    else if (correct >= 3) {
        document.write("<p> You have received a siver crown </p>");
    }
    
    else if (correct >= 2) {
        document.write("<p> You have recieved a bronze crown </p>");
    }

else{
    document.write("<p> You need to revise. You are not worthy of a crown. </p>")
}