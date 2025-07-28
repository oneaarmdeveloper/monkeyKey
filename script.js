const targetText = "Every Organisation should incorporate Vulnerability Management into their Cybersecurity Program";
let currentIndex = 0;
let correctCount = 0;
let incorrectCount = 0;

function displayText() {
    const textDisplay = document.getElementById('textDisplay');
    textDisplay.innerHTML = '';

    for (let i = 0; i < targetText.length; i++) {
        const span = document.createElement('span');
        span.textContent = targetText[i];
        span.className = 'char';

        if (i === 0) {
            span.classList.add('current');
        }

        textDisplay.appendChild(span);
    }
}

function handleInput(event) {
    const userInput = event.target.value;
    const chars = document.querySelectorAll('.char');

    // Reset classes
    chars.forEach(char => {
        char.classList.remove('correct', 'incorrect', 'current');
    });

    correctCount = 0;
    incorrectCount = 0;

    for (let i = 0; i < userInput.length && i < targetText.length; i++) {
        if (userInput[i] === targetText[i]) {
            chars[i].classList.add('correct');
            correctCount++;
        } else {
            chars[i].classList.add('incorrect');
            incorrectCount++;
        }
    }

    if (userInput.length < targetText.length) {
        chars[userInput.length].classList.add('current');
    }

    currentIndex = userInput.length;
    updateDebugInfo();
}

function updateDebugInfo() {
    document.getElementById('charCount').textContent = targetText.length;
    document.getElementById('currentIndex').textContent = currentIndex;
    document.getElementById('correct').textContent = correctCount;
    document.getElementById('incorrect').textContent = incorrectCount;
}

displayText();
document.getElementById('userInput').addEventListener('input', handleInput);

