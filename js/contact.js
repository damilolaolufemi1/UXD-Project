function generateQuestion() {
    // this is to random numbers for the arithmetic question
    const num1 = Math.floor(Math.random() * 5) + 1; // I can adjust the range as needed here
    const num2 = Math.floor(Math.random() * 5) + 1;
  
    // this is to randomly choose whether addition or subtraction
    const operator = Math.random() < 0.5 ? '+' : '-';
  
    // Display the question
    const questionElement = document.getElementById('question');
    questionElement.textContent = `${num1} ${operator} ${num2} = ?`;
  
    // this is to clear the previous answer
    document.getElementById('quiz-answer').value = '';
  }
  
  /*function validateForm() {
    // this gets the user's answer
    const userAnswer = document.getElementById('quiz-answer').value;
  
    const questionElement = document.getElementById('question');
    const [num1, operator, num2] = questionElement.textContent.split(' ');
  
    let correctAnswer;
    if (operator === '+') {
      correctAnswer = parseInt(num1) + parseInt(num2);
    } else {
      correctAnswer = parseInt(num1) - parseInt(num2);
    }
  
    if (userAnswer === correctAnswer.toString()) {
      
      alert('Correct! Form will be submitted.');
      
      document.getElementById('your-form-id').submit();
    } else {
      // this displays an error message when answer is incorrect
      alert('Incorrect answer. Please try again.');
    } 
  } */

  function validateAndSubmitForm() {
    if (validateForm()) {
      document.getElementById('contactForm').submit();
    }
  }
  
  function validateForm() {
    const userAnswer = document.getElementById('quiz-answer').value;
    const questionElement = document.getElementById('question');
    const [num1, operator, num2] = questionElement.textContent.split(' ');
  
    let correctAnswer;
    if (operator === '+') {
      correctAnswer = parseInt(num1) + parseInt(num2);
    } else {
      correctAnswer = parseInt(num1) - parseInt(num2);
    }
  
    if (userAnswer === correctAnswer.toString()) {
    
      return true;
    } else {
    
      alert('Incorrect answer. Please try again.');
      return false;
    }
  }
  
  
  // Toggle Function
  function togglePrivacyPolicy() {
    const toggle = document.getElementById('privacy-policy-toggle');
    toggle.classList.toggle('active');
  }
