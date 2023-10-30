const questions = [
    {
        question: "What is the capital of Pakistan?",
        choices: ["Lahore", "Karachi", "Islamabad"],
        answer: "Islamabad",
    },
    {
        question: "What is the full form of HTML?",
        choices: ["Hyper Makeup language", "Hyper Markup language", "Hyder Makeup language"],
        answer: "Hyper Markup language",
    },
    {
        question: "What is the full form of js?",
        choices: ["JavaScrip", "JavaScript", "Javacript"],
        answer: "JavaScript",
    },
    {
        question: "What is the main component of air?",
        choices: ["Nitrogen", "Oxygen", "Carbon Dioxide"],
        answer: "Nitrogen",
    },
    {
        question: "What is the chemical symbol for water?",
        choices: ["H2O2", "CO2", "H2O"],
        answer: "H2O",
    },
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

function showQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = `Question ${currentQuestion + 1}: ${current.question}`;

    choicesElement.innerHTML = "";

    for (let i = 0; i < current.choices.length; i++) {
        const choice = current.choices[i];
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "choice";
        input.value = choice;

        label.appendChild(input);
        label.appendChild(document.createTextNode(choice));

        choicesElement.appendChild(label);
    }
}

function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="choice"]:checked');
    
    if (selectedAnswer) {
        if (selectedAnswer.value === questions[currentQuestion].answer) {
            score++;
        }
        
        currentQuestion++;

        if (currentQuestion < questions.length) {
            showQuestion();
            prevButton.style.display = "inline-block";
        } else {
            showResult();
            nextButton.style.display = "none";
        }
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();

        if (currentQuestion === 0) {
            prevButton.style.display = "none";
        }
    }
}

function showResult() {
    const percentage = (score / questions.length) * 100;
    console.log(`You scored ${score} out of ${questions.length}, which is ${percentage}%.`);
}

showQuestion();
prevButton.style.display = "none";
nextButton.style.display = "inline-block";
 