function startQuestions() {
    document.getElementById("questions").style.display = "block";
  }
  
  function answerYes() {
    document.getElementById("questions").style.display = "none";
      document.getElementById("que").style.display = "none";
      document.getElementById("init").innerText = "YEY YEY 🎉🎉🎉 YOU THE BEST";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerText = "Okay so obviously you being YOU, I don't think you'll wake up before 11, So I'll meet you at 12:30";
    showConfetti()
}
  
  function answerNo() {
    document.getElementById("questions").style.display = "none";
    document.getElementById("que").style.display = "none";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerText = "No is not an option so go back and click YESSSS";

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
    }, 5000);
  }
  
