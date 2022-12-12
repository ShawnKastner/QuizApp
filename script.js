let questions = [{
    'question': 'Wie heißt ein weiblicher Wolf?',
    'answer_1': 'Wölfin',
    'answer_2': 'Wolfshündin',
    'answer_3': 'Fähe',
    'answer_4': 'Wölfchen',
    'right_answer': 3,
},
{
    'question': 'Was versteht man unter einem Clicker?',
    'answer_1': 'ein Knackfrosch',
    'answer_2': 'ein Kong',
    'answer_3': 'ein Futterautomat',
    'answer_4': 'eine Flyballmaschine',
    'right_answer': 1,
},
{
    'question': 'Welche Hunderasse ist laut FCI die größte?',
    'answer_1': 'Bernhardiner',
    'answer_2': 'Irish Wolfhound',
    'answer_3': 'Dogge',
    'answer_4': 'Riesenschnauzer',
    'right_answer': 2,
},
{
    'question': 'Welches ist dann die kleinste Hunderasse laut der FCI?',
    'answer_1': 'Bologneser',
    'answer_2': 'Bichon frisé',
    'answer_3': 'Shih Tzu',
    'answer_4': 'Chihuahua',
    'right_answer': 4,
},
{
    'question': 'Welche Phase in der Entwicklung eines Hundes ist am wichtigsten?',
    'answer_1': 'vegetative Phase',
    'answer_2': 'Prägungsphase',
    'answer_3': 'Sozialisierungsphase',
    'answer_4': 'Flegelphase',
    'right_answer': 3,
},
{
    'question': 'Welches Sinnesorgan ist beim Hund am besten ausgebildet?',
    'answer_1': 'Augen',
    'answer_2': 'Nase',
    'answer_3': 'Ohren',
    'answer_4': 'Seitenlinienorgan',
    'right_answer': 2,
},
{
    'question': 'Wie alt wurde jemals der älteste Hund?',
    'answer_1': '20 Jahre und 4 Monate',
    'answer_2': '22 Jahre und 9 Monate',
    'answer_3': '24 Jahre und 11 Monate',
    'answer_4': '29 Jahre und 5 Monate',
    'right_answer': 4,
},
{
    'question': 'Ab wann ist ein Hund ein Senior?',
    'answer_1': 'wenn er schlecht sieht',
    'answer_2': 'wenn er die Zähne verliert',
    'answer_3': 'ab 8 Jahren',
    'answer_4': 'ab 12 Jahren',
    'right_answer': 3,
},
{
    'question': 'Wie geben Hunde Wärme ab?',
    'answer_1': 'sie schwitzen',
    'answer_2': 'sie hecheln',
    'answer_3': 'sie springen in einen Bach',
    'answer_4': 'sie schlecken sich gegenseitig ab.',
    'right_answer': 2,
},
{
    'question': 'Welchen Treib des Hundes verwenden wir nicht für die Erziehung?',
    'answer_1': 'Sexualtrieb',
    'answer_2': 'Spieltrieb',
    'answer_3': 'Beutetrieb',
    'answer_4': 'Freßtrieb',
    'right_answer': 1,
}]

let currentQuestion = 0;

let rightAnswer = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    if (currentQuestion >= questions.length) {
        document.getElementById('question-body').style = 'display: none';
        document.getElementById('show-result').style = '';
        showPoints();
    } else {
        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion]; // greift auf die 0. frage zu
    console.log('Selected answer is', selection); //gibt die Variable selection und greift auf das angeklickte feld zu
    let selectedQuestionNumber = selection.slice(-1); //erstellt variable und nimmt von dem jeweiligem angeklickten feld den letzten buchstaben bzw die Nummer und kopiert sie in die Variable
    console.log('selectedQuestionNumber is', selectedQuestionNumber)//gibt die "einkopierte" Nummer aus der Console raus
    console.log('Current question is', question['right_answer']) //gibt die richtige Nummer der Antwort aus der console raus

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightAnswer++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++; // erhört Variable z.B. von 0 auf 1
    document.getElementById('next-button').disabled = true;
    resetAnswers();
    showQuestion();
}

function resetAnswers() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}

function showPoints() {
    document.getElementById('points').innerHTML = rightAnswer;
    document.getElementById('all-points').innerHTML = questions.length;
}