const questions = [
    {
        question: "Would you like to have a day out with me pleaseee?",
        options: ["Yes", "No"],
        yesResponse: "YAYYY, You're the bestttt Babe!<br>Let's plan it together 🎉",
        noResponse: "No is not an option😑 Just go back and select YES!",
        showConfetti: true
    },
    {
        question: "Where would you like to have your brunch/lunch Ma'am?",
        options: ["A: Leopold Cafe", "B: Pizza by the Bay"]
    },
    {
        question: "What about Dessert?",
        options: ["A: Cheesecake at Bake House Cafe", "B: Icecream at K. Rustoms"]
    },
    {
        question: "Would you prefer shopping at Crawford after Lunch or in the evening?",
        options: ["A: After Lunch", "B: Evening"]
    },
    {
        question: "What other things would you like to do?",
        options: ["A: Walk in a Park", "B: Movie at Night"]
    }
];

let currentQuestionIndex = 0;

// Function to start asking questions
function startQuestions() {
    document.getElementById("init").style.display = "none";
    document.getElementById("que").style.display = "none";
    document.getElementById("questions").style.display = "block";
    showQuestion();  // Show the first question
}

// Function to show the current question
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("questionText").innerText = currentQuestion.question;

    // Update options based on the question
    document.getElementById("optionA").innerText = currentQuestion.options[0];
    document.getElementById("optionB").innerText = currentQuestion.options[1];

    // Show options if not the last question
    document.getElementById("questions").style.display = "block";
}

// Function to handle answers (A or B)
function answer(option) {
    const currentQuestion = questions[currentQuestionIndex];

    // If it's the first question and "Yes" is chosen, show confetti and special message
    if (currentQuestionIndex === 0 && option === 'A') {  // "A" is Yes
        document.getElementById("messageText").innerHTML = currentQuestion.yesResponse;

        // Hide question and options
        document.getElementById("questions").style.display = "none";

        // Show confetti for the first "Yes" answer
        if (currentQuestion.showConfetti) {
            showConfetti();
        }

        // Display the message for a longer duration (e.g., 4 seconds)
        setTimeout(() => {
            document.getElementById("message").style.display = "none";
            currentQuestionIndex++;  // Move to the next question
            showQuestion();
        }, 4000);  // 4 seconds for the special message
    } else if (currentQuestionIndex === 0 && option === 'B') {  // "B" is No
        document.getElementById("messageText").innerHTML = currentQuestion.noResponse;
    } else {
        document.getElementById("messageText").innerHTML = "Great choice! Moving to the next...";
    }

    // If it's not the first question or option is No, show the message for 2 seconds
    if (!(currentQuestionIndex === 0 && option === 'A')) {
        setTimeout(() => {
            document.getElementById("message").style.display = "none";
            currentQuestionIndex++;  // Move to the next question
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                showFinalMessage();
            }
        }, 4000);  // 2 seconds for regular messages
    }

    // Display message temporarily
    document.getElementById("message").style.display = "block";
}

// Final message after all questions are answered
function showFinalMessage() {
    document.getElementById("questions").style.display = "none";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerHTML = "Looking forward to this date Hottieeee!<br>(Of course we'll try all the options you didn't choose next time 😌)";
}

// Function to show confetti
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
