let readlineSync = require('readline-sync');

let intro = readlineSync.question('Hello, What is your name? \nYour name: ');
console.log("Nice to meet you " + intro + '!\n\n-----Let us start the quiz-----\n');

let score = 0;

function play(question, answer) {
    let answ = readlineSync.question(question);
    if(answ === answer) {
        score++;
        console.log('You are correct \nCurrent score: ' + score);
    }
    else {
        score--;
        console.log('You are wrong \nCurrent score: ' + score);
    }
    console.log('---------');
}

let quesOne = {
    ques: 'Where do I live? ',
    ans: 'Delhi'
}

let quesTwo = {
    ques: 'What is my last name? ',
    ans: 'Basantani'
}

let quesThree = {
    ques: 'Which subject is the best? ',
    ans: 'Design'
}

let quesFour = {
    ques: 'What pet do I have? ',
    ans: 'Budgie'
}

let quesFive = {
    ques: 'What is my dream place? ',
    ans: 'Norway'
}

let highScores = [
    {
        name: 'Ajay',
        score: 5
    },
    {
        name: 'Shikha',
        score: 4
    },
    {
        name: 'Rohan',
        score: 3
    },
    {
        name: 'Sumit',
        score: 3
    },
    {
        name: 'Anushka',
        score: 2
    }
]


let questions = [quesOne, quesTwo, quesThree, quesFour, quesFive];

for(let i=0; i<questions.length; i++) {
    play(questions[i].ques, questions[i].ans);
} 


function showScores() {
  console.log("Your Final Score: ", score);

  console.log("\nLeaderboard: (reach out if you think you should be there)");

  highScores.map(score => console.log(score.name, " : ", score.score))
}

showScores();