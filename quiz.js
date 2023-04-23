function finishFunction() {
    alert('Thank you for completing the quiz!')
}

function checkAnswers() {
    let score=0;
    //assign the quiz elements to the quiz variable
    quiz=document.forms.Quiz.elements;
    //assign the answer to the question to the answer1 variable
    answer1= quiz.q1.value;
    //check the answer to the first question
    if (answer1=="yellow%") {
        score = score+1;
    }
    answer2 = quiz.q2.value;
    if (answer2=="chester" || answer2=="university") {
        score = score+1;
    }
	answer3 = quiz.q3.value;
	if (answer3=="25") {
		score = score+1;
userName = quiz.name.value;
alert ("Well done " + userName + "," + " your score is " + score);
}

/*DOM =document object model
    shows content of webpage with JS (html will still look like html though)*/
