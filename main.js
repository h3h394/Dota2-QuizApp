let quizPage = document.querySelector('.quizContainer');
const correctQuizAnswers = document.querySelector('.correctQuizAnswers'),
    totalQuizPoints = document.querySelector('.totalQuizPoints');

let index = 0;
let correctAnswerCounter = 0;
let totalQuizPointsCount = 0;

correctQuizAnswers.innerHTML = correctAnswerCounter;
totalQuizPoints.innerHTML = totalQuizPointsCount;

const quiz = [
    {
        stage: {
            heroURL: 'img/hero1.png',
            stageAnswers: [
                'Shadow Fiend',
                'Storm Spirit',
                'Alchemist',
                'Pudge'
            ],
            correctAnswer: 'Alchemist'
        }
    },
    {
        stage: {
            heroURL: 'img/hero2.png',
            stageAnswers: [
                'Batrider',
                'Techies',
                'Drow',
                'Lina'
            ],
            correctAnswer: 'Batrider'
        }
    },
    {
        stage: {
            heroURL: 'img/hero3.png',
            stageAnswers: [
                'Abaddon',
                'Oracle',
                'Huskar',
                'Bristleback'
            ],
            correctAnswer: 'Bristleback'
        }
    },
    {
        stage: {
            heroURL: 'img/hero4.png',
            stageAnswers: [
                'Crystal Maiden',
                'Lion',
                'Necrophos',
                'Pudge'
            ],
            correctAnswer: 'Crystal Maiden'
        }
    },
    {
        stage: {
            heroURL: 'img/hero5.png',
            stageAnswers: [
                'Grimstroke',
                'Dazzle',
                'Jakiro',
                'Morphling'
            ],
            correctAnswer: 'Dazzle'
        }
    },
    {
        stage: {
            heroURL: 'img/hero6.png',
            stageAnswers: [
                'Mirana',
                'Axe',
                'Brewmaster',
                'Earth Spirit'
            ],
            correctAnswer: 'Earth Spirit'
        }
    },
    {
        stage: {
            heroURL: 'img/hero7.png',
            stageAnswers: [
                'Earthshaker',
                'Doom',
                'Alchemist',
                'Elder Titan'
            ],
            correctAnswer: 'Earthshaker'
        }
    },
    {
        stage: {
            heroURL: 'img/hero8.png',
            stageAnswers: [
                'Night Stalker',
                'Kunkka',
                'Ember Spirit',
                'Io'
            ],
            correctAnswer: 'Ember Spirit'
        }
    },
    {
        stage: {
            heroURL: 'img/hero9.png',
            stageAnswers: [
                'Wraith King',
                'Invoker',
                'Lycan',
                'Tidehunter'
            ],
            correctAnswer: 'Invoker'
        }
    },
    {
        stage: {
            heroURL: 'img/hero10.png',
            stageAnswers: [
                'Kunkka',
                'Juggernaut',
                'Broodmother',
                'Meepo'
            ],
            correctAnswer: 'Kunkka'
        }
    },
    {
        stage: {
            heroURL: 'img/hero11.png',
            stageAnswers: [
                'Gyrocopter',
                'Storm Spirit',
                'Pangolier',
                'Lion'
            ],
            correctAnswer: 'Lion'
        }
    },
    {
        stage: {
            heroURL: 'img/hero12.png',
            stageAnswers: [
                'Magnus',
                'Omniknight',
                'Chaos Knight',
                'Treant Protector'
            ],
            correctAnswer: 'Omniknight'
        }
    },
    {
        stage: {
            heroURL: 'img/hero13.png',
            stageAnswers: [
                'Shadow Fiend',
                'Monkey King',
                'Shadow Shaman',
                'Phantom Assasin'
            ],
            correctAnswer: 'Shadow Shaman'
        }
    },
    {
        stage: {
            heroURL: 'img/hero14.png',
            stageAnswers: [
                'Puck',
                'Dark Seer',
                'Dark Willow',
                'Dazzle'
            ],
            correctAnswer: 'Puck'
        }
    },
    {
        stage: {
            heroURL: 'img/hero15.png',
            stageAnswers: [
                'Alchemist',
                'Pudge',
                'Techies',
                'Enigma'
            ],
            correctAnswer: 'Pudge'
        }
    },
    {
        stage: {
            heroURL: 'img/hero16.png',
            stageAnswers: [
                'Leshrac',
                'Storm Spirit',
                'Riki',
                'Oracle'
            ],
            correctAnswer: 'Riki'
        }
    },
    {
        stage: {
            heroURL: 'img/hero17.png',
            stageAnswers: [
                'Skywrath Mage',
                'Naga Siren',
                'Queen of Pain',
                'Shadow Demon'
            ],
            correctAnswer: 'Shadow Demon'
        }
    },
    {
        stage: {
            heroURL: 'img/hero18.png',
            stageAnswers: [
                'Slark',
                'Bounty Hunter',
                'Nyx Assasin',
                'Spectre'
            ],
            correctAnswer: 'Slark'
        }
    },
    {
        stage: {
            heroURL: 'img/hero19.png',
            stageAnswers: [
                'Spirit Breaker',
                'Sniper',
                'Sven',
                'Medusa'
            ],
            correctAnswer: 'Sven'
        }
    },
    {
        stage: {
            heroURL: 'img/hero20.png',
            stageAnswers: [
                'Zeus',
                'Treant Protector',
                'Slardar',
                'Tusk'
            ],
            correctAnswer: 'Zeus'
        }
    }
];

nextStage(index);

function nextStage(index) {
    const q = quiz[index];
    const stage = q.stage;
    const answers = stage.stageAnswers;
    const correct = stage.correctAnswer;
    const heroImage = stage.heroURL;
    quizPage.innerHTML = `
    <div class="quizHeading">
        <div class="quizImage"><img src="${heroImage}"></div>
    </div>
    <div class="quizAnswersContainer">
        <div class="quizAnswer">
        ${answers[0]}
        </div>
        <div class="quizAnswer">
        ${answers[1]}
        </div>
        <div class="quizAnswer">
        ${answers[2]}
        </div>
        <div class="quizAnswer">
        ${answers[3]}
        </div>
    </div>`;
};

document.body.addEventListener('click', e => {
    if (e.target.classList.contains('newGame')) {
        index = 0;
        correctAnswerCounter = 0;
        correctQuizAnswers.innerHTML = correctAnswerCounter;
        totalQuizPointsCount = 0;
        totalQuizPoints.innerHTML = totalQuizPointsCount;
        nextStage(index);
    }
    if (e.target.classList.contains('quizAnswer')) {
        if (e.target.innerText === quiz[index].stage.correctAnswer) {
            correctAnswerCounter++;
            correctQuizAnswers.innerHTML = correctAnswerCounter;
            totalQuizPointsCount += 5;
            totalQuizPoints.innerHTML = totalQuizPointsCount;
            if (index >= 19) {
                quizPage.innerHTML = `
                <div class="resultsPage">
                <h2>Your final results</h2>
                <p class="allCorrectAnswers">${correctAnswerCounter} correct answers</p>
                <p class="allPoints">${totalQuizPointsCount} points</p>
                <button class="newGame">Start Over</button>
                </div>`;
            } else {
                index++;
                nextStage(index);
            }
        } else {
            if (index >= 19) {
                quizPage.innerHTML = `
                <div class="resultsPage">
                <h2>Your final results</h2>
                <p class="allCorrectAnswers">${correctAnswerCounter} correct answers</p>
                <p class="allPoints">${totalQuizPointsCount} points</p>
                <button class="newGame">Start Over</button>
                </div>`;
            } else {
                index++;
                nextStage(index);
            }
        }
    }
});