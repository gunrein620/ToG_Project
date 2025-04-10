// DOM 요소
const questionElement = document.getElementById('question');
const oButton = document.getElementById('o-btn');
const xButton = document.getElementById('x-btn');
const scoreElement = document.getElementById('score');

// 게임 상태
let currentQuestionIndex = 0;
let score = 0;
let quizData = [];
const QUIZ_COUNT = 5; // 한 번에 풀 문제 수

// 배열을 랜덤으로 섞는 함수
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 퀴즈 데이터 로드
async function loadQuizData() {
    try {
        const response = await fetch('question.json');
        const data = await response.json();
        // 전체 문제 중에서 랜덤으로 5개 선택
        quizData = shuffleArray([...data.questions]).slice(0, QUIZ_COUNT);
        initQuiz();
    } catch (error) {
        console.error('퀴즈 데이터를 불러오는데 실패했습니다:', error);
        questionElement.textContent = '퀴즈 데이터를 불러오는데 실패했습니다.';
    }
}

// 퀴즈 초기화
function initQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = score;
    showQuestion();
}

// 문제 표시
function showQuestion() {
    if (currentQuestionIndex < quizData.length) {
        questionElement.textContent = quizData[currentQuestionIndex].question;
    } else {
        endQuiz();
    }
}

// 정답 체크
function checkAnswer(userAnswer) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (userAnswer === currentQuestion.answer) {
        score++;
        scoreElement.textContent = score;
    }
    currentQuestionIndex++;
    showQuestion();
}

// 퀴즈 종료
function endQuiz() {
    questionElement.textContent = `퀴즈가 종료되었습니다! 총 점수: ${score}/${QUIZ_COUNT}`;
    oButton.style.display = 'none';
    xButton.style.display = 'none';
}

// 이벤트 리스너
oButton.addEventListener('click', () => checkAnswer(true));
xButton.addEventListener('click', () => checkAnswer(false));

// 퀴즈 데이터 로드 및 시작
loadQuizData(); 