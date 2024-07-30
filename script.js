document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".question");
  const answers = document.querySelectorAll(".answer");
  const plusIcons = document.querySelectorAll(".plus-icon");
  const minusIcons = document.querySelectorAll(".minus-icon");

  // Function to hide all answers and set icons accordingly
  function hideAllAnswers() {
    for (let i = 0; i < answers.length; i++) {
      answers[i].classList.add("hidden");
      plusIcons[i].classList.remove("hidden");
      minusIcons[i].classList.add("hidden");
    }
  }

  // Function to toggle visibility of answer
  function toggleAnswer(index) {
    const answer = answers[index];
    const plusIcon = plusIcons[index];
    const minusIcon = minusIcons[index];

    if (answer.classList.contains("hidden")) {
      hideAllAnswers(); // Hide all answers before showing the clicked one
      answer.classList.remove("hidden");
      plusIcon.classList.add("hidden");
      minusIcon.classList.remove("hidden");
    } else {
      answer.classList.add("hidden");
      plusIcon.classList.remove("hidden");
      minusIcon.classList.add("hidden");
    }
  }

  // Add click event listeners to all plus and minus icons
  for (let i = 0; i < plusIcons.length; i++) {
    plusIcons[i].addEventListener("click", () => toggleAnswer(i));
  }

  for (let i = 0; i < minusIcons.length; i++) {
    minusIcons[i].addEventListener("click", () => toggleAnswer(i));
  }

  // Add click event listeners to all questions
  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", () => toggleAnswer(i));
  }

  // Initially hide all answers
  hideAllAnswers();
});
