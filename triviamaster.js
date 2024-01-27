
    document.addEventListener('DOMContentLoaded', function () {
      const quizData = [
    {
        question: "In which movie did the character Tony Stark make his first appearance in the Marvel Cinematic Universe (MCU)?",
        choices: ["Iron Man", "The Avengers", "Thor", "Captain America: The First Avenger"],  
        correctAnswer: "Iron Man"
    }, 
    {
        question: "Who is the main antagonist in the movie 'Avengers: Infinity War'?",  
        choices: ["Loki", "Thanos", "Ultron", "Red Skull"],    
        correctAnswer: "Thanos" 
    },
  
    { 
        question: "Which of the following superheroes wields a shield made of vibranium?",
        choices: ["Thor", "Hawkeye", "Black Widow", "Captain America"], 
        correctAnswer: "Captain America" 
    },
    {  
        question: "Who directed the movie 'Black Panther'?", 
        choices: ["James Gunn", "Ryan Coogler", "Joss Whedon", "Taika Waititi"],
        correctAnswer: "Ryan Coogler"
    },

    {
        question: "What is the name of Thor's enchanted hammer?",
        choices: ["Stormbreaker", "Mjolnir", "Gungnir", "Aegis"],
        correctAnswer: "Mjolnir"
    },

    {
        question: "Which Infinity Stone is embedded in Vision's forehead?",
        choices: ["Power Stone", "Time Stone", "Reality Stone", "Mind Stone"],
        correctAnswer: "Mind Stone"
    },

    {
        question: "What is the name of the alien race attacking Earth in 'The Avengers'?",
        choices: ["Skrulls", "Chitauri", "Kree", "Sakaarans"],
        correctAnswer: "Chitauri"
    },

    {
        question: "Which movie features the character Carol Danvers, also known as Captain Marvel?",
        choices: ["Avengers: Endgame", "Guardians of the Galaxy", "Captain Marvel", "Ant-Man and The Wasp"],
        correctAnswer: "Captain Marvel"
    },

    {
        question: "What is the primary power source of Tony Stark's Iron Man suits?",
        choices: ["Arc Reactor", "Tesseract", "Vibranium", "Pym Particles"],
        correctAnswer: "Arc Reactor"
    },
    {
        question: "Which movie marks the debut of the character T'Challa, also known as Black Panther?",
        choices: ["Avengers: Age of Ultron", "Iron Man 3", "Captain America: Civil War", "Thor: Ragnarok"],
        correctAnswer: "Captain America: Civil War"
    },

      ];
  
      let currentQuestionIndex = 0;
      let userScore = 0;
  
      const quizContainer = document.getElementById('quiz-container');
      const nextButton = document.getElementById('next-button');
      const submitButton = document.getElementById('submit-button');
      const resultContainer = document.getElementById('result-container');
      const scoreElement = document.getElementById('score');
  
      function loadQuestion() {
        const currentQuestion = quizData[currentQuestionIndex];
        quizContainer.innerHTML = `
          <h3 class="text-lg font-semibold mb-2">${currentQuestion.question}</h3>
          <div class="flex flex-col">
            ${currentQuestion.choices.map((choice, index) => `
              <label class="inline-flex items-center mb-2">
                <input type="radio" name="choice" value="${choice}" class="mr-2">
                ${choice}
              </label>
            `).join('')}
          </div>
        `;
      }

      function showResult() {
        quizContainer.innerHTML = '';
        resultContainer.classList.remove('hidden');
        scoreElement.textContent = userScore;
      }
  
      function checkAnswer() {
        const selectedChoice = document.querySelector('input[name="choice"]:checked');
        if (selectedChoice) {
          const userAnswer = selectedChoice.value;
          const correctAnswer = quizData[currentQuestionIndex].correctAnswer;
  
          if (userAnswer === correctAnswer) {
            userScore++;
          }
  
          currentQuestionIndex++;
  
          if (currentQuestionIndex < quizData.length) {
            loadQuestion();
          } else {
            showResult();
          }
        }
      }
      nextButton.addEventListener('click', loadQuestion);
      submitButton.addEventListener('click', checkAnswer);

      loadQuestion();
    });
  
