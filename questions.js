// Quiz questions array
const questions = [
    // Science Questions (5 questions)
    {
      question: "What is the chemical symbol for water?",
      options: ["O2", "H2O", "CO2", "H2"],
      correct: "H2O",
      topic: "Science",
      difficulty: "Easy",
      answer:1
    },
    {
      question: "What planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: "Mars",
      topic: "Science",
      difficulty: "Medium",
      answer: 2
    },
    {
      question: "What is the speed of light?",
      options: ["299,792,458 meters per second", "300,000 km/h", "150,000 km/s", "200,000 km/s"],
      correct: "299,792,458 meters per second",
      topic: "Science",
      difficulty: "Hard",
      answer: 1
    },
    {
      question: "Which gas do plants absorb from the atmosphere for photosynthesis?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
      correct: "Carbon Dioxide",
      topic: "Science",
      difficulty: "Easy",
      answer: 2
    },
    {
      question: "What is the chemical symbol for Gold?",
      options: ["Au", "Ag", "Pb", "Fe"],
      correct: "Au",
      topic: "Science",
      difficulty: "Medium",
      answer:1
    },
  
    // History Questions (5 questions)
    {
      question: "Who was the first president of the United States?",
      options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
      correct: "George Washington",
      topic: "History",
      difficulty: "Easy",
      answer: 1
    },
    {
      question: "In what year did World War I begin?",
      options: ["1912", "1914", "1916", "1918"],
      correct: "1914",
      topic: "History",
      difficulty: "Medium",
      answer: 2
    },
    {
      question: "Which ancient civilization built the pyramids?",
      options: ["Romans", "Greeks", "Egyptians", "Mesopotamians"],
      correct: "Egyptians",
      topic: "History",
      difficulty: "Hard",
      answer: 3
    },
    {
      question: "Who discovered America in 1492?",
      options: ["Christopher Columbus", "Leif Erikson", "Ferdinand Magellan", "Vasco da Gama"],
      correct: "Christopher Columbus",
      topic: "History",
      difficulty: "Medium",
      answer: 1
    },
    {
      question: "Who was the first woman to fly solo across the Atlantic Ocean?",
      options: ["Amelia Earhart", "Bessie Coleman", "Harriet Quimby", "Jacqueline Cochran"],
      correct: "Amelia Earhart",
      topic: "History",
      difficulty: "Hard",
      answer: 1
    },
  
    // Technology Questions (5 questions)
    {
      question: "Who is the founder of Microsoft?",
      options: ["Steve Jobs", "Mark Zuckerberg", "Bill Gates", "Larry Page"],
      correct: "Bill Gates",
      topic: "Technology",
      difficulty: "Easy",
      answer: 3
    },
    {
      question: "What does HTTP stand for?",
      options: ["HyperText Transfer Protocol", "HyperText Technical Protocol", "HyperText Transmission Protocol", "High-Tech Transfer Protocol"],
      correct: "HyperText Transfer Protocol",
      topic: "Technology",
      difficulty: "Medium",
      answer: 1
    },
    {
      question: "Which company developed the first smartphone?",
      options: ["Apple", "Samsung", "IBM", "Nokia"],
      correct: "IBM",
      topic: "Technology",
      difficulty: "Hard",
      answer: 3
    },
    {
      question: "What is the name of the first artificial satellite?",
      options: ["Sputnik", "Apollo", "Hubble", "Explorer"],
      correct: "Sputnik",
      topic: "Technology",
      difficulty: "Medium",
      answer: 1
    },
    {
      question: "What does the acronym 'USB' stand for?",
      options: ["Universal Serial Bus", "Universal System Bus", "United Serial Base", "Unified Serial Base"],
      correct: "Universal Serial Bus",
      topic: "Technology",
      difficulty: "Easy",
      answer: 1
    },
  
    // Geography Questions (5 questions)
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correct: "Paris",
      topic: "Geography",
      difficulty: "Easy",
      answer: 3
    },
    {
      question: "Which is the largest continent by land area?",
      options: ["Africa", "Asia", "North America", "Australia"],
      correct: "Asia",
      topic: "Geography",
      difficulty: "Medium",
      answer: 2
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "India", "Japan", "Thailand"],
      correct: "Japan",
      topic: "Geography",
      difficulty: "Easy",
      answer: 3
    },
    {
      question: "Which desert is the largest in the world?",
      options: ["Sahara", "Gobi", "Kalahari", "Atacama"],
      correct: "Sahara",
      topic: "Geography",
      difficulty: "Medium",
      answer: 1
    },
    {
      question: "Which country is home to the Great Barrier Reef?",
      options: ["Australia", "New Zealand", "South Africa", "Indonesia"],
      correct: "Australia",
      topic: "Geography",
      difficulty: "Hard",
      answer: 1
    }
  ];
  
  let currentQuestionIndex = 0;
  let selectedAnswer = null;
  
  const questionText = document.querySelector(".question");
  const optionsContainer = document.querySelector(".options");
  const progress = document.querySelector(".progress");
  const nextButton = document.querySelector("button");
  const progressUpdate = document.querySelector('.progressUpdate')
  
  // Function to load a question
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
  
    // Update question text
    questionText.textContent = currentQuestion.question;
  
    // Clear existing options
    optionsContainer.innerHTML = "";
  
    // Add new options
    currentQuestion.options.forEach((option, index) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "answer";
      input.value = index;
  
      // Set up option click event to enable the Next button
      input.addEventListener("change", function () {
        selectedAnswer = parseInt(this.value);
        nextButton.disabled = false;
      });
  
      label.appendChild(input);
      label.appendChild(document.createTextNode(option));
      optionsContainer.appendChild(label);
    });
  
    // Update progress bar
    const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
    progress.style.width = `${progressPercentage}%`;
  
    // Disable Next button until an option is selected
    nextButton.disabled = true;
  }
  
  // Function to handle clicking "Next"
  nextButton.addEventListener("click", function () {
    // Check if the selected answer is correct
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
      console.log("Correct answer!");
    } else {
      console.log("Wrong answer!");
    }
  
    // Move to the next question
    currentQuestionIndex++;
    selectedAnswer = null;
  
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      // End of quiz
      questionText.textContent = "Quiz completed!";
      optionsContainer.innerHTML = "";
      nextButton.disabled = true;
      progress.style.width = "100%";
    }
  });
  
  // Load the first question on page load
  loadQuestion();