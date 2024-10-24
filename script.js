// Array of questions and corresponding messages for 'Yes' and 'No'
const questions = [
    {
        question: "Would you like to have a day out with me?",
        yesResponse: "Okay so obviously you being YOU, I don't think you'll wake up before 11, So I'll meet you at 12🎉",
        noResponse: "No is not an option so go back and click YESSSS",
    },
    {
        question: "Where would you like to have your lunch Ma'am?",
        yesResponse: "Awesome! We'll check out that new place 🍽️",
        noResponse: "Come on! You know you love trying new food 😏",
    },
    {
        question: "Are you a morning person?",
        yesResponse: "Wow, let's grab breakfast together sometime! 🌅",
        noResponse: "That's okay, brunch works too! 🥞",
    }
];

let currentQuestionIndex = 0;  // To keep track of the current question

// Function to start asking questions
function startQuestions() {
    document.getElementById("init").style.display = "none";
    document.getElementById("que").style.display = "none";
    document.getElementById("questions").style.display = "block";
    showQuestion();  // Show the first question
}

// Function to show the current question
function showQuestion() {
    document.getElementById("questionText").innerText = questions[currentQuestionIndex].question;
}

// Function when user clicks "Yes"
function answerYes() {
    // Special message and confetti for the first "Yes"
    if (currentQuestionIndex === 0) {
        document.getElementById("messageText").innerText = "YAYYY, You're the bestttt Babe!";
        showConfetti();  // Show confetti for first question's "Yes"
    } else {
        // Regular response for subsequent "Yes" answers
        document.getElementById("messageText").innerText = questions[currentQuestionIndex].yesResponse;
    }
    
    goToNextQuestion();  // Proceed to the next question
}

// Function when user clicks "No"
function answerNo() {
    document.getElementById("messageText").innerText = questions[currentQuestionIndex].noResponse;
    goToNextQuestion();  // Proceed to the next question
}

// Function to go to the next question or end the sequence
function goToNextQuestion() {
    currentQuestionIndex++;  // Move to the next question

    // Delay before showing the next question, so user can see the message
    setTimeout(() => {
        // If there are more questions, show the next one, otherwise end
        if (currentQuestionIndex < questions.length) {
            document.getElementById("message").style.display = "block";
            showQuestion();  // Show the next question
        } else {
            // End the questions and display final message
            document.getElementById("questions").style.display = "none";
            document.getElementById("message").style.display = "block";
            document.getElementById("messageText").innerText = "Thanks for answering all my questions! 🎉";
        }
    }, 3000);  // Delay of 3 seconds to show the next question
}

// Function to show confetti for "Yes" answer to the first question
function showConfetti() {
    const confettiSettings = {
        target: 'confetti-canvas',
        respawn: true,
        colors: ['#ff0000', '#00ff00', '#0000ff'], 
    };
  
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    setTimeout(() => {
        confetti.clear();
    }, 5000);  // Confetti lasts for 5 seconds
}
