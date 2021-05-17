const quizData = [
  {
    question: "What is the most widely used programming languages?",
    a: "C",
    b: "C++",
    c: "JavaScript",
    d: "Python",
    correct: "c",
  },
  {
    question: "JavaScript was first released in which year?",
    a: "1990",
    b: "1995",
    c: "1999",
    d: "2001",
    correct: "b",
  },
  {
    question: "How many basic groups of data types in JavaScript?",
    a: "1",
    b: "2",
    c: "3",
    d: "5",
    correct: "b",
  },
  {
    question: "Which is not a Javascript framework?",
    a: "Django",
    b: "React",
    c: "Vue",
    d: "angular",
    correct: "a",
  },
  {
    question:
      "Which operator returns true if the two compared values are not equal?",
    a: "<>",
    b: "~",
    c: "==!",
    d: "!==",
    correct: "d",
  },
  {
    question:
      " Which statement is the correct way to create a variable called rate and assign it the value 100?",
    a: "let rate = 100;",
    b: "let 100 = rate;",
    c: "100 = let rate;",
    d: "rate = 100;",
    correct: "a",
  },
  {
    question: "Which statement creates a new Person object called 'student'?",
    a: "var student = new Person();",
    b: "var student = construct Person;",
    c: "var student = Person();",
    d: "var student = construct Person();",
    correct: "a",
  },
  {
    question: "How does a function create a closure?",
    a: "It reloads the document whenever the value changes.",
    b: "It returns a reference to a variable in its parent scope.",
    c: "It completes execution without returning.",
    d: "It copies a local variable to the global scope.",
    correct: "b",
  },
  {
    question:
      "You need to match a time value such as 12:00:32. Which of the following regular expressions would work for your code?",
    a: "/[0-9]{2,}:[0-9]{2,}:[0-9]{2,}/",
    b: "/[0-9]+:[0-9]+:[0-9]+/",
    c: "/ : : /",
    d: " /dd:dd:dd/",
    correct: "d",
  },
  {
    question:
      "Which property references the DOM object that dispatched an event?",
    a: "self",
    b: "object",
    c: "target",
    d: "source",
    correct: "c",
  },
  {
    question:
      "Which of the following function of Array object adds one or more elements to the front of an array and returns the new length of the array?",
    a: "unshift()",
    b: "sort()",
    c: "splice()",
    d: "toString()",
    correct: "a",
  },
  {
    question: "Which method converts JSON data to a JavaScript object?",
    a: "JSON.fromString();",
    b: "JSON.parse()",
    c: "JSON.toObject()",
    d: "JSON.stringify()",
    correct: "b",
  },
  {
    question: "When would you use a conditional statement?",
    a: "When you want to reuse a set of statements multiple times.",
    b: "When you want your code to choose between multiple options.",
    c: "When you want to group data together.",
    d: "When you want to loop through a group of statement",
    correct: "b",
  },
  {
    question:
      "Which Object method returns an iterable that can be used to iterate over the properties of an object?",
    a: "Object.get()",
    b: "Object.loop()",
    c: "Object.each()",
    d: "Object.keys()",
    correct: "d",
  },
  {
    question:
      " Which of the following operators can be used to do a short-circuit evaluation?",
    a: "++",
    b: "--",
    c: "==",
    d: "||",
    correct: "d",
  },
  {
    question: "Output of  '0 && hi'?",
    a: "ReferenceError",
    b: "True",
    c: "0",
    d: "false",
    correct: "c",
  },
  {
    question: " Which one is nullish coalescing operator?",
    a: "==",
    b: "??",
    c: "++",
    d: "===",
    correct: "b",
  },
  {
    question:
      " Which Variable-defining keyword allows its variable to be accessed (as undefined) before the line that defines it?",
    a: "all of them",
    b: "const",
    c: "var",
    d: "let",
    correct: "c",
  },
  {
    question: " Which of the following values is not a Boolean false?",
    a: "Boolean(0)",
    b: "Boolean('')",
    c: "Boolean(NaN)",
    d: "Boolean('false')",
    correct: "d",
  },
  {
    question: " Which of the following is not a keyword in JavaScript?",
    a: "this",
    b: "catch",
    c: "function",
    d: "array",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
let answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectElement();
  const currentQuizData = quizData[currentQuiz];

  questionElement.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelectedElement() {
  let answer = undefined;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) {
      answer = answerElement.id;
    }
  });
  return answer;
}

function deselectElement() {
  answerElements.forEach((answerElement) => {
    answerElement.checked = false;
  });
}

function calculateGrade(num, len) {
  const result = Math.floor((num / len) * 100);
  let grade = "";
  if (result > 90) {
    grade = "Very Good &#128525;";
  } else if (result < 90 && result > 80) {
    grade = "Good &#128512;";
  } else if (result < 80 && result > 70) {
    grade = "Satisfactory &#128513;";
  } else if (result < 70 && result > 60) {
    grade = "Sufficient &#128528;";
  } else if (result < 60 && result > 50) {
    grade = "Poor &#128532;";
  } else {
    grade = "Failed &#128557;";
  }
  return grade;
}

submitButton.addEventListener("click", () => {
  const answer = getSelectedElement();
  console.log(answer);

  if (answer === quizData[currentQuiz].correct) {
    score++;
  }

  if (answer) {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      const r = calculateGrade(score, quizData.length);

      quiz.innerHTML = `<h2>You score is ${score} out of ${quizData.length}.<br>${r}.</h2><button onClick="location.reload()">Try Again</button>`;
    }
  }
});
